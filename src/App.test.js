// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NFTQuantum title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NFTQuantum/i);
    expect(titleElement).toBeInTheDocument();
});
