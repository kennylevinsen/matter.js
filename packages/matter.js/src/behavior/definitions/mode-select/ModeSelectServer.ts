/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter.js-general";
import { ClusterType } from "../../../cluster/ClusterType.js";
import { GeneralDiagnostics } from "../../../cluster/definitions/GeneralDiagnosticsCluster.js";
import { ModeSelect } from "../../../cluster/definitions/ModeSelectCluster.js";
import { OnOff } from "../../../cluster/definitions/OnOffCluster.js";
import { RootEndpoint } from "../../../endpoint/definitions/system/RootEndpoint.js";
import { StatusCode, StatusResponseError } from "../../../protocol/interaction/StatusCode.js";
import { GeneralDiagnosticsBehavior } from "../general-diagnostics/GeneralDiagnosticsBehavior.js";
import { OnOffServer } from "../on-off/OnOffServer.js";
import { ModeSelectBehavior } from "./ModeSelectBehavior.js";

const logger = Logger.get("ModeSelectServer");

const ModeSelectServerBase = ModeSelectBehavior.with(ModeSelect.Feature.OnOff);

/**
 * This is the default server implementation of {@link ModeSelectBehavior}.
 *
 * This implementation supports StartupMode and OnMode handling, when the OnOff feature is activated. You should use
 * {@link ModeSelectServer.with} to specialize the class for the features your implementation supports. Alternatively
 * you can extend this class and override the methods you need.
 *
 * It should be sufficient to use the class without changes and just react on the currentMode changed events.
 */
export class ModeSelectServerLogic extends ModeSelectServerBase {
    override initialize() {
        this.#assertCurrentMode();
        this.#assertStartUpMode();
        this.#assertOnMode();

        let currentModeOverridden = false;
        // When OnOff feature is active handle the OnOff dependency and potentially setting OnMode
        if (this.features.onOff && this.state.onMode !== undefined && this.state.onMode !== null) {
            const onOffServer = this.agent.get(OnOffServer);
            if (onOffServer !== undefined) {
                if (onOffServer.features.lighting && onOffServer.state.startUpOnOff === OnOff.StartUpOnOff.On) {
                    this.state.currentMode = this.state.onMode;
                    currentModeOverridden = true;
                }
                this.reactTo(onOffServer.events.onOff$Changed, this.#handleOnOffDependency);
            } else {
                logger.warn("OnOffServer not found on endpoint, but OnMode is set.");
            }
        }

        // If the currentMode is not overridden by OnMode, handle StartUpMode definition if not OTA boot
        if (
            !currentModeOverridden &&
            this.state.startUpMode !== undefined &&
            this.state.startUpMode !== null &&
            this.#getBootReason() !== GeneralDiagnostics.BootReason.SoftwareUpdateCompleted
        ) {
            this.state.currentMode = this.state.startUpMode;
        }
    }

    override changeToMode({ newMode }: ModeSelect.ChangeToModeRequest) {
        this.#assertModeValue("NewMode", newMode); // Generates INVALID_COMMAND on error

        this.state.currentMode = newMode;
    }

    #assertCurrentMode(): void {
        this.#assertModeValue("currentMode", this.state.currentMode);
    }

    #assertStartUpMode(): void {
        if (this.state.startUpMode !== undefined && this.state.startUpMode !== null) {
            this.#assertModeValue("startUpMode", this.state.startUpMode);
        }
    }

    #assertOnMode(): void {
        if (this.state.onMode !== undefined && this.state.onMode !== null) {
            this.#assertModeValue("onMode", this.state.onMode);
        }
    }

    #assertModeValue(fieldName: string, mode: number): void {
        if (!this.state.supportedModes.some(({ mode: supportedMode }) => supportedMode === mode)) {
            throw new StatusResponseError(
                `Mode ${mode} provided in ${fieldName} is not supported`,
                StatusCode.InvalidCommand,
            );
        }
    }

    #handleOnOffDependency(newValue: boolean, oldValue: boolean): void {
        if (newValue && !oldValue && this.state.onMode !== undefined && this.state.onMode !== null) {
            this.state.currentMode = this.state.onMode;
        }
    }

    #getBootReason() {
        const rootEndpoint = this.endpoint.ownerOfType(RootEndpoint);
        if (rootEndpoint !== undefined && rootEndpoint.behaviors.has(GeneralDiagnosticsBehavior)) {
            return rootEndpoint.stateOf(GeneralDiagnosticsBehavior).bootReason;
        }
    }
}

export class ModeSelectServer extends ModeSelectServerLogic.for(ClusterType(ModeSelect.Base)) {}
