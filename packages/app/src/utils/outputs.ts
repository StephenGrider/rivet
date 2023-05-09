import { ArrayDataValue, DataValue, PortId, StringDataValue, expectType } from '@ironclad/nodai-core';

import { WarningsPort } from './symbols';

export function addWarning(outputs: Record<PortId, DataValue>, warning: string): void {
  if (!outputs[WarningsPort]) {
    outputs[WarningsPort] = { type: 'string[]', value: [] };
  }

  (outputs[WarningsPort] as ArrayDataValue<StringDataValue>).value.push(warning);
}

export function getWarnings(outputs: Record<PortId, DataValue> | undefined): string[] | undefined {
  if (!outputs?.[WarningsPort]) {
    return undefined;
  }

  return expectType(outputs[WarningsPort], 'string[]');
}
