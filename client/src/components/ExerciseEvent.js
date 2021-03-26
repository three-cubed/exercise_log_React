import React from 'react';

const ExerciseEvent = (props) => {
    const deleteExercise = async (event, exerciseEventId, callback) => {
        event.preventDefault();
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
                    <span className='deleteX'
                    onClick={event => deleteExercise(event, props.id, props.restateAfterDelete)}
                    > 
                    &ensp;X&ensp;
                    </span>
                    &emsp; {props.achievement}
                </p>
            </div>
            <br />
        </>
    )
}

export default ExerciseEvent;
