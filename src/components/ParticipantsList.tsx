import { useParticipantsList } from '../state';
import { ListItem, UnorderedList } from '@chakra-ui/react';

export const ParticipantsList = () => {
  const participants = useParticipantsList();

  return (
    <UnorderedList>
      {participants.map((participant) => (
        <ListItem key={participant}>{participant}</ListItem>
      ))}
    </UnorderedList>
  );
};
