import Bags from '../assets/bags.png';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Image } from '@chakra-ui/react';
import { useParticipantsList, useSort } from '../state';

export const Footer = () => {
  const sort = useSort();
  const navigate = useNavigate();

  const participants = useParticipantsList();
  const disabledButton = participants?.length < 3;

  const startGame = () => {
    sort();
    navigate('/sorteio');
  };

  return (
    <Flex
      align="center"
      justify="space-evenly"
      direction={{ base: 'column', md: 'row' }}
    >
      <Button
        onClick={startGame}
        isDisabled={disabledButton}
        h="6rem"
        bg="brand.800"
        color="white"
        cursor="pointer"
        fontSize="2xl"
        borderRadius="4rem"
        _hover={{ bg: 'brand.900' }}
        m={{ base: '2rem 0', md: '0' }}
        boxShadow="2px 2px 0px 1px black"
        w={{ base: '21rem', md: '30rem' }}
        _disabled={{ opacity: 0.6, cursor: 'not-allowed' }}
        id="start-button"
      >
        Iniciar brincadeira!
      </Button>
      <Image src={Bags} alt="Bags" />
    </Flex>
  );
};
