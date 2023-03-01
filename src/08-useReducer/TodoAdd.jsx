import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

    const { onInputChange, description, onResetForm } = useForm({
		description: '',
	});

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length === 0) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };

        onNewTodo && onNewTodo( newTodo );
        onResetForm()
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder='What should I do?'
                className='form-control'
                name='description'
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                className='btn btn-outline-primary mt-1'
                type='submit'
                onClick={onFormSubmit}
            >
                Add
            </button>

        </form>
    )
}
