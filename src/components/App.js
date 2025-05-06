import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css'; // optional: for styling

function App() {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div className="app">
      <h1>Markdown Editor</h1>
      <div className="editor-container" style={{ display: 'flex', gap: '20px' }}>
        <textarea
          style={{
            width: '50%',
            height: '300px',
            padding: '10px',
            fontSize: '1rem',
            fontFamily: 'monospace',
          }}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Enter your Markdown here..."
        />
        <div
          style={{
            width: '50%',
            height: '300px',
            padding: '10px',
            border: '1px solid #ccc',
            overflowY: 'auto',
            backgroundColor: '#f9f9f9',
          }}
        >
          <ReactMarkdown>{preview}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
