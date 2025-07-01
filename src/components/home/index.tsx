import React from 'react';
import { Button, Image, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ImageContainer } from './imageStyled/styled';
import {
  ContentContainer,
  DescriptionText,
  HeadingText,
  HomeContainer,
  HomeContentContainer,
  SocialLinks,
  SubTitle,
} from './styled';
import { useTranslation } from 'react-i18next';
import ExperienceStats from '../experienceStats';
import image from '../../assets/profileImage/profilePicture.png';
import personalData from '../../data/personalData.json';
import i18next from 'i18next';

const HomeComponent: React.FC = () => {
  const { t } = useTranslation();

  const handleDownload = () => {
    const currentLanguage = i18next.language;
    const pdfUrl = '/pdf/cvDanFerrariEngOP.pdf';
    const fileName = currentLanguage === 'en' 
      ? "cvDanFerrariEngOP.pdf" 
      : "cvDanFerrariEspOP.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <HomeContainer>
      <HomeContentContainer>
        <ContentContainer>
          <SubTitle>{t('home.subtitle')}</SubTitle>
          <HeadingText data-testid="home-title">
            {t('home.title')}<br />
            <span className="highlighted-text">{personalData.data.name}</span>
          </HeadingText>
          <DescriptionText>{t('home.description')}</DescriptionText>
          <SocialLinks>
            <Button
              borderRadius="50px"
              color="#5ad3bd"
              colorScheme="gray"
              data-testid="btn-download-cv"
              gap="5px"
              onClick={handleDownload}
              variant="outline"
              _hover={{ bg: '#459c8c', color: '#333' }}
            >
              {t('home.downloadCV')}
              <FontAwesomeIcon icon={faDownload} />
            </Button>
            <Link data-testid="link-github" href="https://github.com/daniferrari1994" target="_blank" rel="noopener noreferrer">
              <Button
                borderRadius="full"
                color="#5ad3bd"
                colorScheme="gray"
                padding={0}
                variant="outline"
                _hover={{ bg: '#1b3d37' }}
              >
                <FontAwesomeIcon color="#5ad3bd" icon={faGithub} size="lg" />
              </Button>
            </Link>
            <Link data-testid="link-linkedin" href="https://www.linkedin.com/in/dan-ferrari/" target="_blank" rel="noopener noreferrer">
              <Button
                borderRadius="full"
                color="#5ad3bd"
                colorScheme="gray"
                padding={0}
                variant="outline"
                _hover={{ bg: '#1b3d37' }}
              >
                <FontAwesomeIcon color="#5ad3bd" icon={faLinkedin} size="lg" />
              </Button>
            </Link>
          </SocialLinks>
        </ContentContainer>
        <ImageContainer>
          <Image
            alt="Profile Picture"
            boxShadow="lg"
            boxSize="350px"
            className="imageProfile"
            data-testid="profile-image"
            src={image}
          />
        </ImageContainer>
      </HomeContentContainer>
      <ExperienceStats />
    </HomeContainer>
  );
};

export default HomeComponent;
