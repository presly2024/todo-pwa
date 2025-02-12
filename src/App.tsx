import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import MainLayout from "./layout/mainLayout";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import TodoForm from "./components/todo-form";
import SingleTodo from "./components/single-todo";
import Auth from "./components/auth";
import useTodoHook from "./context/todoHook";
import React from "react";


export default function App() {
     const { user } = useTodoHook()

     const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
          if (!user) return <Navigate to={'/auth'} />
          return children
     }

     return (
          <>
               <BrowserRouter>
                    <Routes>
                         <Route path="/auth" element={<Auth />} />
                         <Route element={<ProtectedRoutes children={<MainLayout />} />}>
                              <Route index element={<Dashboard />} />
                              <Route path="/profile" element={<Profile />} />
                              <Route path="todo">
                                   <Route path=":id" element={<SingleTodo />} />
                                   <Route path="create/:id" element={<TodoForm />} />
                              </Route>
                         </Route>

                    </Routes>
               </BrowserRouter>
          </>
     )
}
