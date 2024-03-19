import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <Flex
      flex="1"
      p="7rem"
      mt="-3rem"
      boxSizing="border-box"
      backgroundColor="#FFF9EB"
      border="2px solid #000000"
      borderRadius="6rem 6rem 0 0"
      justifyContent="center"
    >
      {children}
    </Flex>
  );
};
