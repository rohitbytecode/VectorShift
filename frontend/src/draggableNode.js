// draggableNode.js
import { useState } from 'react';

export const DraggableNode = ({ type, label }) => {

  const [hover, setHover] = useState(false);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ 
          cursor: 'grab', 
          minWidth: '84px', 
          height: '56px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '10px',
          backgroundColor: hover? '#26314A' : '#1C2536',
          border: '1px solid #323C55',
          justifyContent: 'center', 
          flexDirection: 'column',
          transform: hover? 'translateY(-2px' : 'translateY(0)',
          boxShadow: hover? '0 4px 10px rgba(0,0,0,0.3)': 'none',
          transition: 'all 0.12s ease',
        }} 
        draggable
      >
          <span style={{ color: '#EDEFF5', fontSize: '12px', fontWeight: '500' }}>{label}</span>
      </div>
    );
  };