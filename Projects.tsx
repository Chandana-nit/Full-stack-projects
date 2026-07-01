import { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([
    { name: "AI Chatbot", status: "In Progress" },
    { name: "TaskFlow Website", status: "Completed" },
    { name: "Portfolio", status: "Planning" },
  ]);

  const [newProject, setNewProject] = useState("");

  const addProject = () => {
    if (newProject.trim() === "") return;

    setProjects([
      ...projects,
      {
        name: newProject,
        status: "Planning",
      },
    ]);

    setNewProject("");
  };

  return (
    <div className="page">
      <h1>Projects</h1>

      <input
        type="text"
        placeholder="Enter project name"
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
      />

      <button onClick={addProject}>Add Project</button>

      <br />
      <br />

      {projects.map((project, index) => (
        <div className="card" key={index}>
          <h3>{project.name}</h3>
          <p>Status: {project.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
