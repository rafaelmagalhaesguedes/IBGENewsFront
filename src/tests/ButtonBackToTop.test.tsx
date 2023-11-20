import { fireEvent } from '@testing-library/react';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import renderWithRouter from '../helpers/renderWithRouter';

describe('BackToTopButton', () => {
  const BUTTON = 'button-to-top';

  it('renders correctly', () => {
    const { queryByRole } = renderWithRouter(<BackToTopButton />);

    expect(queryByRole('button')).not.toBeInTheDocument();
  });

  it('appears when window is scrolled down', () => {
    const { getByTestId } = renderWithRouter(<BackToTopButton />);

    // Simulate window scroll event
    window.scrollY = 500;
    fireEvent(window, new Event('scroll'));

    expect(getByTestId(BUTTON)).toBeInTheDocument();
  });

  it('scrolls to top when clicked', () => {
    const { getByTestId } = renderWithRouter(<BackToTopButton />);

    // Simulate window scroll event
    window.scrollY = 500;
    fireEvent(window, new Event('scroll'));

    const button = getByTestId(BUTTON);
    fireEvent.click(button);

    expect(window.scrollY).toBe(500);
  });

  it('sets isVisible to false when window is not scrolled down enough', () => {
    const { queryByTestId } = renderWithRouter(<BackToTopButton />);

    // Simulate window scroll event
    window.scrollY = 200;
    fireEvent(window, new Event('scroll'));

    expect(queryByTestId(BUTTON)).not.toBeInTheDocument();
  });
});
