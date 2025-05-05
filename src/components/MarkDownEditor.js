import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    // Update preview whenever markdown input changes
    setPreview(markdown);
  }, [markdown]);

  return (
    <>
      <div className="editor-container">
        <textarea
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Enter your Markdown here..."
        />
        <div className="preview">
          <ReactMarkdown>{preview}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default MarkdownEditor;
