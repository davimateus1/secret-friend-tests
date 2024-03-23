import { RecoilRoot } from 'recoil';
import { SortPage } from '../pages';
import { useParticipantsList, useSortResult } from '../state';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('../state', () => {
  return { useParticipantsList: jest.fn(), useSortResult: jest.fn() };
});

describe('Sort Page', () => {
  const result = new Map<string, string>([
    ['John Doe', 'Jane Doe'],
    ['Jane Doe', 'Foo Bar'],
    ['Foo Bar', 'John Doe'],
  ]);

  const disabledOption = ['Selecione o participante'];
  const participants = ['John Doe', 'Jane Doe', 'Foo Bar'];

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
    (useSortResult as jest.Mock).mockReturnValue(result);
  });

  it('Should be able to view the your secret friend', () => {
    render(<SortPage />, { wrapper: RecoilRoot });

    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(participants.length + disabledOption.length);
  });

  it('Should be able to show requested participant', () => {
    render(<SortPage />, { wrapper: RecoilRoot });

    const select = screen.getByTestId('select-participant');
    fireEvent.change(select, { target: { value: participants[0] } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const secretFriend = screen.getByRole('alert');
    expect(secretFriend).toBeInTheDocument();
  });
});
