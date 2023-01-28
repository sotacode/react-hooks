import { useTodos } from "../hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"




export const TodoApp = () => {

    const {todos, totalCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();
         
    return (
        <div className="hookCard">
            <h2>useReducer - React Hook</h2>
            <hr />
            <p>The "useReducer" hook is similar to "useState", but in this case it is used when the state changes in many ways and you want to centralize this in a function where the logic is separated by actions.</p>
            <p>In this case, we implemented 3 events: "add to do", mark as "done to do" and "remove to do" within "useReducer"</p>
            <h5>ToDos: {totalCount}</h5>
            <h5>Pendientes: {pendingTodosCount}</h5>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onRemoveTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
                </div>
                <div className="col-5">
                    <h6>Agregar ToDo</h6>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
        </div>
    )
}
