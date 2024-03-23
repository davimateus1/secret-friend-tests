import { makeSort } from '../helpers';
import { useSetRecoilState } from 'recoil';
import { secretFriendResultState } from '../atom';
import { useParticipantsList } from './useParticipantsList';

export const useSort = () => {
  const participants = useParticipantsList();
  const setResult = useSetRecoilState(secretFriendResultState);

  return () => {
    const result = makeSort(participants);
    setResult(result);
  };
};
