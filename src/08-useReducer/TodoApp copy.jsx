import { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
    /* {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false
    }, */
];

const init = () => JSON.parse( localStorage.getItem('todos') ) || [];


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) || []);
    }, [todos]);
    
    const handleNewTodo = ( todo ) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = ( id ) => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatch(action);
    }

    const onToggleTodo = ( id ) => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatch(action);
    }


    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
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
