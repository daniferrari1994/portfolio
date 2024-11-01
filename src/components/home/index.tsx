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
import ExperienceStats from '../experienceStats/experienceStats';
import image from '../../assets/profileImage/profilePicture.png';
import personalData from '../../data/personalData.json'
import i18next from 'i18next';

const HomeComponent: React.FC = () => {
  const { t } = useTranslation();

  const handleDownload = () => {
    const currentLanguage = i18next.language;
    const pdfUrl = currentLanguage === 'en' 
      ? '/pdf/cvDanFerrariEngOP.pdf' 
      : '/pdf/cvDanFerrariEngOP.pdf';

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = currentLanguage === 'en' 
      ? "cvDanFerrariEngOP.pdf" 
      : "cvDanFerrariEspOP.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HomeContainer>
      <HomeContentContainer>
      <ContentContainer>
        <SubTitle>
          {t('home.subtitle')}
        </SubTitle>
        <HeadingText>
          {t('home.title')}<br />
          <span className="highlighted-text">{personalData.data.name}</span>
        </HeadingText>
        <DescriptionText>
          {t('home.description')}
        </DescriptionText>
        <SocialLinks>
          <Button
            borderRadius="50px"
            color="#5ad3bd"
            colorScheme="#333"
            gap="5px"
            onClick={handleDownload}
            variant="outline"
            _hover={{ bg: '#459c8c', color: '#333' }}
          >
            {t('home.downloadCV')}
            <FontAwesomeIcon icon={faDownload}/>
          </Button>
          <Link href="https://github.com/daniferrari1994" target="_blank">
            <Button
              borderRadius="full"
              color="#5ad3bd"
              colorScheme="#333"
              padding={0}
              variant="outline"
              _hover={{ bg: '#1b3d37' }}
            >
              <FontAwesomeIcon
                color="#5ad3bd"
                icon={faGithub}
                size="lg"
              />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/dan-ferrari/" target="_blank">
            <Button
              borderRadius="full"
              color="#5ad3bd"
              colorScheme="#333"
              padding={0}
              variant="outline"
              _hover={{ bg: '#1b3d37' }}
              >
              <FontAwesomeIcon
                color="#5ad3bd"
                icon={faLinkedin}
                size="lg"
              />
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
          src={image}
        />
      </ImageContainer>
      </HomeContentContainer>
      <ExperienceStats />
    </HomeContainer>
  );
};

export default HomeComponent;
