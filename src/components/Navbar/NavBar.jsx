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
            <Navbar key={"md"} expand={"md"} className="mb-3 navbar">
                <Container fluid>
                    <Navbar.Brand className="brand" href="#action1">
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
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                            Buka - bar de cervezas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="m-auto link">
                                <Nav.Link className="px-3" href="#action1">Home</Nav.Link>
                                <Nav.Link className="px-3" href="#action2">Nosotros</Nav.Link>
                                <Nav.Link className="px-3" href="#action3">Shop</Nav.Link>
                                <Nav.Link className="px-3" href="#action4">Contacto</Nav.Link>
                            </Nav>
                            <Nav className="cart">
                            <Nav.Link href="#carrito"><CartWidget /></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar