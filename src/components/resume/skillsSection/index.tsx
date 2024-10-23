import React from 'react';
import { Box, Heading, Icon } from '@chakra-ui/react';
import { Tooltip } from "@/components/ui/tooltip"
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

const SkillsSection = () => {
  const skills = {
    "Frontend development": [
      { name: 'HTML5', icon: faHtml5 },
      { name: 'CSS3', icon: faCss3Alt },
      { name: 'JavaScript', icon: faSquareJs },
      { name: 'React', icon: faReact },
      { name: 'Sass', icon: faSass }
    ],
    "Backend development and tools": [
      { name: 'Node.js', icon: faNodeJs },
      { name: 'Npm', icon: faNpm },
    ],
    "Design": [
      { name: 'Figma', icon: faFigma }
    ],
    "Version control": [
      { name: 'Git', icon: faGitAlt },
      { name: 'Gitlab', icon: faGitlab },
    ],
    "Project management": [
      { name: 'Jira', icon: faJira },
    ]
  };

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
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Heading>
          <StyledFlex>
            {skillList.map((skill, index) => (
              <StyledButton 
                  key={index}
                  bg="#333"
                  colorScheme="#333"
                  size="lg"
                  height="100px"
                  width="120px"
                >
                  <Tooltip key={index} content={skill.name} showArrow>
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
