/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    SemanticNamespaceElement as SemanticNamespace,
    SemanticTagElement as SemanticTag
} from "../../elements/index.js";

export const CompassDirectionNs = SemanticNamespace({
    name: "CompassDirection", id: 0x2, mfgCode: undefined,
    details: "The tags contained in this namespace may be used in any domain or context, to indicate an " +
        "association with a movement into a certain compass direction. Note the difference with Chapter 4, " +
        "Common Compass Location Semantic Tag Namespace.",
    xref: { document: "namespace", section: "3" },

    children: [
        SemanticTag({ name: "Northward", id: 0x0 }),
        SemanticTag({ name: "North-Eastward", id: 0x1 }),
        SemanticTag({ name: "Eastward", id: 0x2 }),
        SemanticTag({ name: "South-Eastward", id: 0x3 }),
        SemanticTag({ name: "Southward", id: 0x4 }),
        SemanticTag({ name: "South-Westward", id: 0x5 }),
        SemanticTag({ name: "Westward", id: 0x6 }),
        SemanticTag({ name: "North-Westward", id: 0x7 })
    ]
});

Matter.children.push(CompassDirectionNs);