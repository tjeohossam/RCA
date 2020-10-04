const express = require('express');
const router = express.Router();

// @route   Get api/contacts
// @desc    Get all users contacts
// @access  private

router.get('/', (req, res) => {
  res.send('Get all Contacts');
});

// @route   POST api/contacts
// @desc    add new contacts
// @access  Private

router.post('/', (req, res) => {
  res.send('ADD contact');
});

// @route   Put api/contacts/:id
// @desc    update contacts
// @access  Private

router.put('/:id', (req, res) => {
  res.send('update contact');
});

// @route   Delete api/contacts/:id
// @desc    delete contacts
// @access  Private

router.delete('/:id', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
