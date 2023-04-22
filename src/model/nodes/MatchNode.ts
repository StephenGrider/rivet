import { ChartNode, NodeId, NodeInputDefinition, PortId, NodeOutputDefinition } from '../NodeBase';
import { nanoid } from 'nanoid';
import { NodeImpl } from '../NodeImpl';
import { DataValue, expectType } from '../DataValue';

export type MatchNode = ChartNode<'match', MatchNodeData>;

export type MatchNodeData = {
  caseCount: number;
  cases: string[];
};

export class MatchNodeImpl extends NodeImpl<MatchNode> {
  static create(caseCount: number = 1, cases: string[] = ['.+']): MatchNode {
    const chartNode: MatchNode = {
      type: 'match',
      title: 'Match',
      id: nanoid() as NodeId,
      visualData: {
        x: 0,
        y: 0,
        width: 300,
      },
      data: {
        caseCount,
        cases,
      },
    };

    return chartNode;
  }

  getInputDefinitions(): NodeInputDefinition[] {
    const inputs: NodeInputDefinition[] = [
      {
        id: 'input' as PortId,
        title: 'Input',
        dataType: 'string',
        required: true,
      },
    ];

    return inputs;
  }

  getOutputDefinitions(): NodeOutputDefinition[] {
    const outputs: NodeOutputDefinition[] = [];

    for (let i = 0; i < this.chartNode.data.caseCount; i++) {
      outputs.push({
        id: `case${i + 1}` as PortId,
        title: `Case ${i + 1}`,
        dataType: 'string',
      });
    }

    outputs.push({
      id: 'unmatched' as PortId,
      title: 'Unmatched',
      dataType: 'string',
    });

    return outputs;
  }

  async process(inputs: Record<string, DataValue>): Promise<Record<string, DataValue>> {
    const inputString = expectType(inputs.input, 'string');
    const cases = this.chartNode.data.cases;
    let matched = false;
    const output: Record<string, DataValue> = {};

    for (let i = 0; i < cases.length; i++) {
      const regExp = new RegExp(cases[i]);
      const match = regExp.test(inputString);

      if (match) {
        matched = true;
        output[`case${i + 1}`] = {
          type: 'string',
          value: inputString,
        };
      } else {
        output[`case${i + 1}`] = {
          type: 'control-flow-excluded',
          value: undefined,
        };
      }
    }

    if (!matched) {
      output.unmatched = {
        type: 'string',
        value: inputString,
      };
    } else {
      output.unmatched = {
        type: 'control-flow-excluded',
        value: undefined,
      };
    }

    return output;
  }
}
