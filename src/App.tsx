import * as React from 'react';
import { AlgoDashboard } from './pages/AlgoDashboard';
import { Routes, Route } from 'react-router-dom';
import CodeEditor from './pages/CodeEditor';
import { CategoriesComponent } from './pages/CategoriesComponent';
import TryButton from './pages/TryButton';

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<AlgoDashboard />} />
          <Route path="/questions" element={<CodeEditor />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's no page at this URL!</p>
              </main>
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
