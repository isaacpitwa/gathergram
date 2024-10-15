import React from 'react';
import { render, screen } from '@testing-library/react';
import StarRating from '../../components/Star';

describe('StarRating Component', () => {
    test('renders the correct number of stars', () => {
        render(<StarRating rating={3} />);
        const starElements = screen.getAllByRole('img');
        expect(starElements).toHaveLength(5);
    });

    test('highlights the correct number of stars based on rating', () => {
        render(<StarRating rating={3} />);
        const highlightedStars = screen.getAllByRole('img', { name: /highlighted/i });
        expect(highlightedStars).toHaveLength(3);
    });

    test('renders gray stars for the remaining stars', () => {
        render(<StarRating rating={3} />);
        const grayStars = screen.getAllByRole('img', { name: /gray/i });
        expect(grayStars).toHaveLength(2);
    });
});