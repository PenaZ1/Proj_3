const router = require('express').Router();
const authRoutes = require('./auth');
const User = require('../../db/User');

router.post('/register', (req, res) => {
  User.create(req.body, (err) => {
    if (err) throw err;
    res.end();
  });
});

router.use('/auth', authRoutes);

module.exports = router;
