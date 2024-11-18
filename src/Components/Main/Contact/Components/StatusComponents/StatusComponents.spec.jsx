import { render, screen } from '@testing-library/react';
import StatusComponents from './StatusComponents';

describe('StatusComponents', () => {
  test('should render the loading state', () => {
    render(<StatusComponents status="isLoading" />);
    
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('loading-svg')).toBeInTheDocument();
  });

  test('should render the success state', () => {
    render(<StatusComponents status="success" />);
    
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('success-svg')).toBeInTheDocument();
  });

  test('should render the error state', () => {
    render(<StatusComponents status="error" />);
    
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('error-svg')).toBeInTheDocument();
  });
});
