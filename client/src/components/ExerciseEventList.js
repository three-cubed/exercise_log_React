import ExerciseEvent from './ExerciseEvent';

const ExerciseEventList = ({ exercises, restateAfterDelete }) => {
    return (
        <>
            {exercises.map((exercise) => (
                <ExerciseEvent 
                key={exercise._id} 
                id={exercise._id}
                icon={exercise.icon}
                colour={exercise.colour} 
                exerciseEventTitle={exercise.exerciseEventTitle} 
                exerciseDate={exercise.exerciseDate} 
                achievement={exercise.achievement} 
                restateAfterDelete={restateAfterDelete}
                />
            ))}
        </>
    )
}

export default ExerciseEventList;
