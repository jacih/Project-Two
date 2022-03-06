const sequelize = require('sequelize');
const recipeScraper = require('recipe-scraper');

const { Recipe } = require('../models');

const mealFuncObj = require('../seeds/mealData');
const mealData = mealFuncObj.mealData;

// console.log(scraper);
// console.log(mealData);

// function to call npm recipe-scraper package on all urls in mealData seed
const recipeSeeding = () => {
  const { response } = require('express');
  for (let i = 0; i < mealData.length; i++) {
   let recipeURL = mealData[i].recipe_url;
   recipeScraper(recipeURL).then(data => {
     const strInst = data.instructions.join(' ');
     const ingreds = data.ingredients.toString();
     const instrs = strInst.toString();
     const recipe = Recipe.create({ 
      name: data.name,
      description: data.description,
      ingredients: ingreds,
      instructions: instrs,
      image: data.image,
      recipe_link: recipeURL,
     });
    return recipe;
  }).catch(error => {
    console.log('No recipe data exists!')
  }); 
  }
}

module.exports = recipeSeeding;
