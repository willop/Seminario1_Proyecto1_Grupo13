import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BarraNavegacion from './BarraNavegacion/BarraNavegacion'
import Indes from './StarRating/indes.js'
import '../Style/VistaLugar.css'

export default function VistaLugar() {
    const { id } = useParams();
    const [estadopag, setestadopag] = useState(false)
    const [info, setinfor] = useState(
        {
            "ID_lugar": 1,
            "Nombre": "Nombre de lugar de prueba",
            "Lugar": "Lugar de prueba",
            "Foto": "https://www.guatevalley.com/photo.php?man=379&mal=248&ltid=photo/photo_a1/141/1fG6GPV9BGqmwGDW5d6A.jpg",
            "Puntuacion": 3,
            "Tipo": "Tipo prueba",
            "Descripcion": "Esta es una descripcion para una prueba,Esta es una descripcion para una prueba, Esta es una descripcion para una prueba, Esta es una descripcion para una prueba, Esta es una descripcion para una prueba ."
        }
    );


    useEffect(function () {
        //console.log("Hola al iniciar la app")
        if (estadopag == false) {
            InicioDatos()
            setestadopag(true)
        }
        else {
            setestadopag(true)
        }
    })

    const InicioDatos = async (event) => {
        console.log("dentro de la app")
        console.log(id)
        try {
            let configuracion = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "nombre": id })
            }
            let respuesta = await fetch('http://localhost:5000/vistaLugar', configuracion)
            //let respuesta = await fetch('http://18.208.114.136:5000/home', configuracion)
            let json = await respuesta.json();
            console.log('valor de la respuesta json')
            //console.log(json)
            console.log(json)
            setinfor(json)
            //cookies.set('cookienombre',valname,{path: '/'})
        } catch (error) {
        }
    }

    return (
        <div>
            <BarraNavegacion />
            <div id="Fondolugar">
                <center>
                    <div id="contenedor_total">
                        <div id="Titulo">
                            <h2>{info.Nombre} | {info.Lugar}</h2>
                        </div>
                        <br />
                        <br />
                        <div id="imagencontenedor">
                            <img id="imagenlugar" src={info.Foto} width="100%" />
                        </div>
                        {info.Nombre}
                        <br />
                        Puntuacion: <Indes stars={info.Puntuacion} />
                        <br />
                        Tipo: {info.Tipo}
                        <div>
                            <br />
                            <p> <h3> Descripcion </h3> </p>
                            {info.Descripcion}
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )
}
