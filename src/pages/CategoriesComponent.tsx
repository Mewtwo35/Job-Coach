import * as React from 'react';


class CategoriesComponent extends React.Component {
  
  render() {
    return (
      <div>
        <h2>List of Coding questions</h2>
        {categoriesArray}
      </div>
      
    )
  }
}


class Category extends React.Component <{ text: String }> {
  render() {
    return (
      <div className={'CategoryContainer'}>
        <h2>{this.props.text}</h2>        
      </div>
    )
  }
}

const categories: String[] = ['Arrays', 'LinkedList', 'String', 'Tree']
const categoriesArray: any[] = []; //need to change type from any[]
for(let i = 0; i < categories.length; i++) {
  categoriesArray.push(<Category key={i} text={categories[i]} />)
}


export default CategoriesComponent;