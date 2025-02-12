import React, { useState } from "react"
import { TodoType, UserType } from "../lib/types"
import { generateRandomId, saveToLocalStorage } from "../lib/utils"
import { TodoContext } from "./todo-context"


const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
     const [user, setUser] = useState<UserType | null>(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : null)
     const [appTodos, setAppTodos] = useState<TodoType[]>(localStorage.getItem(`${user?.email}`) ? JSON.parse(localStorage.getItem(`${user?.email}`) || '') : [])


     const addTodo = (todo: TodoType) => {
          todo.id = generateRandomId()
          const newTodos: TodoType[] = [...appTodos, todo]
          setAppTodos([...newTodos])
          saveToLocalStorage(`${user?.email}`, newTodos)
     }

     const deleteTodo = (todoId: string) => {
          const newTodos: TodoType[] = appTodos.filter(todo => todo.id !== todoId)
          setAppTodos([...newTodos])
          saveToLocalStorage(`${user?.email}`, newTodos)
     }

     const toggleTodoStatus = (todoId: string) => {
          const newTodos: TodoType[] = appTodos.map(todo => {
               if (todo.id === todoId) {
                    todo.status = todo.status === 'completed' ? 'pending' : 'completed'
               }
               return todo
          })
          setAppTodos([...newTodos])
          saveToLocalStorage(`${user?.email}`, newTodos)
     }

     const editTodo = (todoId: string, editedTodo: TodoType) => {
          const newTodos: TodoType[] = appTodos.map(todo => {
               if (todo.id === todoId) {
                    return { ...editedTodo }
               }
               return todo
          })
          setAppTodos([...newTodos])
          saveToLocalStorage(`${user?.email}`, newTodos)
     }

     const setUserSession = (user: UserType | null) => {
          setUser(user)
     }

     const logoutUser = () => {
          localStorage.removeItem('user')
          setUser(null)
     }

     const updateUserProfileImage = (img: string) => {
          if (!user) return
          const updatedUser = { ...user, profile: img }
          setUser(updatedUser)
          saveToLocalStorage('user', updatedUser)
     }

     return (
          <TodoContext.Provider value={{ todos: appTodos, addTodo, editTodo, deleteTodo, toggleTodoStatus, user, setUserSession, upDateUserImage: updateUserProfileImage, logoutUser }} >
               {children}
          </TodoContext.Provider>
     )
}

export default TodoContextProvider