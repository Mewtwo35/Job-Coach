import * as React from 'react';
import { useEffect, useState } from 'react';
type CategoryProps = {
  text: String;
  name: String;
};
export const CategoriesComponent = () => {
  const [catArr, setCatArr] = useState<any>([]);
  let categoriesArray: any[] = []; //need to change type from any[]
  const categories: String[] = ['Arrays', 'LinkedList', 'String', 'Tree'];

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
    </div>
  );
};

const Category = (props: CategoryProps) => {
  const { text, name } = props;
  return (
    <div className={'CategoryContainer'}>
      <h2> Category: {text}</h2>

      <h2> Name: {name}</h2>
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
