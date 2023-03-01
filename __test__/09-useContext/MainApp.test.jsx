import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";


describe('Pruebas en <MainApp />', () => { 

    test('debe mostrar el HomePage', () => { 
        render( 
            <MemoryRouter>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('HomeApp') ).toBeTruthy();
    });

    test('debe mostrar el LoginPage', () => { 
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();
    });

    test('debe mostrar el AboutPage', () => { 
        render( 
            <MemoryRouter initialEntries={['/about']}>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('AboutPage') ).toBeTruthy();
    });
});