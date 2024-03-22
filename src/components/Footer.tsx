import { useParticipantsList } from '../state';
import { useNavigate } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';

export const Footer = () => {
  const navigate = useNavigate();
  const participants = useParticipantsList();

  const disabledButton = participants?.length < 3;

  const startGame = () => {
    navigate('/sorteio');
  };

  return (
    <Flex>
      <Button isDisabled={disabledButton} onClick={startGame}>
        Iniciar brincadeira!
      </Button>
    </Flex>
  );
};
