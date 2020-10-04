const express = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    pour register un user
// @access  Public

router.post('/', (req, res) => {
  res.send('Register a User');
});

module.exports = router;
