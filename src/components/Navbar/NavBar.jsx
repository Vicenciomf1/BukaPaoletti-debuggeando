import React from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <>
            <Navbar key={"md"} expand={"md"} className=" navbar">
                <Container fluid>
                    <Navbar.Brand className="logo" href="#action1">
                        <img
                            src="./img/logobar.png"
                            width="50"
                            height="50"
                            className="rounded-circle"
                            alt="Buka logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
                    <Navbar.Offcanvas className="offcanvas"
                        id={`offcanvasNavbar-expand-${"md"}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
                        placement="start">
                        <Offcanvas.Header closeButton>
                            <Navbar.Brand href="#action1">
                                <img
                                    src="./img/logobar.png"
                                    width="50"
                                    height="50"
                                    className="rounded-circle"
                                    alt="Buka logo" />
                            </Navbar.Brand>
                            <Offcanvas.Title className="m-auto" id={`offcanvasNavbarLabel-expand-${"md"}`}>
                                Buka Templo
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <Navbar.Brand className="p-1 list" href="#action1">Home</Navbar.Brand>
                                <Navbar.Brand className="p-1 list" href="#action2">Nosotros</Navbar.Brand>
                                <Navbar.Brand className="p-1 list" href="#action3">Shop</Navbar.Brand>
                                <Navbar.Brand className="p-1 list" href="#action4">Contacto</Navbar.Brand>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Nav>
                        <Navbar.Brand href="#carrito"><CartWidget content={0}/></Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar