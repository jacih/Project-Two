const sequelize = require('sequelize');

const { User } = require('../models');
const userData = require('./userData.json');

const recipeSeeding = require('./recipeData');
// console.log(recipeSeeding);

const mealData = require('./mealData');
const mealSeeding = mealData.seedMeals;
// console.log(mealSeeding);

const seedDatabase = async () => {

  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  recipeSeeding();
  mealSeeding();
  
  process.exit(0);
};

seedDatabase();
