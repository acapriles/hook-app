export const todoReducer = (initialState = [], action) => {
	switch (action.type) {
		case '[TODO] Add Todo':
			return [...initialState, action.payload];

		case '[TODO] Remove Todo':
			return initialState.filter((todo) => todo.id !== action.payload); //action.payload === id (el payload sólo tiene el valor del id)

		case '[TODO] Toggle Todo':
			return initialState.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done,
					};
				}

				return todo;
			});

		// case 'ABC':
		// 	throw new Error('action.type === ABC no está implementada');

		default:
			return initialState;
	}
};
