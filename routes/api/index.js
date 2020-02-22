const router = require('express').Router();
const authRoutes = require('./auth');
const User = require('../../db/User');
const Location = require('../../db/Location');

router.post('/register', (req, res) => {
  User.create(req.body, (err) => {
    if (err) throw err;
    res.end();
  });
});

// Distance checking and relevant locations will be done here
router.get('/locations', async (req, res) => {
  // This will temporarily send the first five results from the db
  const locations = await Location.find({}).limit(5);
  res.json(locations);
});

router.use('/auth', authRoutes);

module.exports = router;
