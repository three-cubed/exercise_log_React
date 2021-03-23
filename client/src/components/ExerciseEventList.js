import ExerciseEvent from './ExerciseEvent';

const ExerciseEventList = ({ exercises, propForUpdating }) => {
    return (
        <>
            {exercises.map((exercise) => (
                <ExerciseEvent key={exercise._id} 
                icon={exercise.icon}
                colour={exercise.colour} 
                exerciseEventTitle={exercise.exerciseEventTitle} 
                exerciseDate={exercise.exerciseDate} 
                achievement={exercise.achievement} />
            ))
            }
        </>
    )
}

export default ExerciseEventList;
