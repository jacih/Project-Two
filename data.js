const recipeData = require('./seeds/recipeData.json');
const { Meal, Recipe } = require('./models');

const recipeScraper = require('recipe-scraper');

// let mealAPI = 'https://www.themealdb.com/api/json/v1/1/random.php';
let meals = [];
let recipes = [];

// const getRandomMeal = async () => {
//   let url = mealAPI;
//     let res = await fetch(mealAPI, {
//       method: 'GET',
//       headers: {
// 		"x-rapidapi-host": "themealdb.p.rapidapi.com",
// 		"x-rapidapi-key": "1b6afa0d1fmsha06464738d2a28bp1faa75jsn6730951ccc8a"
// 	    }
//     }).then(data => {
//         console.log(data);
//     }).catch (err => {
//         console.log(error);
//     })
// }

// //async function to use The Meal
// const renderRandomMeal = async () => {
//   let randomMeal = await getRandomMeal();
//   console.log(randomMeal[0]);
//   console.log(randomMeal[0].strMeal);
//   // create aliases for all the data we want to grab from the json object

//   let mealName = randomMeal[0].strMeal;
//   meals.push(mealName);

//   let mealTag = randomMeal[0].strTags;
//   console.log(mealTag);

//   let mealInstr = randomMeal[0].strInstructions;
//   console.log(mealInstr);

//   let mealImgURL = randomMeal[0].strMealThumb;
//   console.log(mealImgURL);

//   let mealIngrs = [];
//   // use an assisting function (substring?) to grab all keys within ranomMeal json.object containing "strIngredient";
//   console.log(mealIngrs);
  
//   const recipe = new Recipe ();
//   const meal = new Meal (mealName);
// }

//make new meal class with random meal data

const scrapeRecipes = async () => {
  const { response } = require('express');
  console.log(recipeData);
  for (let i = 0; i < recipeData.length; i++) {
    // console.log(recipeData[i].recipe_url);
    recipes.push(recipeData[i].recipe_url);
  }
  // console.log(recipes);
  for (let r = 0; r < recipes.length; r++) {
    // console.log(recipes[r]);
    let recipeURL = recipes[r];
    let data = await recipeScraper(recipeURL);
    // console.log(data);
    meals.push(data.name);
    recipes.push(data);
  }
  console.log(data);
  return data;
}

// const generateRandomMeal = () => {
//   let meal = meals[Math.floor(Math.random()*meals.length)];
//   return meal;
// }

module.exports = scrapeRecipes;