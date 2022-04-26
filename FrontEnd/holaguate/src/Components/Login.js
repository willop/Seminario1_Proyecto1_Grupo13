import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { GiGuatemala } from "react-icons/gi";
import {BiUser,BiLogIn,BiCamera,BiUserPlus} from 'react-icons/bi'
import {RiLockPasswordLine} from 'react-icons/ri'
import Cookies from 'universal-cookie'
import '../Style/Login.css'
import Swal from 'sweetalert2'


export default function Login() {

    const [datos,setDatos] = useState({
        username: '',
        password: ''
    }) 



    const handleuserchange = (evt) =>{
        const value = evt.target.value;
      setDatos({
        ...datos,
        [evt.target.name]: value
      });
        //console.log(datos.username)
        //console.log(datos.password)
    }


    const enviarDatos = async(event)=>{
        //var md5 = require('md5');
        //var nuevacontra = md5(datos.password)
        //datos.password = nuevacontra
        //.log(datos)
        try {
            let configuracion = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            }
            let respuesta = await fetch('http://localhost:5000/login', configuracion)
            //let respuesta = await fetch('http://18.208.114.136:5000/login', configuracion)
            let json = await respuesta.json();
            //.log('valor de la respuesta json')
            //.log(json)
            let resp = json.response
            if(resp == true){
              //si es true redirect
              const cookies = new Cookies();
              cookies.set('cookieIDUsuario',datos.idUsuario,{path:'/'});
              window.location.href = "/home";
            }
            else{
              await Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Usuario o contraseña invalidos',
                button: "Aceptar"
              })
            }
            //validacion si es true  o false
            //realizar la redireccion de pagina
        } catch (error) {
        }
      }

    return (
        <div id="id_divgeneral">
        <center><h1>HolaGuate</h1></center>
            <div id='div_formulario'>
                <center>
                <div id="iconoo">
                   <GiGuatemala/>
                </div>
                </center>
                <h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><BiUser/> Usuario</Form.Label>
                        <Form.Control name="username" type="email" placeholder="Ingrese email" onChange={handleuserchange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><RiLockPasswordLine/> Contraseña</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Contraseña" onChange={handleuserchange}/>
                    </Form.Group>
                    <center>
                    <Button variant="primary" href='/home'>
                        Login<BiLogIn/>
                    </Button>
                    <br/>
                    <Button variant="success" href='/loginCamara'>
                        Login camara <BiCamera/>
                    </Button>
                    <Button variant="warning" href='/crearUsuario'>
                        Crear usuario <BiUserPlus/>
                    </Button>
                    </center>
                </Form>
                </h2>
            </div>
            
        </div>
    )
}
