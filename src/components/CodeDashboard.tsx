import React from 'react';
import CodeEditor from './CodeEditor';

const CodeDashboard = () => {
  return (
    <div id='code-dashboard'>
      <div id='sidebar'>
        <span>PROMPT HERE</span>
        <button>{'<'}  All Challenges</button>
      </div>
      <CodeEditor/>
    </div>
  );
};

export default CodeDashboard;
