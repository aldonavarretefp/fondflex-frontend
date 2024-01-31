import React from 'react'
import { FondFlexCard } from '../../components'
import Sidebar from '../components/Sidebar'
import ProjectCard from '../components/ProjectCard'
import { Project } from '../../models'

const mockProject: Project = {
    name: 'Fondflex',
    description: 'Fondflex es una plataforma de crowdfunding que permite a los inversionistas invertir en proyectos de emprendedores y empresarios.',
    type: 'Empresarial',
    amount: 1000000,
    amountRaised: 500000,
    dateEnd: new Date(),
    dateStart: new Date(),
    id: "1",
    image: 'https://www.fondflex.com/wp-content/uploads/2021/03/Logo-Fondflex-1.png',
    interestRate: 10,
    location: 'Cali, Colombia',
    owner: 'Fondflex',
    paymentMethod: 'Credito',
    paymentType: 'Mensual',
    risk: 'Bajo',
    timeLeft: 100,
    totalInvestors: 10,
    video: 'https://www.youtube.com/embed/6tZbJU4wW4I'
}

export const DashboardPage = () => {
  return (
    <div
      className='h-screen w-screen flex overflow-hidden bg-white shadow-xl'
    >
      <Sidebar />
      <div className='flex flex-col flex-1 overflow-hidden'>
        <div className='flex-1 overflow-y-auto'>
          <div className='flex flex-col h-full'>
            <div className='flex-1 bg-background grid grid-cols-1 md:grid-cols-2   gap-5 p-10'>
              <ProjectCard 
                project={mockProject}
              />
              <ProjectCard 
                project={mockProject}
              />
              <ProjectCard 
                project={mockProject}
              />
              <ProjectCard 
                project={mockProject}
              />
              <ProjectCard 
                project={mockProject}
              />
              <ProjectCard 
                project={mockProject}
              />
              <ProjectCard 
                project={mockProject}
              />
              <ProjectCard 
                project={mockProject}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
