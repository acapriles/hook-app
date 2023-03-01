import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en todoReducer()', () => {
	const initialState = [
		{
			id: 1,
			description: 'Demo Todo',
			done: false,
		},
	];

	test('debe regresar el estado inicial', () => {
		const newState = todoReducer(initialState, {});
		expect(newState).toBe(initialState);
	});

	test('debe agregar un todo', () => {
		const action = {
			type: '[TODO] Add Todo',
			payload: {
				id: 2,
				description: 'Nuevo todo #2',
				done: false,
			},
		};

		const newState = todoReducer(initialState, action);

		expect(newState.length).toBe(2);
		expect(newState).toHaveLength(2);
		expect(newState).toContain(action.payload);
	});

	test('debe eliminar un todo', () => {
		const action = {
			type: '[TODO] Remove Todo',
			payload: 1,
		};

		const newState = todoReducer(initialState, action);

		expect(newState).toHaveLength(0);
		expect(newState).not.toContain(initialState);
	});

	test('debe realizar el Toggle del todo', () => {
		const action = {
			type: '[TODO] Toggle Todo',
			payload: 1,
		};

		const newState = todoReducer(initialState, action);
		expect(newState[0].done).toBeTruthy();
		expect(newState[0].done).toBe(!initialState[0].done);

		const newState2 = todoReducer(newState, action);
		expect(newState2[0].done).toBe(false);
		expect(newState2[0].done).toBe(!newState[0].done);
	});
});
