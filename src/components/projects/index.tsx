import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Heading, 
  Image, 
  Text, 
  Stack, 
  Divider,
  Flex
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  MainContainer,
  ProjectContent,
  ProjectInfoColumn,
  ProjectImageColumn,
  StyledButton
} from './styled';
import locales from "../../data/locales.json";

const WorkProjects: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = locales.projects[currentProjectIndex];

  const handlePrevProject = () => {
    setCurrentProjectIndex(prevIndex => (prevIndex === 0 ? locales.projects.length - 1 : prevIndex - 1));
  };

  const handleNextProject = () => {
    setCurrentProjectIndex(prevIndex => (prevIndex === locales.projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <MainContainer>
      <ProjectContent>
        <ProjectInfoColumn>
          <Box>
            <Heading 
              color="#ffffffea"
              fontFamily="'Bungee Hairline', sans-serif"
              fontWeight="400"
              mb="4"
              size="4xl" 
            >
              {`${currentProject.id}`}
            </Heading>
            <Heading 
              color="#ffffffea"
              fontFamily="'Roboto Mono', monospace"
              fontWeight="bold"
              mb="2"
              size="2xl"
            >
              {currentProject.title}
            </Heading>
            <Text 
              color="#A0AEC0"
              fontFamily="'Roboto Mono', monospace"
              fontWeight="400"
              mb="4"
              minH="150px"
              w="500px"
            >
              {currentProject.description}
            </Text>
            <Stack spacing={2} flexDirection="row">
              {currentProject.technologies.map((tech, index ) => (
                <Text 
                  color="#5ad3bd"
                  fontFamily="'Roboto Mono', monospace"
                  fontWeight="bold"
                  fontSize="sm" 
                  key={index} 
                >
                  {tech}
                </Text>
              ))}
            </Stack>
          </Box>
          <Divider w="500px" />
          <Box>
            <Button 
              as="a" 
              bg="#333"
              borderRadius='full'
              className='buttonLink'
              colorScheme="#333"
              href={currentProject.projectUrl} 
              mr="4"
              padding={0}
              target="_blank" 
            >
              <FontAwesomeIcon 
                color='#ffffffea' 
                icon={faArrowRight}
                size="lg" 
              />
            </Button>
            <Button 
              as="a" 
              bg="#333"
              borderRadius='full'
              className='buttonLinkGithub'
              colorScheme="#333"
              href={currentProject.codeUrl} 
              padding={0}
              target="_blank" 
            >
              <FontAwesomeIcon 
                color='#ffffffea'
                icon={faGithub} 
                size="lg" 
              />
            </Button>
          </Box>
        </ProjectInfoColumn>
        <ProjectImageColumn>
          <Image 
            alt={currentProject.title} 
            h="400px"
            mb="4" 
            objectFit="cover" 
            src={currentProject.image} 
            w="600px"
          />
          <Flex alignSelf="flex-end">
            <StyledButton 
              bg="#5ad3bd"
              className='buttonProject'
              colorScheme="#333"
              onClick={handlePrevProject}
              size="sm"
            >
              <FontAwesomeIcon 
                color='#333' 
                icon={faAngleLeft}
                size="sm" 
              />
            </StyledButton>
            <StyledButton 
              bg="#5ad3bd"
              className='buttonProject'
              colorScheme="#333"
              onClick={handleNextProject}
              size="sm"
            >
              <FontAwesomeIcon 
                color='#333' 
                icon={faAngleRight}
                size="sm" 
              />
            </StyledButton>
          </Flex>
        </ProjectImageColumn>
      </ProjectContent>
    </MainContainer>
  );
};

export default WorkProjects;
