import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../../../components/home/Footer';

describe('Footer Component', () => {
  test('renders newsletter section', () => {
    render(<Footer />);
    expect(screen.getByPlaceholderText(/Enter your email address/i)).toBeInTheDocument();
  });
});