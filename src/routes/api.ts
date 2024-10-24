import express from 'express';
import { Project } from '../models/projects';
import { Experience } from '../models/experience';
import { Education } from '../models/education';

const router = express.Router();

// Rutas para proyectos
router.get('/projects', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

router.post('/projects', async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.json(newProject);
});

router.get('/experiences', async (req, res) => {
    const experiences = await Experience.find();
    res.json(experiences);
});

router.post('/experiences', async (req, res) => {
    const newExperience = new Experience(req.body);
    await newExperience.save();
    res.json(newExperience);
});

router.get('/educations', async (req, res) => {
    const educations = await Education.find();
    res.json(educations);
});

router.post('/educations', async (req, res) => {
    const newEducation = new Education(req.body);
    await newEducation.save();
    res.json(newEducation);
});

export default router;
