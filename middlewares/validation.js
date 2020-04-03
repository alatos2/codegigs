const {check, validationResult} = require('express-validator');

const validations = {
    signup(req, res, next) {

    },

    signin: [
        check('username', 'username is required').not().isEmpty(),
        check('password', 'password is required').not().isEmpty()
    ],

    result(req, res, next) {
        var result = validationResult(req);
        var errors = result.errors;
        if(!result.isEmpty()){
             res.render('signin', { errors: errors})
        }
        next();
    }

}

module.exports = validations;