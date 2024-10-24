import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getProjects = async () => {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
};

export const addProject = async (project: any) => {
    const response = await axios.post(`${API_URL}/projects`, project);
    return response.data;
};

export const getExperiences = async () => {
    const response = await axios.get(`${API_URL}/experiences`);
    return response.data;
};

export const addExperience = async (experience: any) => {
    const response = await axios.post(`${API_URL}/experiences`, experience);
    return response.data;
};

export const getEducations = async () => {
    const response = await axios.get(`${API_URL}/educations`);
    return response.data;
};

export const addEducation = async (education: any) => {
    const response = await axios.post(`${API_URL}/educations`, education);
    return response.data;
};
