import * as React from 'react';
import CategoriesComponent from './CategoriesComponent';




class AlgoDashboard extends React.Component {
  render() {
    return (
      <>
        <h1> ALGO DASHBOARD </h1>
        <div>
          <h1>LoginBanner at top</h1>
        </div>


        <div>
          <CategoriesComponent></CategoriesComponent>
        </div>
      </>
    )
  }
}

export default AlgoDashboard;

