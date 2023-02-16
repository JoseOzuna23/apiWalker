import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Buscar from './Buscar'
import Mostrar from './Mostrar'

const Walker = () => {
    const params = useParams();
    const [opcion, setOpcion] = useState("");
    const [id, setIdBuscar] = useState("");
    const [databuscar, setDataBuscar] = useState(false);
    return (
        <div>
            <h1> hola</h1>
            <Buscar
                setOpcion={setOpcion}
                setIdBuscar={setIdBuscar}
                setDataBuscar={setDataBuscar}
            />
            <Mostrar
            opcion={opcion}
            id ={id}
            databuscar={databuscar}
            setDataBuscar={setDataBuscar}
            />


        </div>
    );
};

export default Walker
