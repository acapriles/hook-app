import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Pruebas en <TodoItem />', () => { 

    const todo = {
        id: 1,
        description: 'Cualquier texto',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() ); //Limpias las fn creadas en los Mocks antes de su uso

    test('debe mostrar el Todo pendiente por completar', () => { 
        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock } />);

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toBe('align-self-center ');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');
    });

    test('debe mostrar el Todo completado', () => { 

        todo.done = true;

        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock } />);

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center text-decoration-line-through');
    });

    test('debe llamar el ToggleTodo cuando se hace DoubleClick sobre el span', () => { 

        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock } />);

        const spanElement = screen.getByLabelText('span');

        fireEvent.dblClick( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('debe llamar el DeleteTodo cuando se hace Click sobre el botón', () => { 

        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock } />);

        const buttonElement = screen.getByRole('button');

        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });
});