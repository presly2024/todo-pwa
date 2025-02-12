
import { Outlet } from 'react-router'
import Header from '../components/header'
import BottomNav from '../components/bottomNav'

const MainLayout = () => {
     return (
          <div className='h-screen flex flex-col'>
               <Header />
               <main className='px-5 grow bg-gray-200 py-10 rounded-tl-4xl'>
                    <Outlet />
               </main>
               <BottomNav />
          </div>
     )
}

export default MainLayout