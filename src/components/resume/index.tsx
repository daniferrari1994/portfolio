import React, { useState } from 'react';
import { Flex, Heading, Separator, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import DataContactList from './aboutMeList';
import InfoCard from './infoCard';
import SkillsSection from './skillsSection';
import personalData from '../../data/personalData.json';
import resumeData from '../../data/resume.json';
import { 
  ResumeContainer, 
  SectionContainer, 
  SectionOne, 
  SectionTwo, 
  StyledButton 
} from './styled';

const ResumeComponent: React.FC = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language as 'en' | 'es';
  const [selectedSection, setSelectedSection] = useState('Experience');
  const experienceData = resumeData.resume.experience;
  const educationData = resumeData.resume.education;

  const renderContent = () => {
    switch (selectedSection) {
      case 'Experience':
        return (
          <>
            <Heading className="headingResume" size="lg">
              {t('experience.title')}
            </Heading>
            <Text className="textResume" fontSize="14px">
              {t('experience.description')}
            </Text>
            <Flex className="flex-scrollable" justifyContent="space-between" wrap="wrap">
              {experienceData.map(item => (
                <InfoCard
                  date={item.translations[currentLanguage].date}
                  description={item.translations[currentLanguage].description}
                  key={item.id}
                  location={item.company}
                  title={item.translations[currentLanguage].title}
                  url={item.url}
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
            <Text className="textResume" fontSize="14px">
              {t('education.description')}
            </Text>
            <Flex wrap="wrap" className="flex-scrollable" justifyContent="space-between">
              {educationData.map(item => (
                <InfoCard
                  date={item.date}
                  description={item.translations[currentLanguage].description}
                  key={item.id}
                  location={item.institute}
                  title={item.translations[currentLanguage].title}
                  url={item.url}
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
            <Text className="textResume" fontSize="14px">
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
            <Text className="textResume" fontSize="14px">
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
          <Text className="textResume" fontSize="14px">
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
