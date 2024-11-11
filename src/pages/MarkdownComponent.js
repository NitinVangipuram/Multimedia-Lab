import React, { useEffect, useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
const MarkdownComponent = ({data}) => {
  return (
    <div>
          <div className="container my-5">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="bg-white p-4  ">
      <MarkdownRenderer markdownContent={data} />
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default MarkdownComponent;
