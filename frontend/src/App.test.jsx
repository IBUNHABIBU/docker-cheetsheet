// src/components/Button.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with text and handles click', () => {
  const handleClick = jest.fn(); // Mock function
  render(<Button onClick={handleClick}>Click Me</Button>);

  // Check if the button is rendered with the correct text
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();

  // Simulate a button click
  fireEvent.click(buttonElement);

  // Check if the mock function was called
  expect(handleClick).toHaveBeenCalledTimes(1);
});