import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { GiGuatemala } from "react-icons/gi";
import {BiUser,BiLogIn} from 'react-icons/bi'
import {RiLockPasswordLine} from 'react-icons/ri'
import '../Style/Login.css'


export default function Login() {
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
                        <Form.Control type="email" placeholder="Ingrese email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><RiLockPasswordLine/> Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <center>
                    <Button variant="primary" href='/home'>
                        Login<BiLogIn/>
                    </Button>
                    </center>
                </Form>
                </h2>
            </div>
            
        </div>
    )
}
