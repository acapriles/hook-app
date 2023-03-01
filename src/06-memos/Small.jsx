import React from "react";
// import { memo } from "react";


// Gracias a la fnc memo() el component sólo se vuelve a redibujar si las props cambian
export const Small = React.memo(({value}) => {


    console.log('Me volví a dibujar');

    return (
        <small>{ value }</small>
    )
});
