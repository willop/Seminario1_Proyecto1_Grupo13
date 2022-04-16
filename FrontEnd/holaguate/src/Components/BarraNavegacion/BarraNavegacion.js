import React from 'react'
import { GiGuatemala } from "react-icons/gi";
import {BiLogOut} from "react-icons/bi"
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function BarraNavegacion() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><GiGuatemala/> HolaGuate</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Cerrar sesion <BiLogOut/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
