const mongoose = require('mongoose');

// {id: 234, colour: 'tba', icon: 'tba', exerciseEventTitle: 'Swimming', exerciseDate: '4th March', achievement: '500 metres'},

const exerciseEventSchema = new mongoose.Schema({
    colour: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    exerciseEventTitle: {
        type: String,
        required: true,
    },
    exerciseDate {
        type: String,
        required: true,
    },
    achievement: {
        type: String,
    },
});

module.exports = mongoose.model('exerciseEvent', exerciseEventSchema);
