const mongoose = require('mongoose');

const exerciseEventSchema = new mongoose.Schema({
    exerciseEventTitle: {
        type: String,
        required: true,
    },
    exerciseDate: {
        type: String,
        required: true,
    },
    achievement: {
        type: String,
    },
    colour: {
        type: String,
        default: 'grey',
    },
    icon: {
        type: String,
    },
});

module.exports = mongoose.model('exerciseEvent', exerciseEventSchema);
