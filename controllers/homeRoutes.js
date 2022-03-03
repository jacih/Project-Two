const router = require('express').Router();
const { User, Meal } = require('../models');
const withAuth = require ('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const MealPlan = await Meal.findAll ({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        }),
        const meals = MealPlan.map((meal) => meal.get({ plain: true }));
        
        res.render('homepage', {
            meals,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

