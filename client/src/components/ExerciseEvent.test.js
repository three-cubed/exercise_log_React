import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom'; 
import ExerciseEvent from './ExerciseEvent.js';

describe('ExerciseEvent component', () => {
    test('renders', () => {
        render(<ExerciseEvent />);
    });
    test('shows exerciseDate', () => {
        const renderExerciseEvent = render(<ExerciseEvent exerciseDate={'dummy date'} />);
        expect(renderExerciseEvent.getByText(/dummy date/));
    });
    test('shows exerciseEventTitle', () => {
        const renderExerciseEvent = render(<ExerciseEvent exerciseEventTitle={'dummy event title'} />);
        expect(renderExerciseEvent.getByText(/dummy event title/));
    });
    test('shows achievement', () => {
        const renderExerciseEvent = render(<ExerciseEvent achievement= {'dummy achievement'}/>);
        expect(renderExerciseEvent.getByText(/dummy achievement/));
    });
    test('shows colour from props.colour', () => {
        const renderExerciseEvent = render(<ExerciseEvent colour={'blue'} />);
        expect(renderExerciseEvent.getByTestId('exerciseEvent')).toHaveStyle('color: blue');
    });
})
