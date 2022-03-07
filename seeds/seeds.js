const sequelize = require('../config/connection');

const { User } = require('../models');
const userData = require('./userData.json');

const recipeSeeding = require('./recipeData');

const mealData = require('./mealData');
const mealSeeding = mealData.seedMeals;

const seedAll = async () => {

  await sequelize.sync({ force: true });
  console.log('Database synced');

  recipeSeeding();

  mealSeeding();
  console.log('meals seeded')

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('users seeded');

  process.exit(0);
};

seedAll();