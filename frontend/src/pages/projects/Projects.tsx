import React from "react";
import "./Projects.css";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import candidatebios from "../../../public/images/candidatebios.png";
import pythonlogo from "../../../public/images/pythonlogo.png";
import portfolio from "../../../public/images/portfolio.png";
import reactlogo from "../../../public/images/reactlogo.png";
import typescriptlogo from "../../../public/images/typescriptlogo.png";
import htmllogo from "../../../public/images/htmllogo.png";
import csslogo from "../../../public/images/csslogo.png";
import sportsnews from "../../../public/images/sportsnews.png";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import Reveal from "../../components/Reveal/Reveal";

const Projects = () => {
  const projectCards = [
    {
      title: "CandidateBios",
      image: candidatebios,
      description:
        "I wrote Python software to gather the biodata of 150,000 U.S. state legislators from the web while working as an undergraduate research assistant.",
      technologies: [pythonlogo],
      links: [["GitHub", "https://github.com/victorverma3/Portfolio"]],
    },
    {
      title: "Portfolio Website",
      image: portfolio,
      description:
        "I designed my own personal portfolio website and deployed it using Vercel. The site periodically receives maintenance, updates, and improvements. ",
      technologies: [reactlogo, typescriptlogo, htmllogo, csslogo],
      links: [
        ["Live Demo", "https://victor-verma-portfolio.vercel.app/"],
        ["GitHub", "https://github.com/victorverma3/Portfolio"],
      ],
    },
    {
      title: "SportsNews",
      image: sportsnews,
      technologies: [pythonlogo, htmllogo, csslogo],
      description:
        "I created a script that scrapes the latest headlines for 6 sports and sends them as formatted emails to users on mailing lists every morning at 9:00am est. ",
      links: [["GitHub", "https://github.com/victorverma3/SportsNews"]],
    },
  ];
  return (
    <div className="project-content">
      <h1 className="page-title">Projects</h1>
      <Reveal>
        <ProjectCards cards={projectCards} />
      </Reveal>
      <Disclaimer />
    </div>
  );
};

export default Projects;
