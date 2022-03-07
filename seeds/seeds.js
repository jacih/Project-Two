const sequelize = require('../config/connection');
console.log('1');
const { User } = require('../models');
const userData = require('./userData.json');

const recipeSeeding = require('./recipeData');

const mealData = require('./mealData');
const mealSeeding = mealData.seedMeals;

const seedAll = async () => {
  console.log('2');
  await sequelize.sync({ force: true });
  console.log('Database synced');
  console.log('3');
  mealSeeding();
  console.log('4');
  recipeSeeding();
  console.log('meals seeded')

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('users seeded');

  process.exit(0);
};

seedAll();