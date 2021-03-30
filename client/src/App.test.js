import React from 'react';
import App from './App';
import { act, fireEvent, render } from '@testing-library/react';

test('renders', () => {
    render(<App />);
})
