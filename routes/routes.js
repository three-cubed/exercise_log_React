const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const ExerciseEvent = require('../models/exerciseEvent');

router.get('/', (req, res) => {
    ExerciseEvent.find({})
    .then(exerciseEvents => res.json(exerciseEvents))
    .catch(err => res.status(500).json({ error: err }));
});

router.post('/exercisePost', (req, res) => {
    console.log('routes.js as server has recieved a post request: /exercisePost');
    // const { newInfo } = req.body;
    if (req.body.colour === '') {
        colour = undefined;  // Must be strictly undefined for default specified in the DB schema to apply.
    } else {
        colour = req.body.colour;
    }
    const newExerciseEvent = new ExerciseEvent({ 
        exerciseEventTitle: req.body.exerciseEventTitle,
        exerciseDate: req.body.exerciseDate,
        achievement: req.body.achievement,
        colour: colour,
     }); 
    newExerciseEvent.save()
    .then(info => res.json(info))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
