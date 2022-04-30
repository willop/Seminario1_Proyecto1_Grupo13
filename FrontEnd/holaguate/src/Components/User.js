import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {Form, Button } from 'react-bootstrap';
import BarraNavegacion from './BarraNavegacion/BarraNavegacion'
import '../Style/User.css'
import Cookies from 'universal-cookie'

export default function User() {

    const cookies = new Cookies();
    const { name } = useParams();
    const [estadopag, setestadopag]=useState(false)
    const [usernamelog, setusername] = useState(cookies.get('cookieIDUsuario'))
    const [datos, setDatos] = useState({
        ID_usuario: '',
        Username: '',
        Nacionalidad:'',
        Nombre_usuario:'',
        Edad:"",
        Foto: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
    })
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
            //console.log(json)
            console.log(json)
            setDatos(json)
            //cookies.set('cookienombre',valname,{path: '/'})

        } catch (error) {
        }
    }


    return (
        <div id="Fondoo" >
            <BarraNavegacion />
            <div id="image">
                <center>
                <img src={"data:image/png;base64,"+datos.Foto} id="img"/>
                <br/>
                <br/>
                <h1> ID: {datos.ID_usuario}</h1>
                </center>
            </div>
            <div id="Formulario">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><h4>Usuario</h4></Form.Label>
                        <Form.Control placeholder="Disabled input" disabled  value={datos.Username} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNombre">
                        <Form.Label><h4>Nombre</h4></Form.Label>
                        <Form.Control placeholder="Disabled input" disabled value={datos.Nombre_usuario} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNacionalidad">
                        <Form.Label><h4>Nacionalidad</h4></Form.Label>
                        <Form.Control placeholder="Disabled input" disabled  value={datos.Nacionalidad} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEdad">
                        <Form.Label><h4>Edad</h4></Form.Label>
                        <Form.Control placeholder="Disabled input" disabled  value={datos.Edad} />
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}
