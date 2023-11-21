import { fireEvent, render } from '@testing-library/react';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';

describe('ButtonToTop component testing', () => {
  const BUTTON = 'button-to-top';

  it('1. Renders correctly', () => {
    const { queryByRole } = render(<BackToTopButton />);

    expect(queryByRole('button')).not.toBeInTheDocument();
  });

  it('2. Appears when window is scrolled down', () => {
    const { getByTestId } = render(<BackToTopButton />);

    // Simulate window scroll event
    window.scrollY = 500;
    fireEvent(window, new Event('scroll'));

    expect(getByTestId(BUTTON)).toBeInTheDocument();
  });

  it('3. Scrolls to top when clicked', () => {
    const { getByTestId } = render(<BackToTopButton />);

    // Simulate window scroll event
    window.scrollY = 500;
    fireEvent(window, new Event('scroll'));

    const button = getByTestId(BUTTON);
    fireEvent.click(button);

    expect(window.scrollY).toBe(500);
  });

  it('4. Sets isVisible to false when window is not scrolled down enough', () => {
    const { queryByTestId } = render(<BackToTopButton />);

    // Simulate window scroll event
    window.scrollY = 200;
    fireEvent(window, new Event('scroll'));

    expect(queryByTestId(BUTTON)).not.toBeInTheDocument();
  });
});
