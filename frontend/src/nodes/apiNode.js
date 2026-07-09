import { useState } from 'react';
import { BaseNode } from './baseNode';

export const ApiNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');
  const [method, setMethod] = useState(data?.method || 'GET');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="API"
      handles={[
        { id: 'input', type: 'target', position: 'Left' },
        { id: 'response', type: 'source', position: 'Right' },
      ]}
    >
      <label>
        URL:
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
        />
      </label>
      <label>
        Method:
        <select value={method} onChange={handleMethodChange}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </select>
      </label>
    </BaseNode>
  );
}