import { useRecoilValue } from 'recoil';
import { secretFriendResultState } from '../atom';

export const useSortResult = () => {
  return useRecoilValue(secretFriendResultState);
};
