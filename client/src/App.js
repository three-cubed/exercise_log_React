import React, { useState, useEffect, useCallback } from 'react';
import './stylesheet.css';
import ExerciseEventList from './components/ExerciseEventList';
import ExerciseAdder from './components/ExerciseAdder';

const dummyExerciseData = [
  {id: 111, colour: 'green', icon: 'tba', exerciseEventTitle: 'Running', exerciseDate: '3rd March 2021', achievement: '3 miles in 19:22'},
  {id: 222, colour: 'blue', icon: 'tba', exerciseEventTitle: 'Swimming', exerciseDate: '4th March 2021', achievement: '500 metres'},
  {id: 333, colour: 'green', icon: 'tba', exerciseEventTitle: 'Running', exerciseDate: '5th March 2021', achievement: '3 miles in 17:19'},
  {id: 444, colour: 'grey', icon: 'tba', exerciseEventTitle: 'Weights', exerciseDate: '7th March 2021', achievement: 'Bench press: 3 x 7 x 15 kg'},
  {id: 555, colour: 'orange', icon: 'tba', exerciseEventTitle: 'Sit-ups', exerciseDate: '7th March 2021', achievement: '60 sit-ups in 2 minutes'},
];

const addExerciseEvent = (exerciseEvent) => {
  console.log(exerciseEvent);
}

function App() {
  // const [exerciseEvents, setExerciseEvents] = useState([dummyExerciseData]);

  // const getExerciseList = useCallback(() => {
  //   fetch('/???')
  //     .then(res => res.json())
  //     .then(setExerciseEvents);
  // });
  // useCallBack above prevents the constant creation of a new object (as in functions are objects)
  // each time the useEffect is triggered, as that would then trigger the useEffect again,
  // and an infinite loop would ensure.

  // useEffect(() => {
  //   getExerciseList();
  // }, []); 
  // As the brackets indicating when to do this useEffect are empty, 
  // the useEffect should only occur on first loading (or on reloading) the page.

  return (
    <div className="App">
        <p>
          Log your exercise here!
        </p>
        <ExerciseAdder propFuncOnAdd={addExerciseEvent} />
        <br />
        <ExerciseEventList exercises={dummyExerciseData} />
    </div>
  );
}

export default App;
