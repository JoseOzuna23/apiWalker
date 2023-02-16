import React, { useState } from 'react'

const Buscar = ({ setOpcion, setIdBuscar, setDataBuscar }) => {
    const [opciones, setOpciones] = useState([
        "people",
        "planets",
        "films",
        "species",
    ]);
    const [seleccionada, setSeleccionada] = useState("");
    const [id, setId] = useState("");

    function buscar(e) {
        e.preventDefault();
        //console.log(e,"ingreso al envento")
        if(seleccionada===""|| id===""){
            return;
        }
        setOpcion(seleccionada);
        setIdBuscar(id);
        setDataBuscar(true);
    }
    return (
        <div>

            <div>
                <select onChange={e => setSeleccionada(e.target.value)}>
                    <option value="">Eije una opcion</option>
                    {
                        opciones.map((e, indice ) => (
                            <option key={indice} value={e}>{e}</option>
                        ))
                    }
                </select>
            </div>
            <form>
                <label htmlFor=""> Ingresa el id</label>
                <input type="number" onChange={(e) => setId(e.target.value)} />
                <button onClick={buscar}> Buscar</button>
            </form>

        </div>
    )
}

export default Buscar
