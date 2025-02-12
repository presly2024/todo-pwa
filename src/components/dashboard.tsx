import { useState } from "react";
import noTask from './../assets/no-task.png';
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router";
import Priority from "./priority";
import useTodoHook from "../context/todoHook";

const Tab = ({ label, count, currentTab, onPress }: { label: string; count?: number; currentTab: string; onPress: (tab: string) => void }) => {
     return (
          <button className={`${currentTab === label ? 'border-b-2 border-primary text-primary' : 'text-black'} w-full`} onClick={() => onPress(label)}>
               <span>{label}</span>
               {count !== undefined && <span> ({count})</span>}
          </button>
     );
};

const Dashboard = () => {
     const tabs = ["All", "Pending", "Completed"];
     const [currentTab, setCurrentTab] = useState(tabs[0]);
     const { todos } = useTodoHook()

     const handleTabChange = (tab: string) => {
          setCurrentTab(tab);
     };

     const filteredTodos = currentTab === "All" ? todos : todos.filter(todo => todo.status === currentTab.toLowerCase());

     return (
          <section className="flex flex-col gap-5 h-full">
               <div className="flex items-center justify-between">
                    {tabs.map((tab, i) => <Tab onPress={handleTabChange} label={tab} currentTab={currentTab} key={i} />)}
               </div>
               <div className="flex flex-col gap-5 py-5 overflow-y-scroll h-[52vh]">
                    {filteredTodos.length === 0 ? (
                         <div className="grid place-content-center space-y-2.5">
                              <img src={noTask} alt="No Todos" className="size-24 mx-auto" />
                              <p className="text-primary font-semibold text-xl">Todo list is empty</p>
                         </div>
                    ) : (
                         filteredTodos.map((todo, id) => (
                              <Link key={id + String(todo?.id)} to={`/todo/${todo.id}`}>
                                   <article className="w-full h-fit bg-white pt-5 p-2.5 rounded-lg transition-all duration-300 border border-white transform relative hover:border-primary">
                                        <Priority priority={todo.priority} className="top-0 transform -translate-y-1/2 left-2.5 absolute " />
                                        <h4>{todo.title}</h4>
                                        <span className="text-sm text-gray-400">Due {formatDistanceToNow(new Date(todo.endDate))}</span>
                                   </article>
                              </Link>
                         ))
                    )}
               </div>
          </section>
     );
};

export default Dashboard;