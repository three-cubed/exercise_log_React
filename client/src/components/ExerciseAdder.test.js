import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import ExerciseAdder from './ExerciseAdder.js';

afterEach(cleanup);

describe('ExerciseAdder component', () => {
    test('renders', () => {
        render(<ExerciseAdder />);
    });
})
