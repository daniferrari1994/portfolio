import React, { Suspense } from 'react';
import { Box } from '@chakra-ui/react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Menu from '../menu';
import VantaBackground from '../background/vantaBackground';

const ContactComponent = React.lazy(() => import('../contact/index'));
const HomeComponent = React.lazy(() => import('../home'));
const ProjectsComponent = React.lazy(() => import('../projects'));
const ResumeComponent = React.lazy(() => import('../resume'));

export const ParentComponent = () => {
  return (
    <HashRouter>
      <VantaBackground />
      <Menu />
      <Box alignItems="center" display="flex" height="100vh" justifyContent="center" position="relative" zIndex={1}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/projects" element={<ProjectsComponent />} />
            <Route path="/resume" element={<ResumeComponent />} />
          </Routes>
        </Suspense>
      </Box>
    </HashRouter>
  );
};