import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
    return (
        <div className="col-7">
            <ul className='list-group'>
                {
                    todos.map((todo) => (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            onDeleteTodo={ onDeleteTodo } 
                            onToggleTodo={ onToggleTodo }
                        />
                    ))
                }
            </ul>
        </div>
    )
}
