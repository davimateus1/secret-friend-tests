import { Button, Input } from '@chakra-ui/react';

export const UserForm = () => {
  return (
    <form>
      <Input placeholder="Insira os nomes dos participantes" />
      <Button type="submit" isDisabled>
        Adicionar participante
      </Button>
    </form>
  );
};
