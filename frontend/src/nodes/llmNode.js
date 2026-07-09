// llmNode.js

import { BaseNode } from './baseNode';
  
export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode
      id={id}
      title="LLM"
      handles={[
        { id: 'system', type: 'target', position: 'Left', style: { top: `${100/3}%` } },
        { id: 'prompt', type: 'target', position: 'Left', style: { top: `${200/3}%` } },
        { id: 'response', type: 'source', position: 'Right' }
      ]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
}