import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('classNames', () => {
  test('button is default', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('button with clear', () => {
    render(<Button variant="clear">TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
