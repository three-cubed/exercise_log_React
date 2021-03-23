// Port 5005 is indicated as the proxy in /client/package.json

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');

const appRouter = require('./routes/routes');
app.use('/', appRouter);

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config({ path: './.env' });
}

mongoose.connect(process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('Connected to MongoDB'); });

// Dummy data for development & testing purposes
// app.get('/', (req, res) => {
//     const dummyExerciseData = [
//       {id: 123, colour: 'tba', icon: 'tba', exerciseEventTitle: 'Running', exerciseDate: '3rd March', achievement: '3 miles in 19:22'},
//       {id: 234, colour: 'tba', icon: 'tba', exerciseEventTitle: 'Swimming', exerciseDate: '4th March', achievement: '500 metres'},
//       {id: 345, colour: 'tba', icon: 'tba', exerciseEventTitle: 'Running', exerciseDate: '5th March', achievement: '3 miles in 17:19'},
//       {id: 456, colour: 'tba', icon: 'tba', exerciseEventTitle: 'Weights', exerciseDate: '7th March', achievement: 'Bench press: 3 x 7 x 15 kg'},
//       {id: 567, colour: 'tba', icon: 'tba', exerciseEventTitle: 'Sit-ups', exerciseDate: '7th March', achievement: '60 sit-ups in 2 minutes'},
//     ];
//     res.json(dummyExerciseData);
// });

const PORT = process.env.PORT || 5005;
app.listen(PORT);
console.log(`listening to (port) ${PORT}`);
