const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Test route
// @access  Public (No Token Needed)
router.get('/', (req, res) => res.send('User route'));

module.exports = router;
