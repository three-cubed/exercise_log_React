import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom'; 
import ExerciseAdder from './ExerciseAdder.js';

describe('ExerciseAdder component', () => {
    test('renders', () => {
        render(<ExerciseAdder />);
    });
    test('pressing button sets off submit function (no data)', () => {
        global.alert = jest.fn(); // Allows click to simulate alert window, else malfunctions.
        const performFunction = jest.fn();
        const renderExerciseAdder = render(<ExerciseAdder onClick={performFunction()} />);
        fireEvent.click(renderExerciseAdder.getByRole('button'));
        expect(performFunction).toBeCalled();
    });
})
