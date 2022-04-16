import React from 'react';
import {  Card, Button } from 'react-bootstrap';
import {  Link } from 'react-router-dom'
import '../../Style/Carta.css'

const Carta = (props) => {

    return (
        <div>
            <center>
            <Card style={{ width: '80%' ,}} id="carta">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>
                        {props.nombre}
                    </Card.Text>
                    <Button variant="primary" ><Link to={`/prueba/${props.id}`}>Go somewhere</Link></Button>
                </Card.Body>
            </Card>
            </center>
        </div>
    )
}

export default Carta