import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  
    const [counter, setCounter] = useState( 10 );

    // El parámetro de entreda value se coloca para poder pasar un argumento desde la función que lo llama
    // Ejemplo: incrementFather(5);
    const incrementFather = useCallback((value) => {
        setCounter((c) => c + value);
    },[]);
    

    /* const incrementFather =  () => {
        setCounter(counter + 1);
    } */

    // Cuando se usa un useEffect y el Effect tiene una dependencia que es una función,
    // esto se hace para que siempre se use el mismo espacio en memoria que ocupa la función
    // y no se estén creando nuevas funciones que a punten a otros espacios de memoria.
    useEffect(() => {
        incrementFather(5);
    }, [incrementFather])
    
  
    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ incrementFather } />
        </>
    )
}
