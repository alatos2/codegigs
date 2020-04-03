const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const config = require('config');
const dotenv = require('dotenv');
const User = require('../models/user');

dotenv.config();

const auth = {
    signup(req, res) {
        User.findOne({ username: req.body.username })
        .then(user => {
            if (user) {
                return res.render('404', {
                    error: 'Username already exist'
                })
            }
            bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new User();
                user.username = req.body.username;
                user.password = hash;
                user.save()
                .then(() => {
                    res.render('signin');
                })
                .catch(() => console.error(e))
            })
            .catch((e) => console.log(e))
        })
    },

    signin(req, res) {
        User.findOne({username: req.body.username})
        .then(user => {
            if(!user) {
                return res.render('404', {
                    error: 'Username does NOT exist'
                })
            }
            bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if(!valid) return console.log('Incorrect Password');
                const token = jwt.sign({userId: user._id}, process.env.SECRET, { expiresIn: '1h'});
                res.cookie('token', token, {maxAge: 360000});
                req.flash('success', 'Login Successful');
                res.redirect('/add');
            })
            .catch(e => console.error(e))
        })
        .catch(e => console.error(e))
    }
}

module.exports = auth;
