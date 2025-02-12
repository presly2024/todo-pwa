
import { ArrowLeftIcon, CheckCircledIcon, Pencil1Icon, SymbolIcon, TrashIcon } from '@radix-ui/react-icons'
import { useNavigate, useParams } from 'react-router'
import { format } from 'date-fns'
import Priority from './priority'
import useTodoHook from '../context/todoHook'

const SingleTodo = () => {
     const params = useParams()
     const navigate = useNavigate()
     const { todos, deleteTodo, toggleTodoStatus } = useTodoHook()

     const todo = todos.find(todo => todo.id === params?.id)

     if (!todo) return

     const { id, title, description, priority, endDate, status } = todo

     return (
          <section className='space-y-6'>
               <button onClick={() => navigate('/')}>
                    <ArrowLeftIcon className='size-8' />
               </button>
               <article className='border border-slate-300 p-5 rounded-lg bg-white relative flex flex-col gap-2.5 '>
                    <h2 className='text-primary'>{title}</h2>
                    <p className='text-base'>{description}</p>
                    <p>End Date: <span className='text-slate-400 capitalize'>{format(endDate, 'eeee MM yyy')}</span></p>
                    <p>Status: <span className={`${status === 'completed' ? 'text-green-500' : 'text-slate-400'} capitalize`}>{status}</span></p>
                    <Priority priority={priority} className='absolute top-5 right-5' />
               </article>
               <div className='bg-white p-5 rounded-lg space-y-5'>
                    <h3 className='text-center'>Actions</h3>
                    <div className='flex items-center justify-evenly'>
                         <button className='flex flex-col gap-2.5 p-2.5 rounded-sm text-center space-y-2.5 bg-blue-600' onClick={() => navigate(`/todo/create/${id}`)}>
                              <Pencil1Icon className='size-6 text-white' />
                         </button>
                         <button className='flex flex-col gap-2.5 p-2.5 rounded-sm text-center space-y-2.5 text-white bg-red-500'
                              onClick={() => {
                                   deleteTodo(String(id))
                                   navigate('/')
                              }}>
                              <TrashIcon className='size-6' />
                         </button>
                         <button className={`${todo?.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'} flex flex-col gap-2.5 p-2.5 rounded-sm text-center space-y-2.5`} onClick={() => toggleTodoStatus(String(id))}>
                              {todo?.status === 'completed' ?
                                   <CheckCircledIcon className='size-6 text-white' /> :
                                   <SymbolIcon className='size-6 text-white' />
                              }
                         </button>
                    </div>
               </div>
          </section>
     )
}

export default SingleTodo