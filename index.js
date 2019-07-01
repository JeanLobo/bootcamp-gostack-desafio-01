const express = require("express");

const server = express();

server.use(express.json());

const projects = ["MeuPet", "Pomodor", "AppContabil"];

//Read all projects
server.get("/projects", (req, res) => {
  return res.json(projects);
});

//Update one project
server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);
  project.title = title;

  return res.json(project);
});

server.listen(3000);
