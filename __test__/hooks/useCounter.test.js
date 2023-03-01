import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter()', () => {
	test('debe de retornar los valores por defecto', () => {
		const {
			result: {
				current: { counter, decrement, increment, reset },
			},
		} = renderHook(() => useCounter());

		expect(counter).toBe(10);
		expect(decrement).toEqual(expect.any(Function));
		expect(increment).toEqual(expect.any(Function));
		expect(reset).toEqual(expect.any(Function));
	});

	test('debe de generar el counter con el valor de 100', () => {
		const {
			result: {
				current: { counter },
			},
		} = renderHook(() => useCounter(100));

		expect(counter).toBe(100);
	});

	test('debe de incrementar el contador', () => {
		const { result } = renderHook(() => useCounter());
		const { counter, increment } = result.current;

		// La variable "counter" desestructurada sólo guarda el valor inicial
		// result.current.counter si almacena los cambios del state

		act(() => increment());
		expect(result.current.counter).toBe(counter + 1);

		act(() => increment(2));
		expect(result.current.counter).toBe(counter + 3);
	});

	test('debe de decrementar el contador', () => {
		const { result } = renderHook(() => useCounter());
		const { counter, decrement } = result.current;

		// La variable "counter" desestructurada sólo guarda el valor inicial
		// result.current.counter si almacena los cambios del state

		act(() => decrement());
		expect(result.current.counter).toBe(counter - 1);

		act(() => decrement(2));
		expect(result.current.counter).toBe(counter - 3);
	});

	test('debe de resetear el contador', () => {
		const { result } = renderHook(() => useCounter(100));
		const { counter, decrement, reset } = result.current;

		// La variable "counter" desestructurada sólo guarda el valor inicial
		// result.current.counter si almacena los cambios del state

		act(() => {
			decrement(10);
			reset();
		});
		expect(result.current.counter).toBe(counter);
	});
});
