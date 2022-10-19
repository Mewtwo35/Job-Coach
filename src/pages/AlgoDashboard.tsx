import * as React from 'react';
import { CategoriesComponent } from './CategoriesComponent';
// import CategoriesComponent from './CategoriesComponent';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const AlgoDashboard = () => {
  const navigate = useNavigate();
  const [navigateBool, setNavigate] = useState<any>(false);
  useEffect(() => {
    navigate('/questions');
    if (navigateBool) navigate('/questions');
    console.log(navigateBool);
  }, [navigateBool]);
  // const useCustomNav = () => {
  //   const navigation = useNavigate();

  //   const goTo = (to: any) => navigation(to);

  //   return { goTo };
  // };
  return (
    <>
      <h1> ALGO DASHBOARD </h1>
      <div>
        <h1>LoginBanner at top</h1>
      </div>

      <div>
        <button onClick={() => navigate('/questions')}></button>
        {/* <CategoriesComponent setNavigate={setNavigate}></CategoriesComponent> */}
      </div>
    </>
  );
};

export default AlgoDashboard;
