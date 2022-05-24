import React from 'react';
import { render,  screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('Header', () => {
    render(<Header />);
    const title = screen.getByText('SACOLA');

    expect(title).toBeInTheDocument()
  })
});