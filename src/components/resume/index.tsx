import React, { useState } from 'react';
import { Button,Heading, HStack, Text } from '@chakra-ui/react';
import { ResumeContainer, SectionContainer, SectionOne, SectionTwo, StyledButton } from './styled';

const ResumeComponent = () => {
  const [selectedSection, setSelectedSection] = useState('Experience');

  const renderContent = () => {
    switch (selectedSection) {
      case 'Experience':
        return (
          <>
            <Heading size="md" className='headingResume'>Experience</Heading>
            <Text className='textResume'>Here is the description of your experience.</Text>
            <HStack spacing={4}>
              <Text className='textResume'>Job 1</Text>
              <Text className='textResume'>Job 2</Text>
            </HStack>
          </>
        );
      case 'Education':
        return (
          <>
            <Heading size="md" className='headingResume'>Education</Heading>
            <Text className='textResume'>Details about your education.</Text>
            <HStack spacing={4}>
              <Text className='textResume'>School 1</Text>
              <Text className='textResume'>School 2</Text>
            </HStack>
          </>
        );
      case 'Skills':
        return (
          <>
            <Heading size="md" className='headingResume'>Skills</Heading>
            <Text className='textResume'>Your skills listed here.</Text>
            <HStack spacing={4}>
              <Text className='textResume'>Skill 1</Text>
              <Text className='textResume'>Skill 2</Text>
            </HStack>
          </>
        );
      case 'About me':
        return (
          <>
            <Heading size="md" className='headingResume'>About Me</Heading>
            <Text className='textResume'>Brief information about you.</Text>
            <HStack spacing={4}>
              <Text className='textResume'>Detail 1</Text>
              <Text className='textResume'>Detail 2</Text>
            </HStack>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ResumeContainer>
      <SectionContainer>
        <SectionOne>
          <Heading size="lg" className='headingResume'>Resume</Heading>
          <Text className='textResume'>Here is a brief description of your professional background.</Text>
          {['Experience', 'Education', 'Skills', 'About me'].map((section) => ( 
            <StyledButton
              key={section}
              isActive={selectedSection === section}
              onClick={() => setSelectedSection(section)}
            >
            {section}
          </StyledButton>
        ))}
        </SectionOne>
        <SectionTwo>{renderContent()}</SectionTwo>
      </SectionContainer>
    </ResumeContainer>
  );
};

export default ResumeComponent;
