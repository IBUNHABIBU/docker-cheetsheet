import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders Vite and React logos', () => {
    render(<App />);

    // Check if the Vite and React logos are rendered
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test('renders the correct initial count and increments on button click', () => {
    render(<App />);

    // Check that the button starts with the correct count
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    // Click the button and check that the count increases
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });

});
