const router = require('express').Router();
const { Meal } = require('../../models');
const withAuth = require('../../utils/auth');

//Create meal
router.post('/', withAuth, async (req, res) => {
    try {
      const newMealPlan = await Meal.create({...req.body, user_id: req.session.user_id,
    });

      res.status(200).json(newMealPlan);
    } catch (err) {
      res.status(400).json(err);
    }
});

//Delete meal
router.delete('/:id', async (req, res) => {
    try {
      const MealPlan = await Meal.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!MealPlan) {
        res.status(404).json({ message: 'No meal plan found with this id'});
        return;
      }
  
      res.status(200).json(MealPlan);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;