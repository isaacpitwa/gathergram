import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FaqItem from '../../../components/home/FaqItem';

describe('FaqItem Component', () => {
    it('renders the question and answer', () => {
        render(<FaqItem question="What is your return policy?" answer="You can return any item within 30 days." icon="heart" />);
        
        expect(screen.getByText('What is your return policy?')).toBeInTheDocument();
        expect(screen.getByText('You can return any item within 30 days.')).toBeInTheDocument();
    });

    it('renders the correct icon', () => {
        render(<FaqItem question="What is your return policy?" answer="You can return any item within 30 days." icon="heart" />);
        
        const icon = screen.getByAltText('Heart icon');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveAttribute('src', expect.stringContaining('heart.svg'));
    });
});