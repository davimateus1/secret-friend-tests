import shuffle from 'just-shuffle';

export const makeSort = (participants: string[]) => {
  const participantsLength = participants.length;
  const shuffleParticipants = shuffle(participants);
  const result = new Map<string, string>();

  participants.forEach((_, index) => {
    const friendIndex = index === participantsLength - 1 ? 0 : index + 1;
    result.set(shuffleParticipants[index], shuffleParticipants[friendIndex]);
  });

  return result;
};
