import React, { useState } from 'react';

// propFuncOnAdd below is the prop added to the ExerciseAdder component in the App.js page.
const ExerciseAdder = ({ propFuncOnAdd }) => {
    const [exerciseEventTitle, setExerciseEventTitle] = useState('');
    const [exerciseDate, setExerciseDate] = useState('');
    const [achievement, setAchievement] = useState('');
    const [colour, setColour] = useState('');

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
                {/* <div>
                    <label>Colour:</label>
                    <input type='text' placeholder='Select a colour for this exercise.' 
                    value={colour} 
                    onChange={(e) => setColour(e.target.value)}
                    />
                </div> */}
                <div>
                <select name="topic" onChange={(e) => setColour(e.target.value)}>
                        <option value="grey">Grey</option>
                        <option value="black">Black</option>
                        <option value="firebrick">Red</option>
                        <option value="coral">Orange</option>
                        <option value="gold">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="purple">Purple</option>
                        <option value="pink">Pink</option>
                        <option value="saddlebrown">Brown</option>
                </select>
                </div>
                <button type='submit' id='submissionBtn'>Save exercise event!</button>
            </form>
        </div>
    )
}

export default ExerciseAdder;
