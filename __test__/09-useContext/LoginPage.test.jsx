import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";


describe('Pruebas en <LoginPage />', () => { 

    test('debe mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect( preTag.innerHTML ).toBe( 'null' );

    });
    
    test('debe llamar el setUser() cuando se hace Click en el botón', () => { 

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');

        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith({
            id: 321,
            name: 'Anderson Capriles',
            email: 'andersoncapriles@gmail.com'
        });
    });
});