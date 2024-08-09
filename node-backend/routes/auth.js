const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: 'Email already exists' });
            } else {
                const newUser = new User({ email, password });
                newUser.save()
                    .then(user => {
                        const token = user.generateAuthToken();
                        res.status(201).json({ token });
                    })
                    .catch(err => res.status(400).json({ error: err.message }));
            }
        });
});

// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err;
        if (!user) return res.status(400).json({ message: 'No user exists' });
        req.logIn(user, err => {
            if (err) throw err;
            const token = user.generateAuthToken();
            res.status(200).json({ token });
        });
    })(req, res, next);
});

module.exports = router;
