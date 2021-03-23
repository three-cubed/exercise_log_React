import React from 'react';

const ExerciseEvent = (props) => {
return (
    <>
        <div className='exerciseEvent' style={{ color: props.colour, borderLeft: 'solid 16px', borderBottom: 'solid 2px' }}>
            <p> 
                &emsp; <small>{props.exerciseDate}</small>
                &emsp; <b>{props.exerciseEventTitle}</b>&emsp;&emsp;&emsp; <br />
                &emsp; {props.achievement}
            </p>
        </div>
        <br />
    </>
)}

export default ExerciseEvent;
