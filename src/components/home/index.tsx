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

const HomeComponent = () => {
  const { t } = useTranslation();
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
            variant="outline"
            _hover={{ bg: '#459c8c', color: '#333' }}
          >
            {t('home.downloadCV')}
            <FontAwesomeIcon icon={faDownload}/>
          </Button>
          <Link href="https://github.com/daniferrari1994" isExternal>
            <Button
              borderRadius="full"
              color="#5ad3bd"
              colorScheme="#333"
              padding={0}
              variant="outline"
              _hover={{ bg: '#459c8c', color: '#333' }}
            >
              <FontAwesomeIcon
                color="#5ad3bd"
                icon={faGithub}
                size="lg"
              />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/dan-ferrari/" isExternal>
            <Button
              borderRadius="full"
              color="#5ad3bd"
              colorScheme="#333"
              padding={0}
              variant="outline"
              _hover={{ bg: '#459c8c', color: '#333' }}
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
