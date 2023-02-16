import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Mostrar =({opcion, id, databuscar, setDataBuscar})=> {

    const [resulado, setResultado] = useState({});
    
    useEffect(() =>{
        axios.get(`https://swapi.dev/api/${opcion}/${id}/`)
        .then(res=>{
            console.log(res.data);
            setResultado(res.data);
        })
        .catch(error=>{
            console.log(error);
            setDataBuscar(false);
        })
    },[databuscar]);
    return (
        <div>
            <h2> {resulado.name ? resulado.name : resulado.name}</h2>
            <pre>
                {JSON.stringify(resulado, null, 2)}
            </pre>

        </div>
    )
}

export default Mostrar
