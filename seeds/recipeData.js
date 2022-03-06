const sequelize = require('sequelize');
const { Recipe } = require('../models');
const mealData = require('../seeds/mealData');
console.log(mealData);
console.log(datahelpers);

const mealURLs = [];

// function to call npm recipe-scraper package on all urls in mealData seed
const seedRecipes = async () => {
    const { response } = require('express');
    console.log(mealData);
    for (let i = 0; i < mealData.length; i++) {
    // console.log(mealData[i].recipe_url);
      mealURLs.push(mealData[i].recipe_url);
    }
    // console.log(recipes);
    for (let r = 0; r < mealURLs.length; r++) {
      // console.log(mealURLs[r]);
      let recipeURL = mealURLs[r];
      let data = await recipeScraper(recipeURL);
      console.log(data);
    //   const recipes = await Recipe.bulkCreate(data);
    //   return recipes;
    }
}

// seed meal table with a new meal class for each name;
// const recipeData = scrapeRecipes(mealData);
// console.log(recipeData);
// const seedMeals = () => {
//     for (let m = 0; m < mealData.length; m++) {
//       let meal = mealData[m].name;
//       // console.log(mealname);
//       // creating new class for every name in the mealData array;
//       const meal = Meal.create({ name: mealname });
//       // console.log(meal);
//     }
//   }

//const seedRecipe = () => Recipe.bulkCreate(recipes);

module.exports = seedRecipes;
