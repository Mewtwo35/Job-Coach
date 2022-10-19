import * as React from 'react';
import AlgoDashboard from './components/AlgoDashboard';
import { Routes, Route } from 'react-router-dom';
import CodeDashboard from './components/CodeDashboard';

class App extends React.Component {
  render() {
    return (
      <div id='app-container'>
        <Routes>
          <Route path='/' element={<AlgoDashboard />} />
          <Route path='/editor' element={<CodeDashboard />} />
          <Route
            path='*'
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
