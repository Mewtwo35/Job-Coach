import * as React from 'react';
import { CategoriesComponent } from './CategoriesComponent';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const AlgoDashboard = () => {
  const navigate = useNavigate();
  const [navigateBool, setNavigate] = useState<any>(false);

  return (
    <div className='AlgoDash'>
      <div className='title'>
      <div> A </div>
      <div> L </div>
      <div> G </div>
      <div> O </div>
      <div className='space'>  </div>
      <div> D </div>
      <div> A </div>
      <div> S </div>
      <div> H </div>
      <div> B </div>
      <div> O </div>
      <div> A </div>
      <div> R </div>
      <div> D </div>
      </div>


      <div>
        <CategoriesComponent></CategoriesComponent>
      </div>
    </div>
  );
};

export default AlgoDashboard;
