import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('Pruebas en <MultipleCustomHooks />', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({ 
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    test('debe mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({ 
            data: null,
            isLoading: true,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading...') ).toBeTruthy();
        expect( screen.getByText('BreakingBad Quotes') ).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        expect( nextButton.disabled ).toBeTruthy();
    }); 

    test('debe mostrar un Quote', () => { 
        useFetch.mockReturnValue({ 
            data: [
                {
                    author: 'Anderson', 
                    quote: 'Hello world'
                }
            ],
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );
        // screen.debug();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        expect( screen.getByText('Hello world') ).toBeTruthy();
        expect( screen.getByText('Anderson') ).toBeTruthy();

        expect( nextButton.disabled ).toBeFalsy();
     });

    test('debe llamar la función de incrementar', () => { 

        useFetch.mockReturnValue({ 
            data: [
                {
                    author: 'Anderson', 
                    quote: 'Hello world'
                }
            ],
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled();
    });


})