import React from 'react';
import App from './App';
import { cleanup, fireEvent, render } from '@testing-library/react';

afterEach(cleanup);

test('renders', () => {
    render(<App />);
})

describe('App using ExerciseAdder form', () => {
    test('does not show form (by test id) before top btn click', () => {
        const renderApp = render(<App />);
        expect(renderApp.queryByTestId('exerciseAdderForm')).toBeNull();
    });
    test('shows form (by test id) after top btn click', () => {
        const renderApp = render(<App />);
        fireEvent.click(renderApp.getByText(/add a new exercise/i));
        expect(renderApp.getByTestId('exerciseAdderForm'));
    });
    test('does not show submit btn (by text) before top btn click', () => {
        const renderApp = render(<App />);
        expect(renderApp.queryByText(/Save new exercise event/i)).toBeNull();
    });
    test('shows submit btn (by text) after top btn click', () => {
        const renderApp = render(<App />);
        fireEvent.click(renderApp.getByText(/Add a new exercise/i));
        expect(renderApp.getByText(/Save new exercise event/i));
    });
});
