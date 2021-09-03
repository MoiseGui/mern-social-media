const router = require('express').Router();
const User = require('../models/user');

// REGISTER ROUTE
router.post('/register', (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.save().then(result => {
        res.status(201).json({
            message: 'User created',
            user: result
        });
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;