import { ChangeEvent, useState } from 'react';
import { UserType } from '../lib/types';
import profileImage from './../assets/profile.png'; // Ensure this is a valid URL or path
import useTodoHook from '../context/todoHook';
import { Navigate, useNavigate } from 'react-router';

const Auth = () => {

     const { user, setUserSession } = useTodoHook()
     const navigate = useNavigate()

     const [userData, setUserData] = useState<UserType>({
          name: "",
          email: "",
          profile: profileImage, // Default profile image
     });

     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
          const { name, value, type, files } = e.target;
          setUserData(prev => ({
               ...prev,
               [name]: type === "file" && files ? URL.createObjectURL(files[0]) : value,
          }));
     };

     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          // Implement your submission logic here, e.g., API call
          localStorage.setItem('user', JSON.stringify(userData))
          setUserSession(userData)
          navigate('/')
     };

     if (user) return <Navigate to={'/'} />

     return (
          <section className='p-5 space-y-5 grid place-content-center h-screen'>
               <h2 className='text-white text-center'>TaskDo</h2>
               <p className='text-center text-white font-medium'>Welcome!
                    Stay Organized, Stay Productive: TaskDo!, create profile to get started.</p>
               <form onSubmit={handleSubmit} className="p-5 bg-white/50 rounded-lg">
                    <div className="flex flex-col gap-1.5 mb-3">
                         <label htmlFor="profile" className='text-base mx-auto w-max'>
                              <img src={userData.profile} alt="Profile" className="w-20 h-20 rounded-full border border-primary" />
                         </label>
                         <input
                              onChange={handleChange}
                              type="file"
                              id='profile'
                              name='profile'
                              className='border border-slate-100 w-full px-5 py-2.5 rounded-sm text-base outline-primary transition duration-200'
                              accept='.jpg,.png,.jpeg'
                         />
                    </div>
                    <div className="flex flex-col gap-1.5 mb-3">
                         <input
                              onChange={handleChange}
                              value={userData.name}
                              type="text"
                              id='name'
                              name='name'
                              placeholder='Name'
                              className='border border-slate-100 w-full px-5 py-2.5 rounded-sm text-base outline-primary transition duration-200'
                         />
                    </div>
                    <div className="flex flex-col gap-1.5 mb-3">
                         <input
                              onChange={handleChange}
                              value={userData.email}
                              type="email" // Changed to 'email' for better validation
                              id='email'
                              name='email'
                              placeholder='Email Address'
                              className='border border-slate-100 w-full px-5 py-2.5 rounded-sm text-base outline-primary transition duration-200'
                         />
                    </div>
                    <button type="submit" className="text-white bg-primary border border-primary text-base font-medium hover:text-primary hover:bg-white transition duration-200 w-full p-2.5 rounded-md">
                         Submit
                    </button>
               </form>
          </section>
     );
}

export default Auth;