import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
const MarkdownRenderer = ({ markdownContent }) => {
  const formattedContent = markdownContent.replace(/\\n/g, '\n\n');
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
      {formattedContent}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
