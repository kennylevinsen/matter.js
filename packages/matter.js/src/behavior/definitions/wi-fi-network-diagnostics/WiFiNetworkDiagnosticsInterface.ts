/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "@project-chip/matter.js-general";

export namespace WiFiNetworkDiagnosticsInterface {
    export interface ErrorCounts {
        /**
         * Reception of this command shall reset the following attributes to 0:
         *
         *   • BeaconLostCount
         *
         *   • BeaconRxCount
         *
         *   • PacketMulticastRxCount
         *
         *   • PacketMulticastTxCount
         *
         *   • PacketUnicastRxCount
         *
         *   • PacketUnicastTxCount
         *
         * This command has no associated data.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.15.7.1
         */
        resetCounts(): MaybePromise;
    }
}

export type WiFiNetworkDiagnosticsInterface = {
    components: [{ flags: { errorCounts: true }, methods: WiFiNetworkDiagnosticsInterface.ErrorCounts }]
};
