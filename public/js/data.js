const sequelize = require('../config/connection');
const recipeData = require('./recipeData.json');
const { Meal, Recipe } = require('../../models');

const recipeScraper = require('recipe-scraper');

let mealAPI = 'https://www.themealdb.com/api/json/v1/1/random.php';
let meals = [];
let recipes = [];

const getRandomMeal = async () => {
  let url = mealAPI;
    let res = await fetch(mealAPI, {
      method: 'GET',
      headers: {
		"x-rapidapi-host": "themealdb.p.rapidapi.com",
		"x-rapidapi-key": "1b6afa0d1fmsha06464738d2a28bp1faa75jsn6730951ccc8a"
	    }
    }).then(data => {
        console.log(data);
    }).catch (err => {
        console.log(error);
    })
}
//render random meal name to meal list
const renderRandomMeal = async () => {
  let randomMeal = await getRandomMeal();
  console.log(randomMeal[0]);
  console.log(randomMeal[0].strMeal);
  let mealName = randomMeal[0].strMeal;
  meals.push(mealName);
  // create aliases for all the data we want to grab
  const recipe = new Recipe ();
  const meal = new Meal (mealName);
}


//make new meal class with random meal data

const scrapeRecipes = async () => {
  const { response } = require('express');
  console.log(recipeData);
  for (let i = 0; i < recipeData.length; i++) {
    console.log(recipeData[i].recipe_url);
    recipes.push(recipeData[i].recipe_url);
  }
  console.log(recipes);
  for (let r = 0; r < recipes.length; r++) {
    console.log(recipes[r]);
    let recipeURL = recipes[r];
    let data = await recipeScraper(recipeURL);
    recipeScraper(recipeURL).then(data => {
      meals.push(data.name);
      const recipe = new Recipe (data.name, data.tag, data.ingredients, data.instructions, data.image);
      const meal = new Meal (data.name);
    }).catch(error => {
      console.log(error);
    });
  }
}

//need a function to generate a random number;
//   module.exports = () =>
//   Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1);

// function to pick 7 random recipes from meal list