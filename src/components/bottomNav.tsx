import { PersonIcon, PlusIcon, ViewGridIcon } from '@radix-ui/react-icons'
import { NavLink } from 'react-router'

const BottomNav = () => {
     return (
          <footer className='flex justify-evenly items-center fixed bottom-0 w-full p-5 left-0 bg-white border-t border-slate-300'>
               <NavLink to={'/'}>
                    <ViewGridIcon className='size-6' />
               </NavLink>
               <NavLink to={'/todo/create/new'}>
                    <button className='absolute bg-primary p-2.5 left-1/2 -top-[18px] transform -translate-x-1/2 rounded-full'>
                         <PlusIcon className='size-6 text-white' />
                    </button>
               </NavLink>
               <NavLink to={'/profile'}>
                    <PersonIcon className='size-6' />
               </NavLink>
          </footer>
     )
}

export default BottomNav