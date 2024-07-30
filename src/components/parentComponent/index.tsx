import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from '../home';
import ProjectsComponent from '../projects';
import SideMenu from '../sideMenu';
import './styled.css'

export const ParentComponent = () => {
  return (
    <BrowserRouter>
      <div className="app-background">
        <SideMenu />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/projects" element={<ProjectsComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};