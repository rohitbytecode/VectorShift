// submit.js
import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const [hover, setHover] = useState(false);
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        console.log('submit payload', { nodes, edges });
        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if(!response.ok) {
                alert('Failed to parse pipeline. Please check the backend is running.')
                return;
            }

            const data = await response.json();
            console.log('parse response', data);
            alert(
                `Pipeline Analytics:\n\n` +
                `Number of Nodes: ${data.num_nodes}\n` +
                `Number of Edges: ${data.num_edges}\n` +
                `Is Valid DAG: ${data.is_dag ? 'Yes' : 'No'}`
            );
        } catch (error) {
            alert('Could not reach the backend. Is it running on port 8000?');
        }
    };
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'}}>
            <button 
                type="submit"
                onClick={handleSubmit} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    backgroundColor: hover ? '#5A7CFF' : '#6C8EFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 24px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: hover ? '0 4px 12px rgba(108,142,255,0.4)' : '0 2px 6px rgba(0,0,0,0.2)',
                    transition: 'all 0.12s ease',
                }}
            >
                Submit
            </button>
        </div>
    );
}
