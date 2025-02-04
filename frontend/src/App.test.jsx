// src/components/Button.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  
  test('renders Vite and react logos', () => {

    render(<App />)

    // check if the vite logo is rendered
    const viteLogo = screen.getAllByAltText('Vite logo');
    expect(viteLogo).tobeInTheDocument()

    const reactLogo = screen.getAllByAltText('React logo');
    expect(viteLogo).tobeInTheDocument()
  })
});