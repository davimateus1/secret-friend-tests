import { RecoilRoot } from 'recoil';
import { Footer } from '../components';
import { useParticipantsList } from '../state';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('../state', () => {
  return { useParticipantsList: jest.fn() };
});

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => {
  return { useNavigate: () => mockNavigation };
});

describe('Where not exists enough participants', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should be ale to not start the game', () => {
    render(<Footer />, { wrapper: RecoilRoot });

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});

describe('Where exists enough participants', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([
      'John Doe',
      'Jane Doe',
      'Foo Bar',
    ]);
  });

  it('Should be able to start the game', () => {
    render(<Footer />, { wrapper: RecoilRoot });

    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });

  it('Should be able started the game', () => {
    render(<Footer />, { wrapper: RecoilRoot });

    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();

    fireEvent.click(button);

    expect(mockNavigation).toHaveBeenCalled();
    expect(mockNavigation).toHaveBeenCalledWith('/sorteio');
  });
});
