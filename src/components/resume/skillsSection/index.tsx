import React from 'react';
import { Box, Heading, Icon } from '@chakra-ui/react';
import { Tooltip } from "@/components/ui/tooltip";
import {
  faCss3Alt,
  faFigma,
  faGitAlt,
  faGitlab,
  faHtml5,
  faJira,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
  faSquareJs
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledContainer, StyledButton, StyledFlex } from './styled';

const skills = {
  "frontend development": [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'JavaScript', icon: faSquareJs },
    { name: 'React', icon: faReact },
    { name: 'Sass', icon: faSass }
  ],
  "backend development and tools": [
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Npm', icon: faNpm },
  ],
  "design": [
    { name: 'Figma', icon: faFigma }
  ],
  "version control": [
    { name: 'Git', icon: faGitAlt },
    { name: 'Gitlab', icon: faGitlab },
  ],
  "project management": [
    { name: 'Jira', icon: faJira },
  ]
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const SkillsSection: React.FC = () => {
  return (
    <StyledContainer>
      {Object.entries(skills).map(([category, skillList]) => (
        <Box key={category} mb={6}>
          <Heading
            as="h5"
            className="headingSkills"
            color="#718096"
            mb={4}
            size="md"
          >
            {capitalize(category)}
          </Heading>
          <StyledFlex>
            {skillList.map((skill) => (
              <StyledButton 
                  key={skill.name}
                  bg="#333"
                  colorScheme="#333"
                  size="lg"
                  height="100px"
                  width="120px"
                  aria-label={`Learn more about ${skill.name}`}
                >
                  <Tooltip content={skill.name} showArrow>
                    <Icon size="2xl">
                      <FontAwesomeIcon icon={skill.icon} size="2xl" />
                    </Icon>
                  </Tooltip>
              </StyledButton>
            ))}
          </StyledFlex>
        </Box>
      ))}
    </StyledContainer>
  );
};

export default SkillsSection;
