import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from '../home';
import ProjectsComponent from '../projects';
import SideMenu from '../sideMenu';
import VantaBackground from '../background/vantaBackground';
import { Box } from '@chakra-ui/react';
import CertificatesComponent from '../certificates';
import './styled.css'

export const ParentComponent = () => {
  return (
    <BrowserRouter>
      <SideMenu />
      <Box
        flex='1' 
        ml='250px'
        display='flex' 
        justifyContent='center'
        alignItems='center'
        >
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/projects" element={<ProjectsComponent />}/>
          <Route path="/certificates" element={<CertificatesComponent />}/>
        </Routes>
      </Box>
      <VantaBackground />
    </BrowserRouter>
  );
};