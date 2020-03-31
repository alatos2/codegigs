const express = require('express');
const route = express.Router();
const Gig = require('../models/gigs');

route.get('/', (req, res) => res.render('index'));

route.get('/gigs', (req, res) => {
    Gig.find()
    .then(gigs => {
        res.render('gigs', {
            gigs
        })
    })
    .catch(e => console.log(e))
})

module.exports = route;
