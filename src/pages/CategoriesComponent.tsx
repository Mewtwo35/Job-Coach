import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Navigate,
  NavigateFunction,
  useNavigate,
  Link,
} from 'react-router-dom';
import TryButton from './TryButton';
// import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
type CategoryProps = {
  text: String;
  name: String;
};
// type CategoriesComponentProps = {
//   setNavigate: any;
// };

// function topLevel() {
//   return (
//     <div>
//       <CategoriesComponent setNavigate={useNavigate}></CategoriesComponent>
//       <div className="logoutButtonDiv">
//         {' '}
//         <TryButton />
//       </div>
//     </div>
//   );
// }

export const CategoriesComponent = () => {
  const [catArr, setCatArr] = useState<any>([]);
  const navigate = useNavigate();
  // const { setNavigate } = props;
  let categoriesArray: any[] = []; //need to change type from any[]
  const categories: String[] = ['Arrays', 'LinkedList', 'String', 'Tree'];
  function handleNav() {
    navigate('/questions');
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
      <h2>List of Coding questions</h2>
      {catArr}
      <div className='help'><TryButton/></div>
      <button onClick={handleNav}></button>
    </div>
  );
};

const Category = (props: CategoryProps) => {
  const { text, name } = props;
  const [navigate, setNavigate] = useState<any>(false);

  async function handleClick(e: React.MouseEvent<HTMLElement>, name: any) {
    e.preventDefault();
    // setNavigate(true);

    try {
      const response = await fetch(
        '/algo/?' +
          new URLSearchParams({
            algoName: name,
          }).toString()
      ).then((res) => res.json());

      console.log(response);
      // props.navigate
      // return <Navigate to="/questions" />;
      // navigate('/questions');
      return response;
    } catch (err) {
      return 'error finding algo';
    }
    // return <Navigate to="/questions" />;
  }
  return (
    <div className={'CategoryContainer'}>
      <h2> Category: {text}</h2>
      <h2> Name: {name}</h2>
      <Link to={'/questions'}>
        <button>navigate</button>
      </Link>
      ;
      {/* <button
        onClick={(e) => {
          handleClick(e, name);
        }}
      >
        Try
      </button> */}
      {/* <button onClick={() => navigate('/questions')}>click me</button> */}
      {navigate ? <Navigate to="/questions" /> : <p>placeholder</p>}
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
// export default topLevel;
