import { NodeOfType, NodeType } from '@ironclad/nodai-core';
import { FC } from 'react';
import { ChartNode } from '@ironclad/nodai-core';
import { assemblePromptNodeDescriptor } from '../components/nodes/AssemblePromptNode';
import { chatNodeDescriptor } from '../components/nodes/ChatNode';
import { chunkNodeDescriptor } from '../components/nodes/ChunkNode';
import { codeNodeDescriptor } from '../components/nodes/CodeNode';
import { externalCallNodeDescriptor } from '../components/nodes/ExternalCallNode';
import { extractJsonNodeDescriptor } from '../components/nodes/ExtractJsonNode';
import { extractObjectPathNodeDescriptor } from '../components/nodes/ExtractObjectPathNode';
import { extractRegexNodeDescriptor } from '../components/nodes/ExtractRegexNode';
import { extractYamlNodeDescriptor } from '../components/nodes/ExtractYamlNode';
import { graphInputNodeDescriptor } from '../components/nodes/GraphInputNode';
import { graphOutputNodeDescriptor } from '../components/nodes/GraphOutputNode';
import { ifNodeDescriptor } from '../components/nodes/IfNode';
import { ifElseNodeDescriptor } from '../components/nodes/IfElseNode';
import { loopControllerNodeDescriptor } from '../components/nodes/LoopControllerNode';
import { matchNodeDescriptor } from '../components/nodes/MatchNode';
import { promptNodeDescriptor } from '../components/nodes/PromptNode';
import { readDirectoryNodeDescriptor } from '../components/nodes/ReadDirectoryNode';
import { readFileNodeDescriptor } from '../components/nodes/ReadFileNode';
import { subgraphNodeDescriptor } from '../components/nodes/SubGraphNode';
import { textNodeDescriptor } from '../components/nodes/TextNode';
import { trimChatMessagesNodeDescriptor } from '../components/nodes/TrimChatMessagesNode';
import { arrayNodeDescriptor } from '../components/nodes/ArrayNode';
import { userInputNodeDescriptor } from '../components/nodes/UserInputNode';

export type UnknownNodeComponentDescriptor = {
  Body?: FC<{ node: ChartNode }>;
  Output?: FC<{ node: ChartNode }>;
  Editor?: FC<{ node: ChartNode; onChange?: (node: ChartNode) => void }>;
  FullscreenOutput?: FC<{ node: ChartNode }>;
};

export type NodeComponentDescriptor<T extends NodeType> = {
  Body?: FC<{ node: NodeOfType<T> }>;
  Output?: FC<{ node: NodeOfType<T> }>;
  Editor?: FC<{ node: NodeOfType<T>; onChange?: (node: NodeOfType<T>) => void }>;
  FullscreenOutput?: FC<{ node: NodeOfType<T> }>;
};

export type NodeComponentDescriptors = {
  [P in NodeType]: NodeComponentDescriptor<P>;
};

const descriptors: NodeComponentDescriptors = {
  array: arrayNodeDescriptor,
  assemblePrompt: assemblePromptNodeDescriptor,
  chat: chatNodeDescriptor,
  chunk: chunkNodeDescriptor,
  code: codeNodeDescriptor,
  externalCall: externalCallNodeDescriptor,
  extractJson: extractJsonNodeDescriptor,
  extractObjectPath: extractObjectPathNodeDescriptor,
  extractRegex: extractRegexNodeDescriptor,
  extractYaml: extractYamlNodeDescriptor,
  graphInput: graphInputNodeDescriptor,
  graphOutput: graphOutputNodeDescriptor,
  if: ifNodeDescriptor,
  ifElse: ifElseNodeDescriptor,
  loopController: loopControllerNodeDescriptor,
  match: matchNodeDescriptor,
  prompt: promptNodeDescriptor,
  readDirectory: readDirectoryNodeDescriptor,
  readFile: readFileNodeDescriptor,
  subGraph: subgraphNodeDescriptor,
  text: textNodeDescriptor,
  trimChatMessages: trimChatMessagesNodeDescriptor,
  userInput: userInputNodeDescriptor,
};

export function useNodeTypes() {
  return {
    descriptors,
  };
}

export function useUnknownNodeComponentDescriptorFor(node: ChartNode) {
  const { descriptors } = useNodeTypes();

  return (descriptors[node.type as NodeType] ?? {}) as UnknownNodeComponentDescriptor;
}
