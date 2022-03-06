const mealData = require('../seeds/mealData');
const recipeScraper = require('recipe-scraper');

//accumulator to hold all meal URLs;
let mealURLs = [];
//accumulator to hold all meal names to later randomize for 7-day mealplan;
let mealNames = [];

// function to call npm recipe-scraper package on all urls in mealData seed
const scrapeRecipes = async () => {
  const { response } = require('express');
  // console.log(mealData);
  for (let i = 0; i < mealData.length; i++) {
  // console.log(mealData[i].recipe_url);
    mealURLs.push(mealData[i].recipe_url);
    mealNames.push(mealData[i].name);
  }
  // console.log(recipes);
  for (let r = 0; r < mealURLs.length; r++) {
    // console.log(mealURLs[r]);
    let recipeURL = mealURLs[r];
    let data = await recipeScraper(recipeURL);
    return data;
  }
}

//
const generateRandomMeal = () => {
  let meal = mealNames[Math.floor(Math.random()*mealNames.length)];
  return meal;
}

const sevenDayMeals = () => {
  let mealplan = [];
  for (let d = 0; d < 7; d++) {
    let meal = generateRandomMeal();
    mealplan.push(meal);
  }
  return mealplan;
}

// naming all exports needed in other js files;
module.exports = scrapeRecipes;
module.exports = generateRandomMeal;
module.exports = sevenDayMeals;
