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

  test('renders text elements', () => {
    render(<App />);

    // Check for the presence of instructional text
    const editText = screen.getByText(/Edit src\/App\.jsx and save to test HMR/i);
    const docsText = screen.getByText(/Click on the Vite and React logos to learn more/i);

    expect(editText).toBeInTheDocument();
    expect(docsText).toBeInTheDocument();
  });
});
