// Generic wrapper used by every node type.
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, handles = [], children, width = 220, minHeight = 90 }) => {
    return (
        <div
        style= {{
            width,
            minHeight,
            border: '1px solid #323C55',
            borderRadius: '12px',
            backgroundColor: '#1C2536',
            color: '#EDEFF5',
            fontFamily: 'inherit',
            overflow: 'visible',
            position: 'relative',
            boxShadow: '0 4px 14px rgba(0,0,0,0.35)',
            transition: 'box-shadow 0.15s ease, border-color 0.15s ease'
        }}
        >
            {handles.map((h) => (
                <Handle
                    key={h.id}
                    type={h.type}
                    position={h.position === 'Left' ? Position.Left: Position.Right}
                    id={`${id}-${h.id}`}
                    style={{
                        width: 9,
                        height: 9,
                        background: '#6C8EFF',
                        border: '2px solid #1C2536',
                        ...h.style,
                    }}
                />
            ))}
            <div
                style={{
                    padding: '8px 12px',
                    borderBottom: '1px solid #323C55',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    fontWeight: 600,
                    fontSize: '13px',
                    letterSpacing: '0.2px',
                }}
            >
                {title}
            </div>
            <div style={{ padding: '10px 12px', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {children}
            </div>
        </div>
    );
};