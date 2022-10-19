import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import CodeMirror from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import testhtml from './testhtml';
import { mockData } from '../clientTest/test/mockData';

const CodeEditor = () => {
  const currTest = 'twoSum';
  const [frameHtml, setFrameHtml] = React.useState(testhtml);
  const [startFunc, setStartFunc] = React.useState('');
  const [testStatement, setTestStatement] = React.useState('');
  const [updateTest, setUpdateTest] = React.useState(false);
  const [storedVal, setStoredVal] = React.useState('');
  const [testType, setTestType] = React.useState(mockData[`${currTest}`]);

  useEffect(() => {
    setStartFunc(testType.startFunc);
    setTestStatement(testType.testStatement);
    const promptHeader = document.querySelector('.prompt');
    const h3 = document.createElement('h3');
    h3.textContent = testType.prompt;
    promptHeader?.append(h3);
  }, []);
  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    setStoredVal(value);
  }, []);
  document.write = function (s) {
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[scripts.length - 1];
    lastScript.insertAdjacentHTML('beforebegin', s);
  };
  const runTest = () => {
    if (updateTest) {
      console.log('updating test', storedVal);
      const test = testhtml.replace('__TESTHERE__', testStatement);
      setFrameHtml(test.replace('__SOLUTIONHERE__', storedVal));
    }
  };

  function handleClick(e: any) {
    e.preventDefault();
    console.log(document);
    setUpdateTest(true);
    runTest();
    const s = document.createElement('script');
    const pConsole = document.querySelector('.pconsole');
    const consoleEl = document.querySelector('.console');
    s.setAttribute('id', 'chalfunction');
    s.textContent = storedVal; //inne
    console.log(s);
    consoleEl?.appendChild(s);
    pConsole?.remove();
    consoleEl?.append("<p class='pconsole indent'>" + s + ' </p>');
  }
  return (
    <div>
      <h2>CodeMirror</h2>
      <div className="console">
        {/* <p className="pconsole">/**</p>
        <p className="pconsole indent">* Function out put will go here.</p>
        <p className="pconsole indent">* /</p> */}
      </div>
      <script id="script" type="text/javascript"></script>

      <div className="prompt"></div>

      <div className="list-of-topics"></div>

      <div className="codemirror">
        <CodeMirror
          value={testType.startFunc}
          height="200px"
          //   extensions={[javascript({ jsx: true })]}
          onChange={onChange}
        />
      </div>

      {/* <Button variant="contained">Submit</Button> */}
      <button onClick={handleClick}>Run</button>
      <div id="testContainer">
        <iframe
          id="test-frame"
          style={{ height: '300px', width: '400px' }}
          srcDoc={frameHtml || '<h1></h1>'}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
