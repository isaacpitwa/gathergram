/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactCard, { IconType } from '../../../components/home/ContactCard';

describe('ContactCard', () => {
    const props = {
        title: 'Contact Us',
        description: 'Reach out to us anytime.',
        contact: 'contact@example.com',
        icon: 'chat' as IconType,
    };

    it('renders the ContactCard component', () => {
        render(<ContactCard {...props} />);
        expect(screen.getByText(props.title)).toBeInTheDocument();
        expect(screen.getByText(props.description)).toBeInTheDocument();
        expect(screen.getByText(props.contact)).toBeInTheDocument();
    });

    it('renders the correct icon', () => {
        render(<ContactCard {...props} />);
        const icon = screen.getByAltText('Chat icon');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveAttribute('src', expect.stringContaining('chat.svg'));
    });

    it('applies the correct styles', () => {
        render(<ContactCard {...props} />);
        const card = screen.getByText(props.title).closest('div');
        expect(card).toHaveClass('bg-[#FFF6FC]');
    });
});