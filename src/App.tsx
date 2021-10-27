import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import Layout from './components/layout/Layout';
import ConnectButton from './components/organisms/ConnectButton';
import AccountModal from './components/organisms/AccountModal';
import '@fontsource/inter';

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
}
