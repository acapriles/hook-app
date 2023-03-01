import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";


describe('Pruebas en <HomePage />', () => { 
    
    const user = {
        id: 321,
        name: 'Anderson Capriles',
        email: 'andersoncapriles@gmail.com'
    }
    
    test('debe mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );
    });
    
    test('debe mostrar el componente con el usuario', () => { 

        

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        // screen.debug()

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( JSON.stringify( user, null, 4 ) );
    });
});