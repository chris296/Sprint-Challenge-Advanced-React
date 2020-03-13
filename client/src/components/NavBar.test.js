import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

test('renders navbar header', () => {
    const {getByText} = render(<NavBar/>);
    getByText(/Women's World Cup Search Trends/i);
})