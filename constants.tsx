import { WorkspaceItem } from './types';
import { managementData } from './data/management';
import { purchasingData } from './data/purchasing';
import { warehouseData } from './data/warehouse';
import { rndData } from './data/rnd';
import { planningData } from './data/planning';
import { internalControlData } from './data/internalControl';
import { factory1Data } from './data/factory1';

// Aggregating all items
export const WORKSPACE_ITEMS: WorkspaceItem[] = [
  managementData,
  purchasingData,
  warehouseData,
  rndData,
  planningData,
  factory1Data,
  internalControlData
];