import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import CodeMirror from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import testhtml from './testhtml';

const CodeEditor = () => {
  const [frameHtml, setFrameHtml] = React.useState(testhtml);
  let storedVal: any;
  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    console.log('value:', value);
    storedVal = value;
    console.log(storedVal, 'stored val');
  }, []);
  document.write = function (s) {
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[scripts.length - 1];
    lastScript.insertAdjacentHTML('beforebegin', s);
  };
  const runTest = () => {
    const testCode = `describe('sum', function () {
      it('should return sum of arguments', function () {
        chai.expect(sum(1, 2)).to.equal(3);
      });
    });`;
    const code = 'function sum(a, b) { return a + b; }';
    const test = testhtml.replace('__TESTHERE__', testCode);
    setFrameHtml(test.replace('__SOLUTIONHERE__', storedVal));
  };

  function handleClick(e: any) {
    e.preventDefault();
    console.log(document);
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
          value="function sum(a, b) { return a + b; }"
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