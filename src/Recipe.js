import React from 'react'
import style from './recipe.module.css';

const Recipe = ({ title, cuisineType, calories, image, ingredients }) => {

    return (

        <div className={style.recipe}>
            <h1>{title}</h1>
            <h2>{cuisineType} cuisine</h2>
            <h3>{calories} Calories</h3>
            <ul className='ingredians_container'>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image} alt="chicken_recipe_image" />

        </div>
    )
}

export default Recipe