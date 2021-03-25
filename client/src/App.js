import React, { useState, useEffect, useCallback } from 'react';
import './stylesheet.css';
import ExerciseEventList from './components/ExerciseEventList';
import ExerciseAdder from './components/ExerciseAdder';

function App() {
    const [exerciseEvents, setExerciseEvents] = useState([]);

    const getExerciseList = useCallback(() => {
      fetch('/getExercise')
        .then(res => res.json())
        .then(setExerciseEvents);
    });
    // useCallBack above prevents the constant creation of a new object (as in functions are objects)
    // each time the useEffect is triggered, as that would then trigger the useEffect again,
    // and an infinite loop would ensure.

    useEffect(() => {
      getExerciseList();
    }, []); 
    // As the brackets indicating when to do this useEffect are empty, 
    // the useEffect should only occur on first loading (or on reloading) the page.

    const restateAfterDelete = () => {
      getExerciseList();
    }

    const addExerciseEvent = ( propFuncOnAddArguments ) => {
      console.log(propFuncOnAddArguments);
      fetch('/exercisePost', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(propFuncOnAddArguments)
      }).then(() => {
          getExerciseList();
      });
    }
    
    return (
      <div className="App">
          <p>
            Log your exercise here!
          </p>
          <ExerciseAdder propFuncOnAdd={addExerciseEvent} />
          <br />
          <ExerciseEventList 
              exercises={exerciseEvents} 
              restateAfterDelete={restateAfterDelete}/>
      </div>
    );
}

export default App;
