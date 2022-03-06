const sequelize = require('../config/connection');
const { User } = require('../models');
// const recipes = require('./recipeData');
const seedMeal = require('seedMeal');
const users = require('./userData.json');

const seedDatabase = async () => {

  await sequelize.sync({ force: true });
  
  // await seedRecipes();
  
  await seedMeals();
  
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
