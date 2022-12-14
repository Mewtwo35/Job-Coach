import * as React from 'react';
import { CategoriesComponent } from './CategoriesComponent';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const AlgoDashboard = () => {
  const navigate = useNavigate();
  const [navigateBool, setNavigate] = useState<any>(false);

  return (
    <>
      <h1> ALGO DASHBOARD </h1>
      <div>{/* <h1>LoginBanner at top</h1> */}</div>

      <div>
        <CategoriesComponent></CategoriesComponent>
      </div>
    </>
  );
};

export default AlgoDashboard;
