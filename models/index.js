// user has many meals;
// recipe has many meals;

const Recipe = require('./Recipe');
const User = require('./User');
const Meal = require('./Meal');

Recipe.belongsToMany(User, {
  through: {
    model: Meal,
    unique: false
  }, 
  as: 'user_recipes'
});

User.belongsToMany(Recipe, {
  through: {
    model: Meal,
    unique: false
  },
  as: 'planned_meal'
});


module.exports = { Recipe, User, Meal };
