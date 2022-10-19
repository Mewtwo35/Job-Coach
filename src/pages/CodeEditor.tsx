import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import CodeMirror from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

const CodeEditor = () => {
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
  function handleClick(e: any) {
    e.preventDefault();
    console.log(document);
    const s = document.createElement('script');
    const pConsole = document.querySelector('.pconsole');
    const consoleEl = document.querySelector('.console');
    s.setAttribute('id', 'chalfunction');
    s.textContent = storedVal; //inne
    console.log(s);
    consoleEl?.appendChild(s);
    pConsole?.remove();
    // consoleEl?.append("<p class='pconsole indent'>" + s + ' </p>');
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
          value="function hello(){
document.write('hello')
}
hello();"
          height="200px"
          //   extensions={[javascript({ jsx: true })]}
          onChange={onChange}
        />
      </div>

      <Button variant="contained">Submit</Button>
      <button onClick={handleClick}>Run</button>
    </div>
  );
};

export default CodeEditor;
