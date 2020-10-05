const { request } = require('express');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

// @route   POST api/users
// @desc    pour register un user
// @access  Public

router.post(
  '/',
  [
    check('name', 'Please enter your name!!').not().isEmpty(),

    check('email', 'Please enter a valide email!!').isEmail(),

    check(
      'password',
      'Please enter a password with 6 or more caractere!!'
    ).isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('passed');
  }
);
router.get('/', (req, res) => {
  res.send('hossam');
});

module.exports = router;
