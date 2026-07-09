import { useState } from 'react';
import { BaseNode } from './baseNode';

export const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Conditional"
      handles={[
        { id: 'input', type: 'target', position: 'Left' },
        { id: 'true', type: 'source', position: 'Right', style: { top: `${100 / 3}%` } },
        { id: 'false', type: 'source', position: 'Right', style: { top: `${200 / 3}%` } },
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