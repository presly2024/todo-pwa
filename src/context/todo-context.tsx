import { createContext } from "react";
import { TodoType, UserType } from "../lib/types";

type TodoContextType = {
     user: UserType | null;
     todos: TodoType[];
     addTodo: (todo: TodoType) => void;
     editTodo: (todoId: string, todo: TodoType) => void;
     deleteTodo: (todoId: string) => void;
     toggleTodoStatus: (todoId: string) => void;
     setUserSession: (user: UserType | null) => void;
     upDateUserImage: (img: string) => void;
     logoutUser: () => void;

}

export const TodoContext = createContext<TodoContextType>({
     todos: [],
     addTodo: () => null,
     editTodo: () => null,
     deleteTodo: () => null,
     toggleTodoStatus: () => null,
     user: null,
     setUserSession: () => null,
     upDateUserImage: () => null,
     logoutUser: () => null
})