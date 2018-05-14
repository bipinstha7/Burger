import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // this.state.ingredients is an object and we can't map objects. We can map arrays but not object
  // So we need to convert the given object in to an array
  // Object.keys() extracts keys of a given object and turns that in to an array - [salad, bacon, cheese ,meat]
  let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => { 
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => { // makes new array
        return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />; // we need to specify key in react otherwise it doesn't require
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
    // console.log(transformedIngredients.length);
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients</p>;
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;