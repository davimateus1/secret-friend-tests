import { useParticipantsList } from '../state';
import { ListItem, UnorderedList } from '@chakra-ui/react';

export const ParticipantsList = () => {
  const participants = useParticipantsList();

  return (
    <UnorderedList
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      {participants.map((participant) => (
        <ListItem key={participant} listStyleType="none">
          {participant}
        </ListItem>
      ))}
    </UnorderedList>
  );
};
