import React from 'react';
import { render, screen } from '@testing-library/react';
import FondFlexApp from './FondflexApp';

test('renders learn react link', () => {
  render(<FondFlexApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
