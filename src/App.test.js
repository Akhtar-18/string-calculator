import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders learn react link', () => {
  const { container } = render(<App />);
  console.log(container.innerHTML);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
