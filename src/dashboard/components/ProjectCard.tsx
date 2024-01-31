import React from "react";
import { Project } from "../../models";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white flex flex-col w-full p-6 rounded-md gap-3">
      <div className="w-full ">
        <span className="bg-project rounded p-2 text-xs">{project.type}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-2/3">
          <span className="text-xl font-bold">{project.name}</span>
          <p className="text-gray-500 text-sm">{project.description}</p>
        </div>
        <div className="flex flex-col items-end w-1/3">
          <span className="font-semibold text-gray-500">Progreso</span>
          <span className='font-bold text-lg'>$150,000</span>
          <div className='h-[1px] w-2/3 bg-gray-300'></div>
          <span className='font-bold text-accent text-lg'>$300,000</span>
        </div> 
      </div>
      <div className="flex">
        <div className="flex flex-1">
          <span className="text-lg flex flex-col justify-end">Perfil de Acreditado</span>
          <div className="h-full w-[1px] bg-gray-300 mx-2"></div>
          <div className="text-lg flex flex-col justify-end text-project-category">
            <span className="text-">B3</span>
            <span className="text-xs">17.9%</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-center text-gray-500">Plazo</span>
          <div className="flex justify-center items-center gap-2">
            <span className="w-8 h-8 bg-black rounded-full text-white p-2 flex justify-center items-center">12</span>
            <span>Meses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
