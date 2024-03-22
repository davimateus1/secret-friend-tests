import { RecoilRoot } from 'recoil';
import { useParticipantsList } from '../state';
import { ParticipantsList } from '../components';
import { render, screen } from '@testing-library/react';

jest.mock('../state', () => {
  return { useParticipantsList: jest.fn() };
});

describe('Participants List Empty', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

  it('Should be able ro render empty participants list', () => {
    render(<ParticipantsList />, { wrapper: RecoilRoot });

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(0);
  });
});


