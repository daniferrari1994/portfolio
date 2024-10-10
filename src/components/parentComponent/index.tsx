import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from '../home';
import ProjectsComponent from '../projects';
import Menu from '../menu';
import VantaBackground from '../background/vantaBackground';
import { Box } from '@chakra-ui/react';
import ResumeComponent from '../resume';

export const ParentComponent = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Box
        flex='1'
        display='flex' 
        justifyContent='center'
        alignItems='center'
        background='#0000007f'
        >
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/projects" element={<ProjectsComponent />}/>
          <Route path="/resume" element={<ResumeComponent />}/>
        </Routes>
      </Box>
      <VantaBackground />
    </BrowserRouter>
  );
};