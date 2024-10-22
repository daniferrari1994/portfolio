import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Language, IProject } from '../../interfaces/Ilanguages';
import projectsData from '../../data/projects.json';
import {
  MainContainer,
  ProjectContent,
  ProjectImageColumn,
  ProjectInfoColumn,
  StyledButton
} from './styled';

const WorkProjects: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const currentLanguage = i18n.language as Language;
  const currentProject: IProject = projectsData.projects[currentProjectIndex];
  const currentTranslation = currentProject.translations[currentLanguage];

  const handleNextProject = () => {
    setCurrentProjectIndex(prevIndex =>
      prevIndex === projectsData.projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex(prevIndex =>
      prevIndex === 0 ? projectsData.projects.length - 1 : prevIndex - 1
    );
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
              {currentProject.id}
            </Heading>
            <Heading
              color="#ffffffea"
              fontFamily="'Roboto Mono', monospace"
              fontWeight="bold"
              mb="2"
              size="2xl"
            >
              {currentTranslation.title}
            </Heading>
            <Text
              color="#A0AEC0"
              fontFamily="'Roboto Mono', monospace"
              fontWeight="400"
              mb="4"
              minH="150px"
              w="500px"
            >
              {currentTranslation.description}
            </Text>
            <Stack spacing={2} flexDirection="row">
              {currentProject.technologies.map((tech, index) => (
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
              borderRadius="full"
              className="buttonLink"
              colorScheme="#333"
              href={currentProject.projectUrl}
              mr="4"
              padding={0}
              target="_blank"
            >
              <FontAwesomeIcon
                color="#ffffffea"
                icon={faArrowRight}
                size="lg"
              />
            </Button>
            <Button
              as="a"
              bg="#333"
              borderRadius="full"
              className="buttonLinkGithub"
              colorScheme="#333"
              href={currentProject.codeUrl}
              padding={0}
              target="_blank"
            >
              <FontAwesomeIcon
                color="#ffffffea"
                icon={faGithub}
                size="lg"
              />
            </Button>
          </Box>
        </ProjectInfoColumn>
        <ProjectImageColumn>
          <Image
            alt={currentTranslation.title}
            h="400px"
            mb="4"
            objectFit="cover"
            src={currentProject.image}
            w="600px"
          />
          <Flex alignSelf="flex-end">
            <StyledButton
              bg="#5ad3bd"
              className="buttonProject"
              colorScheme="#333"
              onClick={handlePrevProject}
              size="sm"
            >
              <FontAwesomeIcon
                color="#333"
                icon={faAngleLeft}
                size="sm"
              />
            </StyledButton>
            <StyledButton
              bg="#5ad3bd"
              className="buttonProject"
              colorScheme="#333"
              onClick={handleNextProject}
              size="sm"
            >
              <FontAwesomeIcon
                color="#333"
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
