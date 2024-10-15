import React from 'react';
import { render, screen } from '@testing-library/react';
import FaqSection from '../../../components/home/Faq';
import FaqItem from '../../../components/home/FaqItem';

jest.mock('../../../components/home/FaqItem', () => jest.fn(() => <div>Mocked FaqItem</div>));

describe('FaqSection Component', () => {
    test('renders the FAQ section with title and description', () => {
        render(<FaqSection />);
        const titleElement = screen.getByText(/Frequently asked questions/i);
        const descriptionElement = screen.getByText(/Everything you need to know about the product and billing./i);
        expect(titleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
    });


    test('renders the "Still have questions?" section', () => {
        render(<FaqSection />);
        const stillHaveQuestionsTitle = screen.getByText(/Still have questions?/i);
        expect(stillHaveQuestionsTitle).toBeInTheDocument();
    });

    test('renders the "Get in touch" button', () => {
        render(<FaqSection />);
        const buttonElement = screen.getByText(/Get in touch/i);
        expect(buttonElement).toBeInTheDocument();
    });
});