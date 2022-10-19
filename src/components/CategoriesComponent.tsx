import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  useNavigate,
  Link,
} from 'react-router-dom';

type CategoryProps = {
  text: String;
  name: String;
};

export const CategoriesComponent = () => {
  const [catArr, setCatArr] = useState<any>([]);
  const navigate = useNavigate();
  let categoriesArray: any[] = []; //need to change type from any[]
  const categories: String[] = ['Arrays', 'LinkedList', 'String', 'Tree'];
  function handleNav() {
    navigate('/editor');
  }
  useEffect(() => {
    async function wrapper() {
      const res = await getAlgos();
      setCatArr(res);
      console.log(res);
    }
    wrapper();
  }, []);

  return (
    <div>
      <h2 className='list'>List of Coding questions</h2>
      {catArr}
      {/* <div className='help'><TryButton/></div> */}
    </div>
  );
};

const Category = (props: CategoryProps) => {
  const { text, name } = props;
  const [navigate, setNavigate] = useState<any>(false);

  //NOT USED CURRENLTY
  async function handleClick(e: React.MouseEvent<HTMLElement>, name: any) {
    e.preventDefault();

    // NOT USED
    // try {
    //   const response = await fetch(
    //     '/algo/?' +
    //       new URLSearchParams({
    //         algoName: name,
    //       }).toString()
    //   ).then((res) => res.json());

    //   console.log(response);
    //   navigate('/questions');
    //   return response;
    // } catch (err) {
    //   return 'error finding algo';
    // }
  }
  return (
    <div className={'CategoryContainer'}>
      <div> Category: {text}</div>
      <div> Name: {name}  </div>

      <div className='button'>
          <Link className='link' to='/editor' state={{ name: name }}>
            navigate
          </Link>
      </div>
      {/* <button
        onClick={(e) => {
          handleClick(e, name);
        }}
      >
        Try
      </button> */}
      {/* <button onClick={() => navigate('/questions')}>click me</button> */}
      {/* {navigate ? <Navigate to="/questions" /> : <p>placeholder</p>} */}
    </div>
  );
};

const categories: String[] = ['Arrays', 'LinkedList', 'String', 'Tree'];

async function getAlgos() {
  try {
    const result = [];
    const response = await fetch('/allAlgos').then((data) => data.json());
    for (let i = 0; i < response.length; i++) {
      result.push(
        <Category
          key={i}
          text={response[i]['category']}
          name={response[i]['name']}
        />
      );
    }
    return result;
  } catch (err) {
    return 'an error';
  }
}

export default CategoriesComponent;
