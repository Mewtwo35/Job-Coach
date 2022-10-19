import * as React from 'react';
import CategoriesComponent from './CategoriesComponent';
import { Link } from 'react-router-dom';

class AlgoDashboard extends React.Component {
  render() {
    return (
      <>
        <h1> ALGO DASHBOARD </h1>
        <Link to='/editor'>CODE DASHBOARD</Link>
        <div>
          <h1>LoginBanner at top</h1>
        </div>

        <div>
          <CategoriesComponent></CategoriesComponent>
        </div>
      </>
    );
  }
}

export default AlgoDashboard;
