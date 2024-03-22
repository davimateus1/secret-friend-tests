import { useRecoilValue } from 'recoil';
import { participantListState } from '../atom';

export const useParticipantsList = () => {
  const participants = useRecoilValue(participantListState);
  return participants;
};
