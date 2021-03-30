import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom'; 
import TitleBlock from './TitleBlock.js';

describe('TitleBlock component', () => {
    test('renders', () => {
        render(<TitleBlock />);
    });
    test('shows title text', () => {
        const renderTitleBlock = render(<TitleBlock />);
        expect(renderTitleBlock.getByText(/The Exercise Log/));
    });
    test('shows text from btnText', () => {
        const renderTitleBlock = render(<TitleBlock btnText={'someText'} btnColour={'blue'} />);
        expect(renderTitleBlock.getByText(/someText/));
    });
    test('shows colour from btnColour', () => {
        const renderTitleBlock = render(<TitleBlock btnText={'someText'} btnColour={'blue'} />);
        expect(renderTitleBlock.getByText(/someText/)).toHaveStyle('background-color: blue');
    });
})
