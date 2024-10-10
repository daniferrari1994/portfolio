import React from 'react';
import { 
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';

const ResumeComponent = () => {
  return (
    <Box
      display='flex' 
      justifyContent='center' 
      alignItems='center' 
      h='100vh'
    >
      <Card maxW='lg' boxShadow='lg' bg='rgba(255, 255, 255, 0.1)' backdropFilter='blur(10px)' p='20px' borderRadius='10px'>
        <CardBody>
          <Image
            src='https://wallpapersmug.com/download/1920x1080/58d87a/cyberpunk-game-city-shot.jpg'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='lg' color='#b1adad'>Certificates</Heading>
            <Text color='#b1adad'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga ducimus veniam et.
              Quibusdam expedita eligendi maxime quisquam quo temporibus nesciunt architecto quod 
              minima consectetur recusandae, repellat ipsa quis laborum!
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' color='#5ad3bd'>
              Enter
            </Button>
            <Button variant='ghost' color='#5ad3bd'>
              Enter
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ResumeComponent;