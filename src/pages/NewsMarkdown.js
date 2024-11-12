import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MarkdownRenderer from './MarkdownRenderer';
const StyledMarkdown = styled.div`
  p {
    color: #6c757d !important;  /* Apply color only to <p> tags within this component */
    text-align: justify;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px !important;
  }

  li {
    text-align: justify;
  }

  h1 {
    text-align: center;
  }
`;

const NewsMarkdown= ({data}) => {
  return (
    <div>
      <StyledMarkdown>
          <div className="container" style={{marginTop:"40px"}}>
          <div className="row">
            <div >
              <div className="bg-white" style={{textAlign:"justify"}}>
      <MarkdownRenderer markdownContent={data} />
      </div>
      </div>
      </div>
    </div>
    </StyledMarkdown>
    </div>
  );
};

export default NewsMarkdown;
