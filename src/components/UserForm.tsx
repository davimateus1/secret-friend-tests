import { ChangeEvent, useRef, useState } from 'react';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { useAddParticipant, useErrorMessage } from '../state';

export const UserForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [participantName, setParticipantName] = useState('');

  const { errorMessage } = useErrorMessage();
  const { addParticipant } = useAddParticipant();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParticipantName(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addParticipant(participantName);
    setParticipantName('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        mb="3rem"
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
      >
        <Input
          ref={inputRef}
          value={participantName}
          onChange={handleChange}
          placeholder="Insira os nomes dos participantes"
          h="6rem"
          w="100%"
          boxSizing="border-box"
          _focus={{ outline: 'none' }}
          pl={{ base: '1rem', md: '3rem' }}
          boxShadow="0px 2px 0px 1px black;"
          fontSize={{ base: 'sm', md: '2xl' }}
          display={{ base: 'block', md: 'flex' }}
          borderRadius={{ base: '4rem', md: '4rem 0 0 4rem' }}
          mb={{ base: '1rem', md: '0' }}
          id="add-participant-input"
        />
        <Button
          type="submit"
          isDisabled={!participantName}
          h="6rem"
          w={{ base: '60%', md: '30%' }}
          boxSizing="border-box"
          border="2px solid black"
          fontSize="2xl"
          color="black"
          boxShadow="2px 2px 0px 1px black"
          cursor="pointer"
          bg="brand.600"
          _hover={{ opacity: 0.8 }}
          _disabled={{ opacity: 0.6, cursor: 'not-allowed' }}
          borderRadius={{ base: '4rem', md: '0 4rem 4rem 0' }}
          id="add-participant-button"
        >
          Adicionar
        </Button>
      </Flex>
      {errorMessage && (
        <Text
          role="alert"
          color="brand.300"
          bg="brand.500"
          p="1rem"
          borderRadius="md"
          border="1px solid brand.400"
          id="error-message"
          m={{ base: '4rem 0', md: '0' }}
        >
          {errorMessage}
        </Text>
      )}
    </form>
  );
};
