import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faGear } from '@fortawesome/free-solid-svg-icons'

import ProjectCard from './ProjectCard'
import { FilterBar } from './FilterBar'
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

export const MainContent = () => {
  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
        <div className='flex-1 overflow-y-auto'>
          <div className='flex flex-col h-full'>
            <div className='h-12 flex justify-between'>
              <div>
                <h1></h1>
              </div>
              <div className='bg-white flex'>
                <div className='flex justify-center items-center gap-3 p-2'>
                <FontAwesomeIcon icon={faCircleUser} size="lg"/>
                <h2 className='text-black text-xl'>Fondflexer Anónimo</h2>
                </div>
                <div className='flex justify-center items-center p-4 hover:bg-gray-100 cursor-pointer'>
                <FontAwesomeIcon icon={faGear} size="lg"/>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full bg-background overflow-hidden">
            <FilterBar/>
              <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:gap-10 gap-5 p-10 flex-1 overflow-y-scroll scrollbar-hide'>
                {
                    Array.from({ length: 10 }, (_, i) => (
                        <ProjectCard key={i} project={mockProject} />
                    ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
