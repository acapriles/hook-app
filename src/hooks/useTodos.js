import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const useTodos = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos) || []);
	}, [todos]);

	const handleNewTodo = (todo) => {
		const action = {
			type: '[TODO] Add Todo',
			payload: todo,
		};

		dispatch(action);
	};

	const handleDeleteTodo = (id) => {
		const action = {
			type: '[TODO] Remove Todo',
			payload: id,
		};

		dispatch(action);
	};

	const onToggleTodo = (id) => {
		const action = {
			type: '[TODO] Toggle Todo',
			payload: id,
		};

		dispatch(action);
	};

	// const todosCount = (todos) => todos.length;

	// const pendingTodosCount = (todos) => todos.filter((todo) => !todo.done).length;

	return {
		todos,
		handleNewTodo,
		handleDeleteTodo,
		onToggleTodo,
		todosCount: todos.length,
		pendingTodosCount: todos.filter((todo) => !todo.done).length,
	};
};
