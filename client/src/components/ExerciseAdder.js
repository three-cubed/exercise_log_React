import React from 'react';

const ExerciseAdder = () => {
return (
    <div className='formContainer'>
        <form id='exerciseAdderForm'>
            <div>
                <label>Exercise:</label>
                <input type='text' placeholder='What was the exercise?' 
                // value={exerciseEventTitle} 
                />
            </div>
            <div>
                <label>Day:</label>
                <input type='text' placeholder='When did you do it?' 
                // value={exerciseDay} 
                />
            </div>
            <div>
                <label>Achievement:</label>
                <input type='text' placeholder='What did you manage to do?' 
                // value={achievement} 
                />
            </div>
            <div>
                <label>Colour:</label>
                <input type='text' placeholder='Select a colour to go with this exercise.' 
                // value={achievement} 
                />
            </div>
            <button type='submit' id='submissionBtn'>Save exercise event!</button>
        </form>
    </div>
)}

export default ExerciseAdder;
