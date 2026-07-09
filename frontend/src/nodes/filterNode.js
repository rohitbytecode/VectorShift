import { useState } from 'react';
import { BaseNode } from './baseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Filter"
      handles={[
        { id: 'input', type: 'target', position: 'Left' },
        { id: 'output', type: 'source', position: 'Right' },
      ]}
    >
      <label>
        Condition:
        <input
          type="text"
          value={condition}
          onChange={handleConditionChange}
        />
      </label>
    </BaseNode>
  );
}