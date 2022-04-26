import React from 'react'
import { useParams } from 'react-router-dom';
import {Form, Button } from 'react-bootstrap';
import BarraNavegacion from './BarraNavegacion/BarraNavegacion'
import '../Style/User.css'

export default function User() {
    const { name } = useParams();
    console.log(name)
    return (
        <div id="Fondo" >
            <BarraNavegacion />
            <div id="image">
                <center>
                <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" id="img"/>
                </center>
            </div>
            <div id="Formulario">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <center>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </center>
                </Form>
            </div>
        </div>
    )
}
