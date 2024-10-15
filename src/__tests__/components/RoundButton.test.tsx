import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RoundButton from '../../components/RoundButton';

describe('RoundButton Component', () => {
    const mockOnClick = jest.fn();

    test('renders button with label', () => {
        render(<RoundButton label="Click Me" onClick={mockOnClick} customStyles="" />);
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('applies custom styles', () => {
        render(<RoundButton label="Styled Button" onClick={mockOnClick} customStyles="bg-blue-500 text-white" />);
        const buttonElement = screen.getByText(/Styled Button/i);
        expect(buttonElement).toHaveClass('bg-blue-500 text-white');
    });

    test('calls onClick when button is clicked', () => {
        render(<RoundButton label="Click Me" onClick={mockOnClick} customStyles="" />);
        const buttonElement = screen.getByText(/Click Me/i);
        fireEvent.click(buttonElement);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});