[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [PumpConfigurationAndControl](../modules/exports_cluster.PumpConfigurationAndControl.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[PumpConfigurationAndControl](../modules/exports_cluster.PumpConfigurationAndControl.md).Cluster

Pump Configuration and Control

The Pump Configuration and Control cluster provides an interface for the setup and control of pump devices, and
the automatic reporting of pump status information. Note that control of pump speed is not included – speed is
controlled by the On/Off and Level Control clusters.

Per the Matter specification you cannot use [PumpConfigurationAndControlCluster](../modules/exports_cluster.md#pumpconfigurationandcontrolcluster-1) without enabling certain
feature combinations. You must use the PumpConfigurationAndControlCluster.with() factory method to obtain a
working cluster.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.2

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.PumpConfigurationAndControl.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [id](exports_cluster.PumpConfigurationAndControl.Cluster.md#id)
- [name](exports_cluster.PumpConfigurationAndControl.Cluster.md#name)
- [with](exports_cluster.PumpConfigurationAndControl.Cluster.md#with)

## Properties

### id

• **id**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:55

___

### name

• **name**: `string`

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:56

___

### with

• **with**: \<SelectionT\>(...`selection`: `SelectionT`) => [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](exports_cluster.Attribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](exports_cluster.Attribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `running`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantPressure`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `automatic`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `compensatedPressure`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantFlow`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantTemperature`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `compensatedPressure`: ``false`` ; `constantFlow`: ``false`` ; `constantPressure`: ``false`` ; `constantSpeed`: ``false`` ; `constantTemperature`: ``false``  }  }] ; `features`: \{ `automatic`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``512`` ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4``  }\>, `SelectionT`\>

#### Type declaration

▸ \<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](exports_cluster.Attribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](exports_cluster.Attribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `running`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantPressure`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `automatic`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `compensatedPressure`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantFlow`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantTemperature`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `compensatedPressure`: ``false`` ; `constantFlow`: ``false`` ; `constantPressure`: ``false`` ; `constantSpeed`: ``false`` ; `constantTemperature`: ``false``  }  }] ; `features`: \{ `automatic`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``512`` ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

##### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](exports_cluster.Attribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](exports_cluster.Attribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `running`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantPressure`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `automatic`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `compensatedPressure`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantFlow`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantTemperature`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `compensatedPressure`: ``false`` ; `constantFlow`: ``false`` ; `constantPressure`: ``false`` ; `constantSpeed`: ``false`` ; `constantTemperature`: ``false``  }  }] ; `features`: \{ `automatic`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``512`` ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4``  }\>\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

##### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capacity`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `controlMode`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveControlMode`: [`Attribute`](exports_cluster.Attribute.md)\<[`ControlMode`](../enums/exports_cluster.PumpConfigurationAndControl.ControlMode.md), `any`\> ; `effectiveOperationMode`: [`Attribute`](exports_cluster.Attribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `lifetimeEnergyConsumed`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lifetimeRunningHours`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxFlow`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxSpeed`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `operationMode`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<[`OperationMode`](../enums/exports_cluster.PumpConfigurationAndControl.OperationMode.md), `any`\> ; `power`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `pumpStatus`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `deviceFault`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `localOverride`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `remoteFlow`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `remotePressure`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `remoteTemperature`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `running`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `speedHigh`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `speedLow`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `supplyFault`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\> ; `speed`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| `number`, `any`\>  } ; `events`: \{ `airDetection`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `dryRunning`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicFatalFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicNonFatalFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `electronicTemperatureHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `generalFault`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `leakage`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `motorTemperatureHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `powerMissingPhase`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpBlocked`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `pumpMotorFatalFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `sensorFailure`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `supplyVoltageLow`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureHigh`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `systemPressureLow`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `turbineOperation`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `maxConstPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantPressure`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstFlow`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `maxConstTemp`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstPressure`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `automatic`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxCompPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minCompPressure`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `compensatedPressure`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstSpeed`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstSpeed`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantSpeed`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstFlow`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstFlow`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantFlow`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `maxConstTemp`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\> ; `minConstTemp`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<``null`` \| `number`, `any`\>  }  } ; `flags`: \{ `constantTemperature`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `compensatedPressure`: ``false`` ; `constantFlow`: ``false`` ; `constantPressure`: ``false`` ; `constantSpeed`: ``false`` ; `constantTemperature`: ``false``  }  }] ; `features`: \{ `automatic`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `compensatedPressure`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantFlow`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantPressure`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantSpeed`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `constantTemperature`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `localOperation`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``512`` ; `name`: ``"PumpConfigurationAndControl"`` ; `revision`: ``4``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:57