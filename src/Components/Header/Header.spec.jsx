import { render, screen, fireEvent} from '@testing-library/react';
import Header from './Header';
import { scrollTo } from '../../utils/scrollTo';

jest.mock('../../lib/dato-cms');
jest.mock('../../utils/scrollTo', () => ({
  scrollTo: jest.fn(),
}));




describe('Header', () => {
  it('should render the header components', async () => {
    render(<Header />);

    const subtitle = await screen.findByText(/Mocked English Subtitle/i);
    const title = await screen.findByText(/Mocked English Title/i);
    const description = await screen.findByText(/Mocked English Description/i);
    const heroBtn1 = screen.getByRole('button', { name: 'heroBtn1' })
    const btnDown = screen.getByRole('button', { name: 'btn-down-container' });

    expect(subtitle).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(heroBtn1).toBeInTheDocument();
    expect(btnDown).toBeInTheDocument();
  });

  it('should call scrollTo function with the correctly section', async () => {
    render(<Header />);

    fireEvent.click(screen.getByRole('button', { name: 'btn-down-container' }));

    expect(scrollTo).toHaveBeenCalledWith('main');

    fireEvent.click(screen.getByRole('button', { name: 'heroBtn1' }));

    expect(scrollTo).toHaveBeenCalledWith('contact');
  });
});
