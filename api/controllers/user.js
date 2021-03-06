const User = require('../models/userModels');
const bcrypt = require('bcrypt');

  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.

  const createUser = (req, res) => {
  const { username, password } = req.body;
  const user = new User(req.body);
  user
    .save()
    .then(user => {
      res.status(201).json({ username, password });
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  createUser
};
