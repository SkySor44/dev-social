const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Get token from the header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    res.status(401).json({ msg: 'No Token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtsecret'));

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
