const Gig = require('../models/gigs');

const allGigs = (req, res) => {
    Gig.find()
    .then((gigs) => {
        res.render('gigs', {
            gigs
        })
    })
}

const gigs = {
    allGigs
}

module.exports = gigs
