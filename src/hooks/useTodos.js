import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, todosDispatch] = useReducer( todoReducer, [], init)

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const handleNewTodo = (todo)=>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        todosDispatch(action)
    }

    const handleDeleteTodo = (todo)=>{
        const action = {
            type: '[TODO] Remove Todo',
            payload: todo
        }
        todosDispatch(action)
    }

    const handleToggleTodo = (id)=>{
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        todosDispatch(action)
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        totalCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }

}
