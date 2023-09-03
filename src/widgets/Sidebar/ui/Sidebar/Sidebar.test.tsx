import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from '@/shared/lib/helpers/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  test('Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});

test('Sidebar', () => {
  renderWithTranslation(<Sidebar />);
  const toggleBtn = screen.getByTestId('sidebar-toggle');
  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  fireEvent.click(toggleBtn);
  expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
});
