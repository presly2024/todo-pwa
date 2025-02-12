import { ArrowLeftIcon, ExitIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router';
import useTodoHook from '../context/todoHook';

const Profile = () => {
     const navigate = useNavigate();
     const { user, logoutUser } = useTodoHook()

     return (
          <section className='text-center space-y-5 relative'>
               <button onClick={() => navigate('/')} className="absolute left-2.5 top-0">
                    <ArrowLeftIcon className='size-8' />
               </button>
               <h2 className="text-center text-primary">My Proile</h2>
               <div className="rounded-full border-2 border-primary overflow-hidden mx-auto w-16 h-16">
                    <img src={user?.profile} alt="React" className="w-full object-cover h-full" />
               </div>
               <div className='space-x-2.5 text-center'>
                    <p className='text-lg font-semibold'>{user?.name}</p>
                    <p className='text-slate-500 text-sm'>{user?.email}</p>
               </div>
               <button className='bg-primary p-2.5 mx-auto w-full rounded-sm flex gap-2.5 items-center justify-center' onClick={() => logoutUser()}>
                    <span className='text-white'>Logout</span>
                    <ExitIcon className='size-6 text-white' />
               </button>
          </section>
     )
}

export default Profile