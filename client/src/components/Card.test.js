import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders searches in card', () => {
    const {getByText} = render(<Card/>);
    getByText(/searches/i);
})