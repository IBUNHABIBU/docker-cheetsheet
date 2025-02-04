// src/components/Button.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  
  // Test 1: Check if the component renders correctly
  test('renders Vite and react logos', () => {

    render(<App />)

    // check if the vite logo is rendered
    const viteLogo = screen.getAllByAltText('Vite logo');
    expect(viteLogo).tobeInTheDocument()

    const reactLogo = screen.getAllByAltText('React logo');
    expect(viteLogo).tobeInTheDocument()
  })

  // Test 2: check if the initial count is 0

  test('Displays initial count as 0', () => {
    render(<App />)

    // Check if the count is initially 0
    const countElement = screen.getByText(/count is 0/i);
  })
});