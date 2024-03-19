import { atom } from 'recoil';

export const participantListState = atom<string[]>({
  key: 'participantListState',
  default: [],
});

export const participantErrorState = atom<string>({
  key: 'participantErrorState',
  default: '',
});
