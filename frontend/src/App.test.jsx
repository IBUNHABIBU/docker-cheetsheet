// src/components/Button.test.js
import React from 'react';
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { expect } from 'vitest';

describe('App Component', () => {
  
  // Test 1: Check if the component renders correctly
  test('renders Vite and react logos', () => {

    render(<App />)

    // check if the vite logo is rendered
    const viteLogo = screen.getByAltText(/Vite logo/i);
    // expect(viteLogo).toBeInTheDocument()

    const reactLogo = screen.getByAltText(/React logo/i);
    // expect(reactLogo).toBeInTheDocument()
  })

  // Test 2: check if the initial count is 0

  // test('Displays initial count as 0', () => {
  //   render(<App />)
  //   // Check if the count is initially 0
  //   const countElement = screen.getByText(/count is 0/i);
  //   expect(countElement).toBeInTheDocument()
  // })

  // test('Increment counnt when the button is clicked', () => {
  //   render(<App />)
  //   // find the button and click it
  //   const buttonElement = screen.getByRole('button', { name: /count is 1/i })
  //   expect(buttonElement).toBeInTheDocument();
  //   fireEvent.click(buttonElement);

  //   // const countElement = screen.getByText(/count is 1/i)
  //   // expect(countElement).toBeInTheDocument()
  // })
});