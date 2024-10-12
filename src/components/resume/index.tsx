import React, { useState } from 'react';
import { Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { 
  ResumeContainer, 
  SectionContainer, 
  SectionOne, 
  SectionTwo, 
  StyledButton 
} from './styled';
import InfoCard from './infoCard';
import locales from '../../data/locales.json';
import DataContactList from './aboutMeList';
import SkillsSection from './skillsSection';

const ResumeComponent = () => {
  const [selectedSection, setSelectedSection] = useState('Experience');

  const renderContent = () => {
    switch (selectedSection) {
      case 'Experience':
        return (
          <>
            <Heading className="headingResume" size="lg">
              {locales.resume.sections.experience.title}
            </Heading>
            <Text className="textResume">
              {locales.resume.sections.experience.description}
            </Text>
            <Flex className="flex-scrollable" justifyContent="space-between" wrap="wrap">
                {locales.resume.sections.experience.data.map((item, index) => (
                <InfoCard
                  date={item.date}
                  key={index}
                  location={item.workPlace}
                  title={item.title}
                />
              ))}
            </Flex>
          </>
        );
        case 'Education':
          return (
            <>
              <Heading size="lg" className="headingResume">
                {locales.resume.sections.education.title}
              </Heading>
              <Text className="textResume">
                {locales.resume.sections.education.description}
              </Text>
              <Flex wrap="wrap" className="flex-scrollable" justifyContent="space-between">
                {locales.resume.sections.education.data.map((item, index) => (
                <InfoCard
                  date={item.date}
                  key={index}
                  location={item.institute}
                  title={item.title}
                />
                ))}
              </Flex>
            </>
          );
      case 'Skills':
        return (
          <>
            <Heading size="lg" className="headingResume">
              {locales.resume.sections.skills.title}
            </Heading>
            <Text className="textResume">
              {locales.resume.sections.skills.description}
            </Text>
            <Divider my={5}/>
            <SkillsSection />
          </>
        );
        case 'About me':
          return (
            <>
              <Heading size="lg" className="headingResume">
                {locales.resume.sections.aboutMe.title}
              </Heading>
              <Text className="textResume">
                {locales.resume.sections.aboutMe.description}
              </Text>
              <Divider my={5}/>
              <DataContactList data={locales.resume.sections.aboutMe.data} />
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
          <Heading size="2xl" className="headingResume">
            {locales.resume.title}
          </Heading>
          <Text className="textResume">
            {locales.resume.description}
          </Text>
          {['Experience', 'Education', 'Skills', 'About me'].map(section => (
            <StyledButton
              colorScheme="#333"
              isActive={selectedSection === section}
              key={section}
              onClick={() => setSelectedSection(section)}
            >
              {section}
            </StyledButton>
          ))}
        </SectionOne>
        <SectionTwo>
          {renderContent()}
        </SectionTwo>
      </SectionContainer>
    </ResumeContainer>
  );
};

export default ResumeComponent;
