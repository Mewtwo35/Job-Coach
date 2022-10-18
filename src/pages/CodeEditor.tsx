import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Button from '@mui/material/Button';

class CodeEditor extends React.Component {
    
    onChange = React.useCallback((value:any, viewUpdate:any) => {
        console.log('value:', value);
    }, []);

    render() {
        return (
          <div>
            <h2>CodeMirror</h2>
                
                <Button variant="contained">Logout</Button>

                <div className="prompt">
                </div>

                <div className="list-of-topics">
                </div>

                <div className="codemirror">
                    <CodeMirror
                        value="console.log('hello world!');"
                        height="200px"
                        extensions={[javascript({ jsx: true })]}
                        onChange={this.onChange}
                    />
                </div>

                <Button variant="contained">Submit</Button>

          </div>
          
        )
      }
}

export default CodeEditor;