import { Card } from '../components';
import Airplane from '../assets/airplane.png';

import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { useNavigate } from 'react-router-dom';
import { useParticipantsList, useSortResult } from '../state';
import { Button, Flex, Image, Select, Text } from '@chakra-ui/react';

export const SortPage = () => {
  const result = useSortResult();
  const navigate = useNavigate();
  const participants = useParticipantsList();

  const [secretFriend, setSecretFriend] = useState('');
  const [actualParticipant, setActualParticipant] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (result.has(actualParticipant)) {
      const secretFriend = result.get(actualParticipant)!;
      setSecretFriend(secretFriend);
    }
  };

  const storeResult = useCallback(() => {
    const resultObj = Object.fromEntries(result);
    const resultJSON = JSON.stringify(resultObj);

    localStorage.setItem('result', resultJSON);
  }, [result]);

  const handleChangeParticipant = (e: ChangeEvent<HTMLSelectElement>) => {
    setActualParticipant(e.target.value);
  };

  useEffect(() => {
    if (result.size) return storeResult();
    navigate('/');
  }, [result, participants, storeResult, navigate]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Flex fontSize="xl" direction="column" align="center">
          <Text
            fontWeight="bold"
            fontSize="4xl"
            textAlign="center"
            mb="3rem"
            color="brand.900"
          >
            Quem vai tirar o papelzinho?
          </Text>
          <Select
            required
            id="sortedParticipant"
            name="sortedParticipant"
            value={actualParticipant}
            onChange={handleChangeParticipant}
            w="100%"
            h="6rem"
            fontSize="2xl"
            borderRadius="4rem"
            boxSizing="border-box"
            border="2px solid black"
            data-testid="select-participant"
            boxShadow="0px 2px 0px 1px black"
            _focus={{ outline: 'none' }}
          >
            <option value="" disabled>
              Selecione o participante
            </option>
            {participants.map((participant) => (
              <option key={participant} value={participant}>
                {participant}
              </option>
            ))}
          </Select>
          <Text mt="1rem" mb="2rem" textAlign="center">
            Clique em sortear para ver quem é o seu amigo secreto!
          </Text>
          <Button
            h="6rem"
            w="70%"
            m="1rem 0"
            type="submit"
            color="white"
            bg="brand.800"
            fontSize="2xl"
            cursor="pointer"
            borderRadius="4rem"
            _hover={{ bg: 'brand.900' }}
            boxShadow="2px 2px 0px 1px black"
            _disabled={{ opacity: 0.6, cursor: 'not-allowed' }}
            id="sort-button"
          >
            Sortear
          </Button>
          <Text
            m="2rem 0"
            role="alert"
            fontSize="2xl"
            fontWeight="500"
            color="brand.800"
            textAlign="center"
            id="sort-result"
          >
            {secretFriend ? `Seu amigo secreto é: ${secretFriend}` : ''}
          </Text>
          <Flex color="brand.800" fontSize="xl" justify="center">
            <Image src={Airplane} alt="Airplane" w="11rem" />
          </Flex>
        </Flex>
      </form>
    </Card>
  );
};
