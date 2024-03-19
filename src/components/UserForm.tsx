import { useAddParticipant, useErrorMessage } from '../state';
import { Button, Input, Text } from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';

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
      <Input
        ref={inputRef}
        value={participantName}
        onChange={handleChange}
        placeholder="Insira os nomes dos participantes"
      />
      <Button type="submit" isDisabled={!participantName}>
        Adicionar participante
      </Button>
      {errorMessage && <Text role="alert">{errorMessage}</Text>}
    </form>
  );
};
