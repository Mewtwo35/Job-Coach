import * as React from 'react';
import AlgoDashboard from './pages/AlgoDashboard';
import { Routes, Route } from 'react-router-dom';
import CodeEditor from './pages/CodeEditor';

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
        <Routes>
          {/* <Route path="/" element={<AlgoDashboard />} /> */}
          <Route path="/" element={<CodeEditor />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's no page at this URL!</p>
              </main>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
