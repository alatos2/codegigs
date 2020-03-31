const mongoose = require('mongoose');

const gigSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    technologies: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date
    }
});

module.exports = mongoose.model('gigs', gigSchema);
