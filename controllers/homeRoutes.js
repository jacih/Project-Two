const router = require('express').Router();
const { User, Meal } = require('../models');
const withAuth = require ('../utils/auth');

//Route to get all meals
router.get('/', async (req, res) => {
    const allmealData = await Meal.findAll().catch((err) => {
      res.json(err);
    })
  
    const meals = allmealData.map((meal) => meal.get({ plain: true }));
    res.render ('getmeals', {meals});
});

//Route to get a single meal
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
            ...meals,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/mealplan', withAuth, async (req, res) => {
    try {
        const userData = await User.findbyPk(req.session.user_id, {
            attributes: { excludes: ['password'] },
            include: [{ model: Meal }],
        });

        const user = userData.get({ plain: true });

        res.render('mealplan', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})
router.get('/register', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/addmeal');
        return;
    }
    res.render('register');
})


router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/addmeal');
        return;
    }
    res.render('login');
})

module.exports = router;