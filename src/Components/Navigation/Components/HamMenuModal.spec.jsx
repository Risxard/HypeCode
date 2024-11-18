import { render, screen, fireEvent } from '@testing-library/react';
import HamMenuModal from './HamMenuModal';
import { scrollTo } from '../../../utils/scrollTo';
import { useTranslation } from 'react-i18next';

jest.mock('../../../utils/scrollTo', () => ({
  scrollTo: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (key) => key,
    i18n: {
      language: 'pt-BR',
      changeLanguage: jest.fn(),
    },
  }),
}));

describe('HamMenuModal', () => {
  const handleCb = jest.fn();

  beforeEach(() => {
    handleCb.mockClear();
    render(<HamMenuModal handleCb={handleCb} />);
  });

  it('renders the modal correctly', () => {
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('navigation.home')).toBeInTheDocument();
    expect(screen.getByText('navigation.aboutUs')).toBeInTheDocument();
    expect(screen.getByText('navigation.ourServices')).toBeInTheDocument();
    expect(screen.getByText('navigation.portfolio')).toBeInTheDocument();
    expect(screen.getByText('navigation.contact')).toBeInTheDocument();
  });

  it('calls handleCb when the close button is clicked', () => {
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(handleCb).toHaveBeenCalled();
  });

  it('calls scrollTo with the correct section when a menu item is clicked', () => {
    fireEvent.click(screen.getByText('navigation.home'));
    expect(scrollTo).toHaveBeenCalledWith('Header');
    
    fireEvent.click(screen.getByText('navigation.aboutUs'));
    expect(scrollTo).toHaveBeenCalledWith('about');

    fireEvent.click(screen.getByText('navigation.ourServices'));
    expect(scrollTo).toHaveBeenCalledWith('ourServices');

    fireEvent.click(screen.getByText('navigation.portfolio'));
    expect(scrollTo).toHaveBeenCalledWith('portfolio');

    fireEvent.click(screen.getByText('navigation.contact'));
    expect(scrollTo).toHaveBeenCalledWith('contact');
  });

  it('calls changeLanguage when the language switch is clicked', () => {
    fireEvent.click(screen.getByRole('button', {name: 'switch-language'}));
    expect(useTranslation().i18n.changeLanguage).toHaveBeenCalledWith('en-US');
  });
});
