import Logo from '../assets/logo.png';
import SmallLogo from '../assets/small-logo.png';
import Participant from '../assets/participant.png';

import { Flex, Image } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      pt={{ base: '4rem', md: '8rem' }}
      align="center"
      bg="brand.900"
      justify={{ base: 'center', md: 'space-around' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex
        width={{ base: '18rem', md: '30rem' }}
        height={{ base: '15rem', md: '15rem' }}
        bgPos="center"
        bgImage={{ base: SmallLogo, md: Logo }}
        bgRepeat={{ base: 'no-repeat', md: 'no-repeat' }}
      />
      <Image
        src={Participant}
        zIndex={1}
        width={{ base: '20rem', md: '27rem' }}
        height={{ base: '15rem', md: '20rem' }}
      />
    </Flex>
  );
};
