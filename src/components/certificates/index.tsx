import React from 'react';
import { Box, Center, Slide, Text } from '@chakra-ui/react';

interface ICertificatesProps {
  isOpen: boolean;
}

const CertificatesComponent: React.FC<ICertificatesProps> = ({ isOpen }) => {
  return (
    <Box>
      <Center>
        <Slide in={isOpen}>
          <Box className='certificatesBox'
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
            >
            <Text color='white'>Certificados</Text>
          </Box>
        </Slide>
      </Center>
    </Box>
  );
};

export default CertificatesComponent;