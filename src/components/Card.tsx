import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
} & FlexProps;

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <Flex
      flex="1"
      p="7rem"
      w="100%"
      mt={{ base: '-1.9rem', md: '-2.3rem' }}
      boxSizing="border-box"
      backgroundColor="brand.700"
      border="2px solid black"
      borderRadius="6rem 6rem 0 0"
      justifyContent="center"
      {...props}
    >
      {children}
    </Flex>
  );
};
