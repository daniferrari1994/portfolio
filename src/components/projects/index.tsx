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
import React from 'react';

const ProjectsComponent = () => {
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
            src='https://i.pinimg.com/originals/e8/f1/85/e8f185f1f410690ab9d14a2984b7e383.jpg'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='lg' color='#b1adad'>First Project</Heading>
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

export default ProjectsComponent;