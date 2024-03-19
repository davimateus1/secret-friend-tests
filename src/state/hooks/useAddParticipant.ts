import { useRecoilValue, useSetRecoilState } from 'recoil';
import { participantErrorState, participantListState } from '../atom';

export const useAddParticipant = () => {
  const participantsList = useRecoilValue(participantListState);
  const setErrorMessage = useSetRecoilState(participantErrorState);
  const setParticipantsList = useSetRecoilState(participantListState);

  const addParticipant = (participantName: string) => {
    if (participantsList.includes(participantName)) {
      setErrorMessage('Nomes duplicados não são permitidos!');
      return setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
    setParticipantsList((oldList) => [...oldList, participantName]);
  };

  return { addParticipant };
};
