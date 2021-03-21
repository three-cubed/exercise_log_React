const express = require('express');
const ExerciseEvent = require('../models/exerciseEvent');

const router = express.Router();

router.get('/', (req, res) => {
    ExerciseEvent.find({})
    .then(exerciseEvents => res.json(exerciseEvents))
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;
