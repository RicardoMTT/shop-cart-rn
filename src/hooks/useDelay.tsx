import React, { useState, useEffect } from 'react';

const useDelayedFunctionCall = (input = "", delay = 3000) => {
    const [debouncedValue, setDebouncedValue] = useState(input);

    useEffect(() => {
        
        // Se crea un temporizador que ejecuta una función después de un cierto tiempo de retardo,
        // esta funcion que se ejecutara actualizara el valor del state
        const timeout = setTimeout( () => {
            setDebouncedValue( input );
        }, delay )
        //Desmontamos el componente cuando el valor de entrada cambia nuevamente
        return () => {
            clearTimeout( timeout );
        }
    }, [input])


    return debouncedValue;
};

export default useDelayedFunctionCall;
