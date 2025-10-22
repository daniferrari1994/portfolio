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
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Tooltip } from "@/components/ui/tooltip";
import projectsData from '../../data/projects.json';
import type { IProject, Language } from '../../interfaces/Ilanguages';
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
    setCurrentProjectIndex(prevIndex => (prevIndex + 1) % projectsData.projects.length);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex(prevIndex => (prevIndex - 1 + projectsData.projects.length) % projectsData.projects.length);
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
              size={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              {id}
            </Heading>
            <Heading
              color="#ffffffea"
              fontFamily="'Roboto Mono', monospace"
              fontWeight="bold"
              mb="2"
              size={{ base: "lg", sm: "xl", md: "2xl" }}
            >
              {currentTranslation.title}
            </Heading>
            <Text
              color="#A0AEC0"
              fontFamily="'Roboto Mono', monospace"
              fontWeight="400"
              mb="4"
              minH={{ base: "auto", md: "150px" }}
              w={{ base: "100%", md: "500px" }}
              fontSize={{ base: "sm", md: "md" }}
            >
              {currentTranslation.description}
            </Text>
            <Stack 
              flexDirection={{ base: "column", sm: "row" }}
              flexWrap="wrap"
              justify={{ base: "center", md: "flex-start" }}
              align={{ base: "center", md: "flex-start" }}
              gap={{ base: 2, md: 4 }}
            >
              {technologies.map((tech, index) => (
                <Text
                  color="#5ad3bd"
                  fontFamily="'Roboto Mono', monospace"
                  fontWeight="bold"
                  fontSize={{ base: "xs", md: "sm" }}
                  key={index}
                >
                  {tech}
                </Text>
              ))}
            </Stack>
          </Box>
          <Separator 
            size="md" 
            w={{ base: "100%", md: "500px" }}
            my={{ base: 4, md: 6 }}
          />
          <Flex 
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={{ base: 2, md: 0 }}
          >
            <Tooltip content={t('projects.tooltip.livePage')}>
              <Button
                bg="#333"
                borderRadius="full"
                className="buttonLink"
                colorScheme="#333"
                mr={{ base: "0", md: "4" }}
                mb={{ base: "2", md: "0" }}
                padding={{ base: "8px 12px", md: "0" }}
                size={{ base: "sm", md: "md" }}
                aria-label={t('projects.tooltip.livePage')}
                display="flex"
                alignItems="center"
                gap={2}
              >
                <Link href={url} target="_blank" display="flex" alignItems="center" gap={2}>
                  <FontAwesomeIcon 
                    color="#ffffffea" 
                    icon={faArrowRight} 
                    size={{ base: "sm", md: "lg" } as any}
                  />
                  <Text 
                    display={{ base: "inline", md: "none" }} 
                    color="#ffffffea"
                    fontSize="xs"
                    fontFamily="'Roboto Mono', monospace"
                  >
                    {t('projects.liveProject')}
                  </Text>
                </Link>
              </Button>
            </Tooltip>
            <Tooltip content={t('projects.tooltip.github')}>
              <Button
                bg="#333"
                borderRadius="full"
                className="buttonLinkGithub"
                colorScheme="#333"
                mr={{ base: "0", md: "4" }}
                padding={{ base: "8px 12px", md: "0" }}
                size={{ base: "sm", md: "md" }}
                aria-label={t('projects.tooltip.github')}
                display="flex"
                alignItems="center"
                gap={2}
              >
                <Link href={codeUrl} target="_blank" display="flex" alignItems="center" gap={2}>
                  <FontAwesomeIcon 
                    color="#ffffffea" 
                    icon={faGithub} 
                    size={{ base: "sm", md: "lg" } as any}
                  />
                  <Text 
                    display={{ base: "inline", md: "none" }} 
                    color="#ffffffea"
                    fontSize="xs"
                    fontFamily="'Roboto Mono', monospace"
                  >
                    {t('projects.viewCode')}
                  </Text>
                </Link>
              </Button>
            </Tooltip>
          </Flex>
        </ProjectInfoColumn>
        <ProjectImageColumn>
          <Image
            alt={currentTranslation.title}
            h={{ base: "250px", sm: "300px", md: "350px", lg: "400px" }}
            m={{ base: "20px 0", md: "28px 28px 28px 0" }}
            objectFit="cover"
            src={image}
            w={{ base: "100%", sm: "450px", md: "550px", lg: "600px" }}
            maxW="100%"
            borderRadius={{ base: "md", md: "none" }}
          />
          <Flex 
            alignSelf={{ base: "center", md: "flex-end" }}
            mt={{ base: 4, md: 0 }}
          >
            <StyledButton
              bg="#5ad3bd"
              className="buttonProject"
              colorScheme="#333"
              onClick={handlePrevProject}
              size={{ base: "sm", md: "sm" }}
              aria-label="Previous project"
            >
              <FontAwesomeIcon color="#333" icon={faAngleLeft} size="sm" />
            </StyledButton>
            <StyledButton
              bg="#5ad3bd"
              className="buttonProject"
              colorScheme="#333"
              onClick={handleNextProject}
              size={{ base: "sm", md: "sm" }}
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
