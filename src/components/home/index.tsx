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
import ExperienceStats from '../experienceStats/experienceStats';
import image from '../../assets/profileImage/profilePicture.png';
import locales from '../../data/locales.json';

const HomeComponent = () => {
  return (
    <HomeContainer>
      <HomeContentContainer>
      <ContentContainer>
        <SubTitle>
          {locales.subtitle}
        </SubTitle>
        <HeadingText>
          {locales.title}<br />
          <span className="highlighted-text">{locales.name}</span>
        </HeadingText>
        <DescriptionText>
          {locales.description_home.english}
        </DescriptionText>
        <SocialLinks>
          <Button 
            colorScheme='teal' 
            color='#5ad3bd' 
            variant='outline' 
            gap='5px' 
            borderRadius='50px'
          >
            Download CV
            <FontAwesomeIcon icon={faDownload}/>
          </Button>
          <Link href="https://github.com/daniferrari1994" isExternal>
            <Button 
              colorScheme='teal' 
              color='#5ad3bd' 
              variant='outline' 
              borderRadius='full' 
              padding={0}
            >
              <FontAwesomeIcon 
                icon={faGithub} 
                size="lg" 
                color='#5ad3bd'
              />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/dan-ferrari/" isExternal>
            <Button 
              colorScheme='teal' 
              color='#5ad3bd' 
              variant='outline' 
              borderRadius='full' 
              padding={0}
              >
              <FontAwesomeIcon 
                icon={faLinkedin} 
                size="lg"
                color='#5ad3bd'
              />
            </Button>
          </Link>
        </SocialLinks>
      </ContentContainer>
      <ImageContainer>
        <Image
          src={image}
          className='imageProfile'
          alt="Profile Picture"
          boxSize="350px"
          boxShadow="lg"
        />
      </ImageContainer>
      </HomeContentContainer>
      <ExperienceStats />
    </HomeContainer>
  );
};

export default HomeComponent;
