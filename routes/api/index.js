const router = require('express').Router();
const User = require('../../db/User');
const Location = require('../../db/Location');
const passport = require('./passport.js');


router.post('/login', passport.authenticate('local'), (req, res) => {
  return res.status(200).json({
    url: '/map',
    session: {
      email: req.user.dataValues.id,
      password: req.user.dataValues.password,
    }
  });
});

router.post('/register', (req, res) => {
  if (!('email' in req.body)) {
    res.json({ error: 'Must use an email adress.' });
    return 0;
  }
  if (!req.body.email.includes('@') || !req.body.email.includes('.')) {
    res.json({ error: 'Invalid email address.' });
    return 0;
  }
  if (!('password' in req.body)) {
    res.json({ error: 'Must provide a password.' });
    return 0;
  }
  if (req.body.password.length < 6) {
    res.json({ error: 'Password must be at least 6 characters.' });
    return 0;
  }
  User.create(req.body, (err) => {
    if (err) throw err;
    res.end();
  });
  return 0;
});

// Distance checking and relevant locations will be done here
router.get('/locations', async (req, res) => {
  // This will temporarily send the first five results from the db
  const locations = await Location.find({}).limit(5);
  res.json(locations);
});

module.exports = router;
