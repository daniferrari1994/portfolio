import React from 'react';
import {
  MenuContainer,
  MenuOptionContainer,
  MenuLinkContainer,
  MenuLink,
  MenuOption,
  Logo,
  MenuItemsContainer,
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faA, faCode, faD, faE, faHome, faN, faS, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Tooltip, useDisclosure } from '@chakra-ui/react';

const Menu = () => {
  const { onToggle } = useDisclosure();
  const githubPath = () => {
    window.location.assign('https://github.com/daniferrari1994');
  };
  const linkedinPath = () => {
    window.location.assign('https://www.linkedin.com/in/dan-ferrari/');
  };
  const mailtoPath = () => {
    window.location.assign('mailto:daniferrari1994@gmail.com');
  };

  return (
    <MenuContainer id='MenuContainer'>
      <Logo className='Logo'>
        <FontAwesomeIcon icon={faD} size='2x' />
      </Logo>
      <MenuItemsContainer>
        <MenuOptionContainer className='SideMenuOption'>
        <Tooltip label='home' hasArrow bg='teal.300' color='gray.900' placement='bottom' borderRadius='5px' p='5px'>
            <MenuOption className='MenuOption'>
              <Link to="/">
                <label>Home</label>
                {/* <FontAwesomeIcon icon={faHome} size='xl' /> */}
              </Link>
            </MenuOption>
          </Tooltip>
          <Tooltip label='Certificados' hasArrow bg='teal.300' color='gray.900' placement='bottom' borderRadius='5px' p='5px'>
            <MenuOption className='MenuOption'>
              <Link to="/certificates">
                <label>Resume</label>
                {/* <FontAwesomeIcon icon={faUserGraduate} size='xl' onClick={onToggle} /> */}
              </Link>
            </MenuOption>
          </Tooltip>
          <Tooltip label='Proyectos' hasArrow bg='teal.300' color='gray.900' placement='bottom' borderRadius='5px' p='5px'>
            <MenuOption className='MenuOption'>
              <Link to="/projects">
                <label>Work</label>
                {/* <FontAwesomeIcon icon={faCode} size='xl' /> */}
              </Link>
            </MenuOption>
          </Tooltip>
          <Tooltip label='Contacto' hasArrow bg='teal.300' color='gray.900' placement='bottom' borderRadius='5px' p='5px'>
            <MenuOption className='MenuOption'>
              <Link to="/contact">
                <label>Contact</label>
                {/* <FontAwesomeIcon icon={faCode} size='xl' /> */}
              </Link>
            </MenuOption>
          </Tooltip>
        </MenuOptionContainer>
        {/* <MenuLinkContainer className='SideMenuLink'>
          <Tooltip label='GitHub' hasArrow bg='teal.300' color='gray.900' placement='right' borderRadius='5px' p='5px'>
            <MenuLink onClick={githubPath} className='MenuLink'>
              <FontAwesomeIcon icon={faGithub} size='lg' />
            </MenuLink>
          </Tooltip>
          <Tooltip label='LinkedIn' hasArrow bg='teal.300' color='gray.900' placement='right' borderRadius='5px' p='5px'>
            <MenuLink onClick={linkedinPath} className='MenuLink'>
              <FontAwesomeIcon icon={faLinkedin} size='lg' />
            </MenuLink>
          </Tooltip>
          <Tooltip label='E-Mail' hasArrow bg='teal.300' color='gray.900' placement='right' borderRadius='5px' p='5px'>
            <MenuLink onClick={mailtoPath} className='MenuLink'>
              <FontAwesomeIcon icon={faEnvelope} size='lg' />
            </MenuLink>
          </Tooltip>
        </MenuLinkContainer> */}
      </MenuItemsContainer>
    </MenuContainer>
  );
}

export default Menu;
