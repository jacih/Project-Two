const router = require('express').Router();
const UserRoutes = require('./UserRoutes');
const MealRoutes = require('./MealRoutes');
const RecipesRoutes = require('./RecipeRoutes');

router.use('/users', UserRoutes);
router.use('/meals', MealRoutes);
router.use('/recipes', RecipesRoutes);

module.exports = router;