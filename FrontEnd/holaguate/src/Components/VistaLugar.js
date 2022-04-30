import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BarraNavegacion from './BarraNavegacion/BarraNavegacion'
import Indes from './StarRating/indes.js'
import '../Style/VistaLugar.css'
import {BiStar} from 'react-icons/bi'
import Cookies from 'universal-cookie'
import { ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function VistaLugar() {

    const cookies = new Cookies();
    const { id } = useParams();
    const [idusuario,setidusuario] = useState(5)
    const [usernamelog, setusername] = useState(cookies.get('cookieIDUsuario'))
    const [estadopag, setestadopag] = useState(false)
    const [desctraduct, setdesctraduc] = useState("Esta es una descripcion para una prueba,Esta es una descripcion para una prueba, Esta es una descripcion para una prueba, Esta es una descripcion para una prueba, Esta es una descripcion para una prueba.");
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
            //console.log('valor de la respuesta json')
            //console.log(json)
            //console.log(json)
            setinfor(json)
            setdesctraduc(json.Descripcion)
        } catch (error) {
        }

        try {
            let configuracion = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "username": usernamelog })
            }
            let respuesta = await fetch('http://localhost:5000/perfil', configuracion)
            //let respuesta = await fetch('http://18.208.114.136:5000/home', configuracion)
            let json = await respuesta.json();
            console.log('valor de la respuesta json')
            console.log(json.ID_usuario)
            setidusuario(json.ID_usuario)
        } catch (error) {
        }
    }

    const Traducirinfo = async (idioma) => {
        console.log("dentro de la app")
        console.log(id)
        try {
            let configuracion = {
                mode:'cors',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "idioma":idioma, "texto": info.Descripcion })
            }
            let respuesta = await fetch('https://kd3ax2acy6.execute-api.us-east-1.amazonaws.com/traducir ', configuracion)
            //let respuesta = await fetch('http://18.208.114.136:5000/home', configuracion)
            let json = await respuesta.json();
            setinfor({...info,'Descripcion': json.traduccion})
            console.log(info);
            //console.log(json)
            console.log(json)

            //cookies.set('cookienombre',valname,{path: '/'})
        } catch (error) {
        }
    }

    const AddFavoritos = async (idioma) => {
        console.log("dentro de la app")
        console.log(id)
        try {
            let configuracion = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "idUsuario":idusuario, "idLugar": info.ID_lugar })
            }
            let respuesta = await fetch('http://localhost:5000/agregarFavoritos', configuracion)
            //let respuesta = await fetch('http://18.208.114.136:5000/home', configuracion)
            let json = await respuesta.json();
            console.log('valor de la respuesta json')
            //console.log(json)
            console.log(json)
            if(json.response == true){
                //si es true redirect
                await Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Lugar añadido a favoritos',
                    button: "Aceptar"
                  })
              }
              else{
                await Swal.fire({
                  position: 'top-center',
                  icon: 'error',
                  title: 'No se ha podido agregar a favoritos',
                  button: "Aceptar"
                })
              }

            //cookies.set('cookienombre',valname,{path: '/'})
        } catch (error) {
        }
    }

    const cambioidioma = async (event) => {
        console.log(event.target.value)
        if (event.target.value == 1) {
            Traducirinfo("es")
        } else if (event.target.value == 2) {
            Traducirinfo("en")
        } else if (event.target.value == 3) {
            Traducirinfo("fr")
        }else {
            Traducirinfo("zh")
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
                            <div id="TraduccionLugar">
                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                    <ToggleButton id="tbg-radio-1" value={1} onChange={cambioidioma}>
                                        Español
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-2" value={2} onChange={cambioidioma}>
                                        Ingles
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-3" value={3} onChange={cambioidioma}>
                                        Frances
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-4" value={4} onChange={cambioidioma}>
                                        Mandarin
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                            <h5>{info.Descripcion} </h5>
                            <br />
                            <Button variant="warning" onClick={AddFavoritos}>
                                <BiStar/> Favoritos
                            </Button>
                            <br />
                            <br />
                        </div>
                    </div>
                </center>
            </div>
            
        </div>
    )
}
