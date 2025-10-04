import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders card with title', () => {
    render(<Card title='Card Title'>This is a test card.</Card>);
    const titleElement = screen.getByText(/Card Title/i);
    expect(titleElement).toBeInTheDocument();
});