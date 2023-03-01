import { useTodos } from '../hooks/';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

    const { 
        todos, 
        todosCount, 
        pendingTodosCount, 
        handleNewTodo, 
        handleDeleteTodo, 
        onToggleTodo 
    } = useTodos();

    return (
        <>
            <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo } 
                    onToggleTodo={ onToggleTodo }
                />

                <div className="col-5">

                    <h4>Add TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    )
}
