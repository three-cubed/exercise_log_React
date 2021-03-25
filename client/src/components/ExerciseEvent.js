import React from 'react';

const ExerciseEvent = (props) => {
    const deleteExercise = async (event, exerciseEventId, callback) => {
        event.preventDefault(); 
        console.log(`Delete clicked for ${exerciseEventId}`)  
        // must await fetch or callback will get App.js to run getExerciseList before the deletion has taken place. 
        await fetch(`/delete/${exerciseEventId}`, {
            method: 'delete',
        });
        callback();
    };
    return (
        <>
            <div className='exerciseEvent' style={{ color: props.colour, borderLeft: 'solid 16px', borderBottom: 'solid 2px' }}>
                <p> 
                    &emsp; <small>{props.exerciseDate}</small>
                    &emsp; <b>{props.exerciseEventTitle}</b>&emsp;&emsp;&emsp; <br />
                    &emsp; {props.achievement}
                    <p className='deleteX'
                    onClick={event => deleteExercise(event, props.id, props.restateAfterDelete)}
                    > 
                    X
                    </p>
                </p>
            </div>
            <br />
        </>
    )
}

export default ExerciseEvent;
