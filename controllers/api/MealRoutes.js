const router = require('express').Router();
const { User, Meal, Recipe } = require('../../models');

//GET all meals
router.get('/', async (req, res) => {
    try {
      const MealData = await Meal.findAll();
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//Get a single meal
router.get('/:id', async (req, res) => {
    try {
      const MealData = await Meal.findByPk(req.params.id, {
        include: [{ model: }]
      });
  
      if (!MealData) {
        res.status(404).json({ message: });
        return;
      }
  
      res.status(200).json(MealData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//Create meal
router.post('/', async (req, res) => {
    try {
      const MealData = await Meal.create(req.body);
      res.status(200).json(locationData);
    } catch (err) {
      res.status(400).json(err);
    }
});

//Delete meal
router.delete('/:id', async (req, res) => {
    try {
      const MealData = await Meal.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!MealData) {
        res.status(404).json({ message: });
        return;
      }
  
      res.status(200).json(MealData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;