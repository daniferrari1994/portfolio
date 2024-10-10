import React from 'react';
import { Button, Image, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {
  HomeContainer,
  ImageContainer,
  ContentContainer,
  SubTitle,
  HeadingText,
  DescriptionText,
  SocialLinks,
} from './styled';
import locales from '../../data/locales.json';
import image from '../../assets/profileImage/profilePicture.jpg';

const HomeComponent = () => {
  return (
    <HomeContainer>
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
          <Button colorScheme='teal' color='#5ad3bd' variant='outline' gap='5px'>
            Download cv
            <FontAwesomeIcon icon={faDownload}/>
          </Button>
          <Link href="https://github.com/daniferrari1994" isExternal>
            <FontAwesomeIcon icon={faGithub} size="lg" color='#5ad3bd' />
          </Link>
          <Link href="https://www.linkedin.com/in/dan-ferrari/" isExternal>
            <FontAwesomeIcon icon={faLinkedin} size="lg" color='#5ad3bd' />
          </Link>
          <Link href="mailto:daniferrari1994@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="lg" color='#5ad3bd' />
          </Link>
        </SocialLinks>
      </ContentContainer>
      <ImageContainer>
        <Image
          src={image}
          alt="Profile Picture"
          boxSize="350px"
          objectFit="cover"
          borderRadius="full"
          boxShadow="lg"
        />
      </ImageContainer>
    </HomeContainer>
  );
};

export default HomeComponent;
