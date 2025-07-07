import React, { createContext, useContext, useState, useEffect } from "react";

const ProjectContext = createContext();

export const useProjects = () => useContext(ProjectContext);

const PROJECTS_KEY = "projects";

function getInitialProjects() {
    const stored = localStorage.getItem(PROJECTS_KEY);
    return stored ? JSON.parse(stored) : [];
}

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState(getInitialProjects);

    useEffect(() => {
        localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
    }, [projects]);

    const createProject = (project) => {
        const newProject = { ...project, id: Date.now().toString() };
        setProjects((prev) => [...prev, newProject]);
        return newProject;
    };

    const updateProject = (id, data) => {
        setProjects((prev) => prev.map(p => p.id === id ? { ...p, ...data } : p));
    };

    const deleteProject = (id) => {
        setProjects((prev) => prev.filter(p => p.id !== id));
    };

    const getProject = (id) => projects.find(p => p.id === id);

    return (
        <ProjectContext.Provider value={{ projects, createProject, updateProject, deleteProject, getProject }}>
            {children}
        </ProjectContext.Provider>
    );
}; 