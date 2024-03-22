import { Flex, Text } from '@chakra-ui/react';
import { Card, Footer, ParticipantsList, UserForm } from '../components';

export const ConfigurationPage = () => {
  return (
    <Card>
      <Flex direction="column" w="100%">
        <Text
          fontWeight="bold"
          fontSize="4xl"
          textAlign="center"
          mb="3rem"
          color="#4B69FD"
        >
          Vamos começar!
        </Text>
        <UserForm />
        <ParticipantsList />
        <Footer />
      </Flex>
    </Card>
  );
};
