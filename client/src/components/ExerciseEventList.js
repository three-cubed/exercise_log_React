import ExerciseEvent from './ExerciseEvent';

const ExerciseEventList = ({ exercises }) => {
    return (
        <>
            {exercises.map((exercise) => (
                <ExerciseEvent key={exercise.id} 
                id={exercise.id}
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
