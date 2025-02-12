import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { TodoType } from "../lib/types";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import useTodoHook from "../context/todoHook";

const TodoForm = () => {
     const { id } = useParams();
     const navigate = useNavigate();
     const { todos, editTodo, addTodo } = useTodoHook()

     const defaultValue: TodoType = {
          id: '', // Adding id to default value
          title: "",
          description: "",
          priority: "low",
          status: "pending",
          endDate: "",
     };

     const editMode = id !== 'new';
     const foundTodo = editMode ? todos.find(todo => todo.id === id) : null; // Use null as a fallback
     const value = foundTodo || defaultValue; // Use defaultValue if no todo is found
     const [todo, setTodo] = useState<TodoType>(value);

     const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, type, value } = e.target;
          setTodo(prev => ({
               ...prev,
               [name]: type === "radio" ? value : e.target.value,
          }));
     };

     const handleSubmit = (e: SyntheticEvent) => {
          e.preventDefault();
          if (editMode) {
               editTodo(id ?? "", todo)
          } else {
               addTodo(todo)
          }
          // Add logic to save the todo (e.g., update todos array or send to API)
          setTodo(defaultValue)
          navigate('/')
     };

     return (
          <section className="space-y-5 relative">
               <button onClick={() => navigate('/')} className="absolute left-2.5 top-0">
                    <ArrowLeftIcon className='size-8' />
               </button>
               <h2 className="text-center text-primary">{id === 'new' ? 'Create Todo' : 'Edit Todo'}</h2>
               <form onSubmit={handleSubmit} className="space-y-5 h-[52vh] overflow-scroll">
                    <div className="flex flex-col gap-1.5">
                         <label htmlFor="title" className='text-base'>Title</label>
                         <input
                              onChange={handleChange}
                              value={todo.title}
                              type="text"
                              id='title'
                              name='title'
                              placeholder='Title'
                              className='border border-slate-300 w-full px-5 py-2.5 rounded-sm text-base outline-primary transition duration-200'
                         />
                    </div>
                    <div className="flex flex-col gap-1.5">
                         <label htmlFor="description" className='text-base'>Description</label>
                         <textarea
                              onChange={handleChange}
                              value={todo.description}
                              id='description'
                              rows={5}
                              name='description'
                              placeholder='Description'
                              className='border border-slate-300 w-full px-5 py-2.5 rounded-sm text-base outline-primary transition duration-200 resize-none'
                         />
                    </div>
                    <div className="flex flex-col gap-1.5">
                         <label htmlFor="endDate" className='text-base'>End Date</label>
                         <input
                              onChange={handleChange}
                              value={todo.endDate}
                              type="date"
                              id='endDate'
                              name='endDate'
                              className='border border-slate-300 w-full px-5 py-2.5 rounded-sm text-base outline-primary transition duration-200'
                         />
                    </div>
                    <div className="flex flex-col gap-1.5">
                         <fieldset className="border py-2.5 px-5 rounded-sm border-slate-300">
                              <legend>Priority</legend>
                              <label className="mr-1.5" htmlFor="low">Low</label>
                              <input
                                   onChange={handleChange}
                                   type="radio"
                                   id='low'
                                   name='priority'
                                   value='low'
                                   checked={todo.priority === 'low'}
                                   className="mr-2.5"
                              />
                              <label className="mr-1.5" htmlFor="medium">Medium</label>
                              <input
                                   onChange={handleChange}
                                   type="radio"
                                   id='medium'
                                   name='priority'
                                   value='medium'
                                   checked={todo.priority === 'medium'}
                                   className="mr-2.5"
                              />
                              <label className="mr-1.5" htmlFor="high">High</label>
                              <input
                                   onChange={handleChange}
                                   type="radio"
                                   id='high'
                                   name='priority'
                                   value='high'
                                   checked={todo.priority === 'high'}
                                   className="mr-2.5"
                              />
                         </fieldset>
                    </div>
                    <button className="text-white bg-primary border border-primary text-base font-medium hover:text-primary hover:bg-white transition duration-200 w-full p-2.5 px-5 rounded-md">
                         {id === 'new' ? 'Add Todo' : 'Update Todo'}
                    </button>
               </form>
          </section>
     );
};

export default TodoForm;