import { MainContent, Sidebar } from '../components'

import { Project } from '../../models'

export const DashboardPage = () => {
  return (
    <div
      className='h-screen w-screen flex overflow-hidden bg-white'
    >
      <Sidebar />
      <MainContent />
    </div>
  )
}
