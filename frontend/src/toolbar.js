import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{
            padding: '14px 20px',
            backgroundColor: '#161C2C',
            borderBottom: '1px solid #2A3550',
            boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
        }}>
            <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='timer' label='Timer' />
                <DraggableNode type='conditional' label='Conditional' />
            </div>
        </div>
    );
};
