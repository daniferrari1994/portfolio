import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Separator,
  Stack,
  Text
} from '@chakra-ui/react';
import { Tooltip } from "@/components/ui/tooltip";
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
  const { i18n, t } = useTranslation();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const currentLanguage = i18n.language as Language;
  const { id, translations, technologies, url, codeUrl, image }: IProject = projectsData.projects[currentProjectIndex];
  const currentTranslation = translations[currentLanguage];

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.projects.length);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectsData.projects.length) % projectsData.projects.length);
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
              size="6xl"
            >
              {id}
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
            <Stack flexDirection="row">
              {technologies.map((tech, index) => (
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
          <Separator size="md" w="500px" />
          <Box>
            <Tooltip content={t('projects.tooltip.livePage')}>
              <Button
                bg="#333"
                borderRadius="full"
                className="buttonLink"
                colorScheme="#333"
                mr="4"
                padding={0}
                aria-label={t('projects.tooltip.livePage')}
              >
                <Link href={url} target="_blank">
                  <FontAwesomeIcon color="#ffffffea" icon={faArrowRight} size="lg" />
                </Link>
              </Button>
            </Tooltip>
            <Tooltip content={t('projects.tooltip.github')}>
              <Button
                bg="#333"
                borderRadius="full"
                className="buttonLinkGithub"
                colorScheme="#333"
                mr="4"
                padding={0}
                aria-label={t('projects.tooltip.github')}
              >
                <Link href={codeUrl} target="_blank">
                  <FontAwesomeIcon color="#ffffffea" icon={faGithub} size="lg" />
                </Link>
              </Button>
            </Tooltip>
          </Box>
        </ProjectInfoColumn>
        <ProjectImageColumn>
          <Image
            alt={currentTranslation.title}
            h="400px"
            m="28px 28px 28px 0"
            objectFit="cover"
            src={image}
            w="600px"
          />
          <Flex alignSelf="flex-end">
            <StyledButton
              bg="#5ad3bd"
              className="buttonProject"
              colorScheme="#333"
              onClick={handlePrevProject}
              size="sm"
              aria-label="Previous project"
            >
              <FontAwesomeIcon color="#333" icon={faAngleLeft} size="sm" />
            </StyledButton>
            <StyledButton
              bg="#5ad3bd"
              className="buttonProject"
              colorScheme="#333"
              onClick={handleNextProject}
              size="sm"
              aria-label="Next project"
            >
              <FontAwesomeIcon color="#333" icon={faAngleRight} size="sm" />
            </StyledButton>
          </Flex>
        </ProjectImageColumn>
      </ProjectContent>
    </MainContainer>
  );
};

export default WorkProjects;
