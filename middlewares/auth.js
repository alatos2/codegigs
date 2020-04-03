const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log(token);
        if (!token || token === '') return res.redirect('/signin');
        const decode = jwt.verify(token, process.env.SECRET);
        req.decode = decode;
        next();
    } catch(e) {
        console.error(e);
    }
}
