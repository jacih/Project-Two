const sequelize = require('../config/connection');
const { User, Meal, Recipe } = require('../models');
const scraper = require('scrapeRecipes');

const recipeData = require('./recipeData.json');
const userData = require('./userData.json');

let data = scraper();

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const recipe = await Recipe.Create([
  {
    name: data.name, 
    description: data.description, 
    ingedients: data.ingredients,
    image: data.image
    }
  ])
  //.then(() => console.log('Rcipe data has been saved')
  // const meal = await Meal.BulkCreate({
  // name: data.name  
  // });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  process.exit(0);
};

seedDatabase();
