import React, { useState } from 'react';
import { Flex, Heading, Text, Separator } from '@chakra-ui/react';
import { 
  ResumeContainer, 
  SectionContainer, 
  SectionOne, 
  SectionTwo, 
  StyledButton 
} from './styled';
import { useTranslation } from 'react-i18next';
import DataContactList from './aboutMeList';
import education from '../../data/education.json';
import experience from '../../data/experience.json';
import InfoCard from './infoCard';
import SkillsSection from './skillsSection';
import personalData from '../../data/personalData.json'

const ResumeComponent = () => {
  const { t } = useTranslation();
  const [selectedSection, setSelectedSection] = useState('Experience');

  const renderContent = () => {
    switch (selectedSection) {
      case 'Experience':
        return (
          <>
            <Heading className="headingResume" size="lg">
              {t('experience.title')}
            </Heading>
            <Text className="textResume">
              {t('experience.description')}
            </Text>
            <Flex className="flex-scrollable" justifyContent="space-between" wrap="wrap">
              {experience.data.map((item, index) => (
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
              {t('education.title')}
            </Heading>
            <Text className="textResume">
              {t('education.description')}
            </Text>
            <Flex wrap="wrap" className="flex-scrollable" justifyContent="space-between">
              {education.data.map((item, index) => (
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
              {t('skills.title')}
            </Heading>
            <Text className="textResume">
              {t('skills.description')}
            </Text>
            <Separator my={5} size="md" />
            <SkillsSection />
          </>
        );
      case 'About me':
        return (
          <>
            <Heading size="lg" className="headingResume">
              {t('aboutMe.title')}
            </Heading>
            <Text className="textResume">
              {t('aboutMe.description')}
            </Text>
            <Separator my={5} size="md" />
            <DataContactList data={personalData.data.aboutMe} />
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
            {t('resume.title')}
          </Heading>
          <Text className="textResume">
            {t('resume.description')}
          </Text>
          {['Experience', 'Education', 'Skills', 'About me'].map(section => {
            const translationKey = section === 'About me' ? 'aboutMe' : section.toLowerCase();
            return (
              <StyledButton
                colorScheme="#333"
                isActive={selectedSection === section}
                key={section}
                onClick={() => setSelectedSection(section)}
              >
              {t(translationKey + '.title')}
            </StyledButton>
          );
        })}
        </SectionOne>
        <SectionTwo>
          {renderContent()}
        </SectionTwo>
      </SectionContainer>
    </ResumeContainer>
  );
};

export default ResumeComponent;
