import { useState, useEffect, useMemo } from 'react';
import { BaseNode } from './baseNode';

const VARIABLE_REGEX = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [dimensions, setDimensions] = useState({ width: 220, height: 100 });

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const variables = useMemo(() => {
    const found = new Set();
    let match;
    const regex = new RegExp(VARIABLE_REGEX);
    while((match = regex.exec(currText)) !== null) {
      found.add(match[1]);
    }
    return Array.from(found);
  }, [currText]);

  useEffect(() => {
    const lines = currText.split('\n');
    const longestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);
    const newWidth = Math.min(Math.max(220, longestLine * 7 + 40), 480);
    const newHeight = Math.max(100, lines.length * 20 + 70);

    setDimensions({ width: newWidth, height: newHeight });
  }, [currText]);

  const handles = useMemo(() => {
    const varHandles = variables.map((varName, idx) => ({
      id: `var-${varName}`,
      type: 'target',
      'position': 'Left',
      style: { top: `{((idx + 1) / (variables.length + 1)) * 100}%`},
    }));
    return [
      ...variables,
      { id: 'output', type: 'source', position: 'Right' },
    ]
  }, [variables]);

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={handles}
      width={dimensions.width}
      minHeight={dimensions.height}
    >
      <label>
        Text:
        <textarea
          value={currText}
          onChange={handleTextChange}
          rows={Math.max(2, currText.split('\n').length)}
          style={{
            width: '100%',
            resize: 'none',
            boxSizing: 'border-box',
            fontFamily: 'inherit',
          }}
        />
      </label>
    </BaseNode>
    );
}

export default TextNode;