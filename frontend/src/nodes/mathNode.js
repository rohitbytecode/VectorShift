import { useState } from 'react';
import { BaseNode } from './baseNode';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Math"
      handles={[
        { id: 'a', type: 'target', position: 'Left', style: { top: `${100 / 3}%` } },
        { id: 'b', type: 'target', position: 'Left', style: { top: `${200 / 3}%` } },
        { id: 'result', type: 'source', position: 'Right', style: { top: '50%' } },
        { id: 'back', type: 'target', position: 'Right', style: { top: '75%' } },
      ]}
    >
      <label>
        Operation:
        <select value={operation} onChange={handleOperationChange}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </label>
    </BaseNode>
  );
}