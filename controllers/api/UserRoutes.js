const router = require('express').Router();
const { User, Meal, Recipe } = require('../../models');

// Create User
router.post('/', async (req, res) => {
    try {
        const UserData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = UserData.id;
            req.session.logged_in = true;

            res.status(200).json(UserData);
        })
    } catch (err) {
        res.status(400).json(err);
    }
})

// Delete User
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})

//User Login
router.post('/login', async (req, res) => {
    try {
      const UserData = await User.findOne({ where: { email: req.body.email } });
  
      if (!UserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await UserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = UserData.id;
        req.session.logged_in = true;
        
        res.json({ user: UserData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;