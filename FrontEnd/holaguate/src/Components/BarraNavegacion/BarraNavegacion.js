import React from 'react'
import { GiGuatemala } from "react-icons/gi";
import {BiLogOut,BiUser} from "react-icons/bi";
import {  Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function BarraNavegacion() {
    //const nombre = "Wilfred";
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home"><GiGuatemala/> HolaGuate</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link >Bienvenido</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href={`/user/${"Wilfred"}`} ><BiUser/> User</Nav.Link>
                            <Nav.Link >Cerrar sesion <BiLogOut/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
