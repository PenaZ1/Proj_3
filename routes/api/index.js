const router = require('express').Router();
const authRoutes = require('./auth');
const User = require('../../db/User');

router.post('/register', (req, res) => {
  User.create(req.body, (err, newUser) => {
    if (err) throw err;
    res.send(newUser);
  });
});

router.use('/auth', authRoutes);

module.exports = router;
