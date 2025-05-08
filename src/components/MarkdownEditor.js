import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (optional)
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown-container">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="editor-section">
            <h2>Editor</h2>
            <textarea
              className="textarea"
              value={markdown}
              onChange={handleInputChange}
              placeholder="Enter your markdown here..."
            />
          </div>
          <div className="preview-section">
            <h2>Preview</h2>
            <div className="preview">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MarkdownEditor;