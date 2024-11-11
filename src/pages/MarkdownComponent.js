import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MarkdownRenderer from './MarkdownRenderer';
const StyledMarkdown = styled.div`
  p {
    color: #6c757d !important;  /* Apply color only to <p> tags within this component */
    line-height: 1.8;
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

const MarkdownComponent = ({data}) => {
  return (
    <div>
      <StyledMarkdown>
          <div className="container my-5">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="bg-white p-4" style={{textAlign:"left"}}>
      <MarkdownRenderer markdownContent={data} />
      </div>
      </div>
      </div>
    </div>
    </StyledMarkdown>
    </div>
  );
};

export default MarkdownComponent;
