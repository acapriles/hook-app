
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

    const { id, description, done } = todo;

    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span 
                className={`align-self-center ${ ( done ) ? 'text-decoration-line-through' : '' }`}
                onDoubleClick={ () => onToggleTodo( id ) }
                aria-label="span"
            >
                { description }
            </span>
            
            <button 
                className='btn btn-danger' 
                onClick={ () => onDeleteTodo( id )}
            >
                Delete
            </button>
        </li>
    )
}
