// src/components/Button.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders button with text and handles click', () => {
  
  render(<Button onClick={handleClick}>Click Me</Button>);

  expect(handleClick).toHaveBeenCalledTimes(1);
});