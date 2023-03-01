// Estado Inicial
const initialState = [
	{
		id: 1,
		todo: 'Recolectar la piedra del Alma',
		done: false,
	},
];

// Reducer
const todoReducer = (state = initialState, action = {}) => {
	if (action.type === '[TODO] add todo') {
		return [...state, action.payload];
	}

	return state;
};

// Obterner el estado actual
let todos = todoReducer();

// Nuevo valor para agregar al estado
const newTodo = [
	{
		id: 2,
		todo: 'Recolectar la piedra del Poder',
		done: false,
	},
];

// Acción que se envía al Reducer
const addTodoAction = {
	type: '[TODO] add todo',
	payload: newTodo,
};

// Se llama nuevamente al Reducer con es estado actual y la acción
todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
