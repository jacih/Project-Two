const sequelize = require('sequelize');
const recipeScraper = require('recipe-scraper');

const { Recipe } = require('../models');

const mealFuncObj = require('../seeds/mealData');
const mealData = mealFuncObj.mealData;

// console.log(scraper);
// console.log(mealData);
// const recipesData = [];
// function to call npm recipe-scraper package on all urls in mealData seed
const recipeSeeding = () => {
  const { response } = require('express');
  console.log('this it being read');
  for (let i = 0; i < 10; i++) {
    console.log(i + mealData[i].recipe_url);
   let recipeURL = mealData[i].recipe_url;
   recipeScraper(`${recipeURL}`).then(data => {
     console.log(data + '===============================================================================================================================');
    //  let myData = 
    //  console.log(data.Recipe.name);
    //  recipesData.push(data);
    //  console.log('2349dfbdln3rcw09#@$%^&*()_(*&^R%E$^RU&TIB*Y(NUP*BOIVUC&DF*%G*^&OYBKU FJCU^%R&TUYIH' + recipesData.length);
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
     }).then ((data => {
      console.log('added successfully!')
     })).catch(error => {
      console.log('***********************************************************************************')
       console.log(error);
     });
    // return recipe;
  }).catch(error => {
    console.log('===============================================================================================================================');
    console.log('No recipe data exists!')
  }); 
  }

}

module.exports = recipeSeeding;