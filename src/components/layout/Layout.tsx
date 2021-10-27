import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/layout';

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Flex
      flexDirection='column'
      alignItems='flex-end'
      justifyContent='top'
      h='100vh'
      bgGradient='linear(to-b, gray.800, #FF0080)'
    >
      {children}
    </Flex>
  );
}
