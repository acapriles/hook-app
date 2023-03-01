import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y:0});

    
    useEffect(() => {
        const onMoueseMove = ({ x, y }) => {
            setCoords( { x, y } );
        }

        window.addEventListener('mousemove', onMoueseMove );
        
        return () => {
            window.removeEventListener('mousemove', onMoueseMove );
        }
    }, [])
    
    return (
        <>
            <h3>Usuario ya existe</h3>

            {JSON.stringify( coords )}
        </>

    )
}
