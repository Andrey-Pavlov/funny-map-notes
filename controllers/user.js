var userController = require('express').Router();

// Load required packages
var User = require('../models/user');

userController.route('/users')
    .post(function (req, res) {
// Create endpoint /api/users for POST
        var user = new User({
            username: req.body.username,
            password: req.body.password
        });

        user.save(function (err) {
            if (err)
                res.send(err);

            res.json({message: 'New beer drinker added to the locker room!'});
        });
    })
    .get(function (req, res) {
// Create endpoint /api/users for GET
        User.find(function (err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });