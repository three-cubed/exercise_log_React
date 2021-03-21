import React, { useState } from 'react';

// const submitExerciseEvent = event => {
//     event.preventDefault();
//     fetch('/???', {
//         method: 'post',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ etc. }),
//       }).then(() => {
//         setNewExerciseEvent('');
//         getExerciseList();
//       });
// };

// propFuncOnAdd below is the prop added to the ExerciseAdder component in the App.js page.
const ExerciseAdder = ({ propFuncOnAdd }) => {
    const [exerciseEventTitle, setExerciseEventTitle] = useState('');
    const [exerciseDate, setExerciseDate] = useState('');
    const [achievement, setAchievement] = useState('');
    const [colour, setColour] = useState('grey');

    const submitExerciseEvent = (e) => {
        e.preventDefault(); // Prevents submit to a page.
        if (!exerciseEventTitle || !exerciseDate) {
            alert('Make sure you have added an exercise event and when you did it!');
            return;
        }
        propFuncOnAdd({ exerciseEventTitle, exerciseDate, achievement, colour });
        // Then revert to default non-values
        setExerciseEventTitle('');
        setExerciseDate('');
        setAchievement('');
        setColour('');
    }

    return (
        <div className='formContainer'>
            <form id='exerciseAdderForm' 
                onSubmit={submitExerciseEvent}
            >
                <div>
                    <label>Exercise:</label>
                    <input type='text' placeholder='What was the exercise?' 
                    value={exerciseEventTitle} 
                    onChange={(e) => setExerciseEventTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Day:</label>
                    <input type='text' placeholder='When did you do it?' 
                    value={exerciseDate} 
                    onChange={(e) => setExerciseDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Achievement:</label>
                    <input type='text' placeholder='What did you manage to do?' 
                    value={achievement} 
                    onChange={(e) => setAchievement(e.target.value)}
                    />
                </div>
                <div>
                    <label>Colour:</label>
                    <input type='text' placeholder='Select a colour for this exercise.' 
                    value={colour} 
                    onChange={(e) => setColour(e.target.value)}
                    />
                </div>
                <button type='submit' id='submissionBtn'>Save exercise event!</button>
            </form>
        </div>
    )
}

export default ExerciseAdder;
