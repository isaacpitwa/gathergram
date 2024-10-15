import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SocialButton from '../../components/SocialButton';

describe('SocialButton Component', () => {
    const mockOnClick = jest.fn();

    test('renders button with label and icon', () => {
        render(<SocialButton label="Sign in with Google" icon="google" onClick={mockOnClick} />);
        const buttonElement = screen.getByText(/Sign in with Google/i);
        const iconElement = screen.getByAltText(/Google icon/i);
        expect(buttonElement).toBeInTheDocument();
        expect(iconElement).toBeInTheDocument();
    });

    test('calls onClick when button is clicked', () => {
        render(<SocialButton label="Sign in with Google" icon="google" onClick={mockOnClick} />);
        const buttonElement = screen.getByText(/Sign in with Google/i);
        fireEvent.click(buttonElement);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});