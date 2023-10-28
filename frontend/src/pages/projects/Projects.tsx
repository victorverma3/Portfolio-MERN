import React, { useEffect, useState } from "react";
import axios from "axios";

import Disclaimer from "../../components/Disclaimer/Disclaimer";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import Reveal from "../../components/Reveal/Reveal";
import Spinner from "../../components/Spinner/Spinner";

import "./Projects.css";

type projectDataType = {
  _id: string;
  title: string;
  image: string;
  description: string;
  technologies: [string];
  links: [[string]];
  sortOrder: number;
};

const Projects = () => {
  const [projectData, setProjectData] = useState<projectDataType[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://victor-verma-portfolio-backend.vercel.app/project-collection"
      )
      .then((response) => {
        setProjectData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="project-content">
      <h1 className="page-title">Projects</h1>
      {loading ? (
        <Spinner />
      ) : (
        <Reveal>
          <ProjectCards cards={projectData} />
        </Reveal>
      )}
      <Disclaimer />
    </div>
  );
};

export default Projects;
