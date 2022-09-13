import React from "react";
import ProjectsBySection from "../components/Projects/ProjectsBySection.react";
import { useLocation } from "react-router-dom";

const ProjectsPage = () => {
  const location = useLocation();
  return <ProjectsBySection status={location?.state?.status} />;
};

export default ProjectsPage;
