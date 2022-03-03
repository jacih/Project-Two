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
});

router.get('/meal/:id', async (req, res) => {
    try {
        const MealPlan = await Meal.findbyPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                }
            ]
        })
        
        const meals = MealPlan.get({ plain: true });

        res.render('meal', {
            ...meal,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findbyPk(req.session.user_id, {
            attributes: { excludes: ['password'] },
            include: [{ model: Meal }],
        });
        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
})

module.exports = router;