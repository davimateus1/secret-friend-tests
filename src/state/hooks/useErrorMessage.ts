import { useRecoilValue } from 'recoil';
import { participantErrorState } from '../atom';

export const useErrorMessage = () => {
  const errorMessage = useRecoilValue(participantErrorState);
  return { errorMessage };
};
