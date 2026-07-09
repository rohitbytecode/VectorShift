// textNode.js

import { useState } from 'react';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={[
        { id: 'output', type: 'source', position: 'Right' }
      ]}
    >
        <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
    </BaseNode>
    );
}
