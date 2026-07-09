// Generic wrapper used by every node type.
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, handles = [], children, width = 200, minHeight = 80 }) => {
    return (
        <div
        style= {{
            width,
            minHeight,
            border: '1px solid #2A3550',
            borderRadius: '8px',
            backgroundColor: '#1C2536',
            color: '#fff',
            fontFamily: 'inherit',
            overflow: 'visible',
            position: 'relative',
        }}
        >
            {handles.map((h) => (
                <Handle
                    key={h.id}
                    type={h.type}
                    position={h.position === 'Left' ? Position.Left: Position.Right}
                    id={`${id}-${h.id}`}
                    style={h.style}
                />
            ))}
            <div
                style={{
                    padding: '6px 10px',
                    borderBottom: '1px solid #2A3550',
                    fontWeight: 600,
                    fontSize: '13px',
                }}
            >
                {title}
            </div>
            <div style={{ padding: '8px 10px', fontSize: '12px' }}>
                {children}
            </div>
        </div>
    );
};