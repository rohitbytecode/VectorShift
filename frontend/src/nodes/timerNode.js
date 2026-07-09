import { useState } from 'react';
import { BaseNode } from './baseNode';

export const TimerNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 1);

  const handleDelayChange = (e) => {
    setDelay(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Timer"
      handles={[
        { id: 'trigger', type: 'target', position: 'Left' },
        { id: 'done', type: 'source', position: 'Right' },
      ]}
    >
      <label>
        Delay (s):
        <input
          type="number"
          value={delay}
          onChange={handleDelayChange}
        />
      </label>
    </BaseNode>
  );
}