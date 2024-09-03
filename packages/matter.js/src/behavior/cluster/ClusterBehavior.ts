/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    AsyncObservable,
    EventEmitter,
    ImplementationError,
    MaybePromise,
    Observable,
} from "@project-chip/matter.js-general";
import { ClusterType } from "../../cluster/ClusterType.js";
import { ClusterComposer } from "../../cluster/mutation/ClusterComposer.js";
import { ElementModifier } from "../../cluster/mutation/ElementModifier.js";
import type { Agent } from "../../endpoint/Agent.js";
import { TypeFromBitSchema } from "../../schema/BitmapSchema.js";
import { Behavior } from "../Behavior.js";
import type { BehaviorBacking } from "../internal/BehaviorBacking.js";
import type { RootSupervisor } from "../supervision/RootSupervisor.js";
import { Schema } from "../supervision/Schema.js";
import { NetworkBehavior } from "../system/network/NetworkBehavior.js";
import { ExtensionInterfaceOf, createType, type ClusterOf } from "./ClusterBehaviorUtil.js";
import type { ClusterEvents } from "./ClusterEvents.js";
import { ClusterInterface } from "./ClusterInterface.js";
import type { ClusterState } from "./ClusterState.js";

/**
 * A {@link Behavior} with specialization for a specific cluster.
 *
 * To implement cluster functionality you should use a subclass provided by {@link ClusterBehavior.for} with the
 * {@link ClusterType} you are implementing.  Most commonly you would use one of the predefined implementations
 * matter.js includes.
 *
 * Subclasses can be modified using the static builder methods or extended like a normal class.
 *
 * Behaviors should store all mutable state in their {@link Behavior.state} property.  Other fields will be transient
 * and may not be retained across invocations.
 *
 * ClusterBehaviors may be instantiated with unsupported mandatory commands and attributes.  This is currently results
 * in a runtime error but it will not cause a type error during development.
 */
export class ClusterBehavior extends Behavior {
    /**
     * The ID of ClusterBehavior implementations is the uncapitalized cluster name.
     */
    static override id: Uncapitalize<string>;

    /**
     * The cluster implemented by this behavior.
     */
    get cluster() {
        return (this.constructor as typeof ClusterBehavior).cluster;
    }

    /**
     * Supported features as a flag object.
     */
    get features() {
        return this.cluster.supportedFeatures;
    }

    /**
     * Every cluster behavior has an associated ClusterType defined statically.
     */
    static readonly cluster = ClusterType.Unknown;

    /**
     * Method definitions.
     */
    static readonly Interface = ClusterInterface.Empty;

    /**
     * All ClusterBehavior initialization currently runs as part of {@link Endpoint} initialization.
     */
    static override readonly early = true;

    /**
     * Keep networking alive until I'm destroyed.
     */
    static override readonly dependencies = [NetworkBehavior];

    constructor(agent: Agent, backing: BehaviorBacking) {
        super(agent, backing);

        const cluster = (this.constructor as typeof ClusterBehavior).cluster;
        if (!cluster) {
            throw new ImplementationError("ClusterBehavior class has no cluster defined");
        }
    }

    /**
     * Create a new behavior for a specific {@link ClusterType}.
     *
     * If you invoke directly on {@link ClusterBehavior} you will receive a new implementation that reports all commands
     * as unimplemented.
     *
     * If you invoke on an existing subclass, you will receive a new implementation with the cluster in the subclass
     * replaced.  You should generally only do this with a {@link ClusterType} with the same ID.
     */
    static for<This extends ClusterBehavior.Type, const ClusterT extends ClusterType>(
        this: This,
        cluster: ClusterT,
        schema?: Schema,
    ) {
        return createType(cluster, this, schema) as ClusterBehavior.Type<ClusterT, This>;
    }

    /**
     * Create a new behavior with different cluster features.
     */
    static with<
        This extends ClusterBehavior.Type,
        const FeaturesT extends ClusterComposer.FeatureSelection<This["cluster"]>,
    >(this: This, ...features: FeaturesT) {
        const newCluster = new ClusterComposer(this.cluster).compose(features) as ClusterComposer.WithFeatures<
            This["cluster"],
            FeaturesT
        >;
        return this.for(newCluster);
    }

    /**
     * Create a new behavior with modified cluster elements.
     */
    static alter<
        This extends ClusterBehavior.Type,
        const AlterationsT extends ElementModifier.Alterations<This["cluster"]>,
    >(this: This, alterations: AlterationsT) {
        return this.for(new ElementModifier(this.cluster).alter(alterations));
    }

    /**
     * Create a new behavior with additional cluster features marked "mandatory".
     *
     * This informs matter.js that an application supports these elements.
     */
    static enable<
        This extends ClusterBehavior.Type,
        const FlagsT extends ElementModifier.ElementFlags<This["cluster"]>,
    >(this: This, flags: FlagsT) {
        return this.for(new ElementModifier(this.cluster).enable(flags));
    }

    /**
     * Create a ClusterBehavior like this one with different interface methods.
     *
     * The Interface "property" is type-only.  We define a method however to keep the API consistent.  At runtime the
     * method is a no-op.
     */
    static withInterface<const I extends ClusterInterface>() {
        return this as unknown as ClusterBehavior.Type<typeof ClusterType.Unknown, typeof ClusterBehavior, I>;
    }

    static override supports(other: Behavior.Type) {
        if (!Behavior.supports.call(this, other)) {
            return false;
        }

        const otherCluster = (other as { cluster?: ClusterType }).cluster;
        if (!otherCluster) {
            return false;
        }

        const otherFeatures = otherCluster.supportedFeatures;
        const myFeatures = this.cluster.supportedFeatures;
        for (const name in otherFeatures) {
            if (otherFeatures[name] && !(myFeatures as Record<string, boolean>)[name]) {
                return false;
            }
        }

        return true;
    }

    requireAttributeEnabled<This extends Behavior, K extends keyof This["state"]>(
        this: This,
        attributeName: K,
    ): Exclude<This["state"][K], undefined> {
        if ((this.state as any)[attributeName] === undefined) {
            throw new ImplementationError(
                `To use this feature, please enable attribute ${String(attributeName)} by setting the value during initialization.`,
            );
        }
        return (this.state as any)[attributeName];
    }

    assertAttributeEnabled<This extends Behavior, K extends keyof This["state"]>(this: This, attributeName: K): void {
        if ((this.state as any)[attributeName] === undefined) {
            throw new ImplementationError(
                `To use this feature, please enable attribute ${String(attributeName)} by setting the value during initialization.`,
            );
        }
    }
}

export namespace ClusterBehavior {
    /**
     * A ClusterBehavior specialized for a specific Cluster.
     */
    export interface Type<
        C extends ClusterType = ClusterType,
        B extends Behavior.Type = Behavior.Type,
        I extends ClusterInterface = ClusterInterface.InterfaceOf<B>,
    > {
        new (agent: Agent, backing: BehaviorBacking): Instance<C, B, I>;

        readonly name: string;

        /**
         * The behavior ID for ClusterBehaviors is the name of the cluster.
         */
        readonly id: Uncapitalize<C["name"]>;

        /**
         * Base cluster state include all attribute values but may be extended by subclasses.
         */
        readonly cluster: C;

        readonly Events: ClusterEvents.Type<C, B>;
        readonly State: new () => ClusterState.Type<C, B>;
        readonly Internal: B["Internal"];
        readonly Interface: I;

        readonly schema?: Schema;
        readonly early: boolean;
        readonly defaults: ClusterState.Type<C, B>;
        readonly supervisor: RootSupervisor;
        readonly dependencies?: Iterable<Behavior.Type>;
        supports: typeof ClusterBehavior.supports;
        readonly ExtensionInterface: ExtensionInterfaceOf<B>;

        // Prior to TS 5.4 could do this.  Sadly typing no longer carries through on these...  This["cluster"] reverts
        // to ClusterType).  So we have to define the long way.
        //
        // This also means intellisense doesn't work unless we copy comments here (or move here and cast ClusterBehavior
        // to ClusterBehavior.Type).
        //
        // - for: typeof ClusterBehavior.for;
        // - with: typeof ClusterBehavior.with;
        // - alter: typeof ClusterBehavior.alter;
        // - set: typeof ClusterBehavior.set;
        // - enable: typeof ClusterBehavior.enable;

        for<This extends ClusterBehavior.Type, const ClusterT extends ClusterType>(
            this: This,
            cluster: ClusterT,
            schema?: Schema,
        ): ClusterBehavior.Type<ClusterT, This>;

        with<
            This extends ClusterBehavior.Type,
            const FeaturesT extends ClusterComposer.FeatureSelection<This["cluster"]>,
        >(
            this: This,
            ...features: FeaturesT
        ): ClusterBehavior.Type<ClusterComposer.WithFeatures<This["cluster"], FeaturesT>, This>;

        alter<
            This extends ClusterBehavior.Type,
            const AlterationsT extends ElementModifier.Alterations<This["cluster"]>,
        >(
            this: This,
            alterations: AlterationsT,
        ): ClusterBehavior.Type<ElementModifier.WithAlterations<This["cluster"], AlterationsT>, This>;

        set<This extends Behavior.Type>(this: This, defaults: Behavior.InputStateOf<This>): This;

        enable<This extends ClusterBehavior.Type, const FlagsT extends ElementModifier.ElementFlags<This["cluster"]>>(
            this: This,
            flags: FlagsT,
        ): ClusterBehavior.Type<
            ElementModifier.WithAlterations<This["cluster"], ElementModifier.ElementFlagAlterations<FlagsT>>,
            This
        >;
    }

    /**
     * A fully-typed ClusterBehavior.  This type is derived by combining properties of the base type with properties
     * contributed by the cluster.
     */
    export type Instance<C extends ClusterType, B extends Behavior.Type, I extends ClusterInterface> =
        // Base class
        ClusterBehavior &
            // Bring extensions of old class forward
            Omit<
                InstanceType<B>,
                | "cluster"
                | "state"
                | "events"
                | "initialize"

                // Typescript 5.3 gets confused and thinks this is an instance property if we don't omit and then add
                // (as we do below)
                | typeof Symbol.asyncDispose

                // Omit command methods of old cluster
                | keyof ClusterInterface.MethodsOf<ClusterInterface.InterfaceOf<B>, ClusterOf<B>>

                // Omit methods defined in ExtensionInterface
                | keyof ExtensionInterfaceOf<B>
            > &
            // Add command methods
            ClusterInterface.MethodsOf<I, C> &
            // Add methods defined manually in ExtensionInterface
            ExtensionInterfaceOf<B> & {
                // Cluster-specific members
                /**
                 * The implemented cluster.
                 */
                cluster: C;

                /**
                 * State values for the behavior.
                 */
                state: ClusterState<C, B>;

                /**
                 * Observables for cluster events and attribute changes.
                 */
                events: ClusterEvents<C, B>;

                /**
                 * Supported features as a flag object.
                 */
                features: TypeFromBitSchema<C["features"]>;

                [Symbol.asyncDispose](): MaybePromise<void>;
            };

    /**
     * All cluster behaviors support interaction events in addition to cluster-specific attribute mutation events.
     */
    export class Events extends EventEmitter {
        /**
         * Emitted when state associated with this behavior is first mutated by a specific interaction.
         */
        interactionBegin = Observable<[]>();

        /**
         * Emitted when a mutating interaction completes.
         */
        interactionEnd = AsyncObservable<[]>();
    }

    /**
     * This is an unfortunate kludge required to work around https://github.com/microsoft/TypeScript/issues/27965.  It
     * allows you to designate extension methods available on behavior instances.
     *
     * Methods designated in this way make it so you can override methods using the syntax:
     *
     *     override foo() {}
     *
     * rather than:
     *
     *     override foo: () => {}
     *
     * See {@link ClusterInterface} for more details.
     */
    export declare const ExtensionInterface: {};
}
