const sequelize = require('../config/connection');
const { User, Meal, Recipe } = require('../models');

const recipeData = require('./recipeData.json');
const userData = require('./userData.json');

const seedDatabase = async() => {
  await sequelize.sync({ force: true });
 
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const recipes = await Recipe.bulkCreate(recipeData);

  for (let i = 0; i < 8; i++) {
    const { id: randomRecipeId } = recipes[Math.floor(Math.random() * recipes.length)];
    await Meal.create({
      ...meal,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      recipe_id: randomRecipeId
    }).catch.log(err);
    console.log(err);
  }
  process.exit(0);
};

module.exports(seedDatabase);
