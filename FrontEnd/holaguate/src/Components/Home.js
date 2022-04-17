import React, { useState } from 'react'
import '../Style/Home.css'
import Carta from './Elementos/Carta'
import BarraNavegacion from './BarraNavegacion/BarraNavegacion'


export default function Home() {

    const [albumes, setalbumes] = useState(
        [
            {
                "name": "ejj"
            },
            {
                "name": "sdfas"
            },
            {
                "name": "histdsfasdfasorias"
            },
            {
                "name": "perasdfasdfl"
            },
            {
                "name": "sdfas"
            },
            {
                "name": "histdsfasdfasorias"
            },
            {
                "name": "perasdfasdfl"
            }
        ]
    )

    return (
        <div>
            <BarraNavegacion />
            <div id="Head">
                <center><b>Bienvenido</b>
                    <h2>Encuentra nuevos lugares dentro de Guatemala.</h2>
                </center>
            </div>
            <hr size="10px" color="black" />
            <div id="cuerpo">
                <div id="contenedor" >
                    {albumes.map((varalbum,index) => {
                        return (
                            <div key={index} className="roww">
                               <Carta  key={index} nombre={varalbum.name} id={index}/>
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
