import React, { useState,useEffect } from 'react'
import '../Style/Home.css'
import Carta from './Elementos/Carta'
import BarraNavegacion from './BarraNavegacion/BarraNavegacion'


export default function Home() {
    const [estadopag, setestadopag]=useState(false)
    const [albumes, setalbumes] = useState(
        [
            {
                "ID_lugar": 1,
                "Nombre": "Cascada El Salto o Los Amates",
                "Lugar": "Oratorio , Santa Rosa",
                "Foto": "https://www.guatevalley.com/photo.php?man=379&mal=248&ltid=photo/photo_a1/141/1fG6GPV9BGqmwGDW5d6A.jpg",
                "Puntuacion": "4.3",
                "Tipo": "Catarata",
                "Descripcion": "Sé parte de la aventura de Las Cataratas Los Amates llamadas también Cataratas del Niágara, en Oratorio. Practica rappel, disfruta del camping, cabalgatas y ecoturismo."
            },
            {
                "ID_lugar": 2,
                "Nombre": "Museo Regional del Trapiche",
                "Lugar": "San Jerónimo , Baja Verapaz",
                "Foto": "https://www.guatevalley.com/photo.php?man=379&mal=248&ltid=photo/photo_a1/1737/AVC228LI1OtkdtLvcn39.jpg",
                "Puntuacion": "4.5",
                "Tipo": "Museo",
                "Descripcion": "El Museo Regional del Trapiche presenta la historia del primer ingenio de caña de azúcar de Centroamérica, construido entre los años de 1549 al 1560."
            },
            {
                "ID_lugar": 3,
                "Nombre": "Iximche",
                "Lugar": "Tecpán , Chimaltenango",
                "Foto": "https://www.guatevalley.com/photo.php?man=379&mal=248&ltid=photo/photo_a1/1926/SAbvRsYZ8WxYQHsUkY3w.jpg",
                "Puntuacion": "4.8",
                "Tipo": "Sitio Arqueológico",
                "Descripcion": "Visita Iximche, la última capital de los Kaqchiqueles y la primera del reino español en Mesoamérica."
            },
            {
                "ID_lugar": 4,
                "Nombre": "Cueva de Chicoy",
                "Lugar": "Purulhá , Baja Verapaz",
                "Foto": "https://www.guatevalley.com/photo.php?man=379&mal=248&ltid=photo/photo_a1/1370/U624pFyhvwTZ2dqZ5qNJ.jpg",
                "Puntuacion": "3.8",
                "Tipo": "Cueva o gruta",
                "Descripcion": "En la cueva de Chicoy sentirás que se te va el alma, pues se ha descubierto que es un sitio sagrado con espíritus que deambulan dentro de ella."
            },
            {
                "ID_lugar": 5,
                "Nombre": "Panajachel",
                "Lugar": "Panajachel , Sololá",
                "Foto": "https://www.guatevalley.com/photo.php?man=379&mal=248&ltid=photo/photo_a1/1154/231CxzGGJdEYNGmXYWa6.jpg",
                "Puntuacion": "4.8",
                "Tipo": "Municipio",
                "Descripcion": "Viaja a Panajachel Sololá, y visita el Lago Atitlán, uno de los 100 lugares a ver antes de morir."
            }
        ]
    )


    useEffect(function () {
        //console.log("Hola al iniciar la app")
        if (estadopag == false) {
            InicioDatos()
            setestadopag(true)
        }
        else{
            setestadopag(true)
        }
    })

    const InicioDatos = async (event) => {
        //console.log("dentro de la app")
        try {
            let configuracion = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify({ "username": username })
            }
            let respuesta = await fetch('http://localhost:5000/home', configuracion)
            //let respuesta = await fetch('http://18.208.114.136:5000/home', configuracion)
            let json = await respuesta.json();
            console.log('valor de la respuesta json')
            //console.log(json)
            console.log(json.lugares)
            setalbumes(json.lugares)
            //cookies.set('cookienombre',valname,{path: '/'})

        } catch (error) {
        }
    }

    

    return (
        <div id="Fondo">
            <BarraNavegacion />
            <div id="Head">
                <center><b>Bienvenido</b>
                    <h2>Encuentra nuevos lugares dentro de Guatemala.</h2>
                </center>
            </div>
            <hr size="10px" color="black" />
            <div id="cuerpo">
                <div id="contenedor" >
                    {albumes.map((varalbum, index) => {
                        return (
                            <div key={index} className="roww">
                                <Carta key={index} nombre={varalbum.Nombre} image={varalbum.Foto} id={index} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <hr size="8px" color="black" />
            <div id="footer">

            </div>
        </div>
    )
}
