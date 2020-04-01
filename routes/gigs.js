const express = require('express');
const route = express.Router();
const gigs = require('../controllers/gigs');
const user = require('../controllers/auth');
const auth = require('../middlewares/auth');

route.get('/', (req, res) => res.render('index'));
route.get('/signup', (req, res) => res.render('signup'));
route.get('/signin', (req, res) => res.render('signin'));
route.post('/signup', user.signup);
route.post('/signin', user.signin);
route.get('/gigs', gigs.allGigs);
route.get('/add', auth, (req, res) => {
    res.render('admin/add', {
        username: req.decode.userId
    })
})
route.get('/signout', (req, res) => {
    
})

module.exports = route;
