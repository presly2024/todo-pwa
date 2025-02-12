import { useContext } from "react"
import { TodoContext } from "./todo-context"


const useTodoHook = () => useContext(TodoContext)

export default useTodoHook