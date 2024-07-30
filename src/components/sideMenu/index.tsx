import React from 'react';
import {
  SideMenuContainer,
  SideMenuOption,
  SideMenuLink,
  MenuLink,
  MenuOption,
  SideMenuLanguage,
  MenuLanguage,
  Logo,
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCode, faD, faE, faN, faS, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Tooltip, useDisclosure } from '@chakra-ui/react';

const SideMenu = () => {
  const { onToggle } = useDisclosure()
  const githubPath = () => {
    window.location.assign('https://github.com/daniferrari1994')
  }
  const linkedinPath = () => {
    window.location.assign('https://www.linkedin.com/in/dan-ferrari/')
  }
  const mailtoPath = () => {
    window.location.assign('mailto:daniferrari1994@gmail.com')
  }

  return (
    <>
      <SideMenuContainer id='SideMenuContainer'>
        <Logo className='Logo'>
          <FontAwesomeIcon icon={faD} size='5x'/>
        </Logo>
        <SideMenuLanguage className='SideMenuLanguage'>
          <Tooltip label="Ingles" hasArrow bg='#5ad3bd' placement='right' borderRadius='5px' p='5px'>
            <MenuLanguage className='MenuLanguage'>
              <FontAwesomeIcon icon={faE} size='1x'/>
              <FontAwesomeIcon icon={faN} size='1x'/>
            </MenuLanguage>
          </Tooltip>
          <Tooltip label='Español' hasArrow bg='#5ad3bd' placement='right' borderRadius='5px' p='5px'>
            <MenuLanguage className='MenuLanguage'>
              <FontAwesomeIcon icon={faE} size='1x'/>
              <FontAwesomeIcon icon={faS} size='1x'/>
            </MenuLanguage>
          </Tooltip>
        </SideMenuLanguage>
        <SideMenuOption className='SideMenuOption'>
          <Tooltip label='Certificados' hasArrow bg='#5ad3bd' placement='right' borderRadius='5px' p='5px'>
            <MenuOption className='MenuOption'>
              <Link to="/certificates">
                <FontAwesomeIcon icon={faUserGraduate} size='2xl' onClick={onToggle}/>
              </Link>
            </MenuOption>
          </Tooltip>
          <Tooltip label='Proyectos' hasArrow bg='#5ad3bd' placement='right' borderRadius='5px' p='5px'>
            <MenuOption className='MenuOption'>
              <Link to="/projects">
                <FontAwesomeIcon icon={faCode} size='2xl'/>
              </Link>
            </MenuOption>
          </Tooltip>
        </SideMenuOption >
        <SideMenuLink className='SideMenuLink'>
          <Tooltip label='GitHub' hasArrow bg='#5ad3bd' placement='right' borderRadius='5px' p='5px'> 
            <MenuLink onClick={githubPath} className='MenuLink'>
              <FontAwesomeIcon icon={faGithub} size='lg'/>
            </MenuLink>
          </Tooltip>
          <Tooltip label='LinkedIn' hasArrow bg='#5ad3bd' placement='right' borderRadius='5px' p='5px'>
            <MenuLink onClick={linkedinPath} className='MenuLink'>
              <FontAwesomeIcon icon={faLinkedin} size='lg'/>
            </MenuLink>
          </Tooltip>
          <Tooltip label='E-Mail' hasArrow bg='#5ad3bd' placement='right' borderRadius='5px' p='5px'>
            <MenuLink onClick={mailtoPath} className='MenuLink'>
              <FontAwesomeIcon icon={faEnvelope} size='lg'/>
            </MenuLink>
          </Tooltip>
        </SideMenuLink>
      </SideMenuContainer>
    </>
  );
}

export default SideMenu;