const Recipe = require('./Recipe');
const User = require('./User');
const MealPlan = require('./MealPlan');

Recipe.belongsToMany(User, {
  through: {
    model: MealPlan,
    unique: false
  }, 
  as: 'user_recipes'
});

User.belongsToMany(Recipe, {
  through: {
    model: MealPlan,
    unique: false
  },
  as: 'planned_meal'
});

module.exports = { Recipe, User, MealPlan };
