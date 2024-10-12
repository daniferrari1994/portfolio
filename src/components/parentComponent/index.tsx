import React from 'react';
import { Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactComponent from '../contact';
import HomeComponent from '../home';
import Menu from '../menu';
import ProjectsComponent from '../projects';
import ResumeComponent from '../resume';
import VantaBackground from '../background/vantaBackground';


export const ParentComponent = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        background="#0000007f"
        >
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/projects" element={<ProjectsComponent />} />
          <Route path="/resume" element={<ResumeComponent />} />
        </Routes>
      </Box>
      <VantaBackground />
    </BrowserRouter>
  );
};