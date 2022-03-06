const sequelize = require('../config/connection');
const { User } = require('../models');
const seedRecipes = require('./recipeData');
const mealData = require('./mealData');
const mealSeeding = mealData.seedMeals;
const userData = require('./userData.json');

const seedDatabase = async () => {

  await sequelize.sync({ force: true });
  
  seedRecipes();
  mealSeeding();
  
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
