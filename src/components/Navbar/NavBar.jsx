import React from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';


function NavBar() {
    return (
        <>
            <Navbar key={"md"} expand={"md"} className=" navbar">
                <Container fluid>
                    <Link className="logo navbar-brand" to="/home">
                        <img
                            src="../../../Assets/Logo/logobar.png"
                            width="50"
                            height="50"
                            className="rounded-circle"
                            alt="Buka logo" />
                    </Link>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
                    <Navbar.Offcanvas className="offcanvas"
                        id={`offcanvasNavbar-expand-${"md"}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
                        placement="start">
                        <Offcanvas.Header closeButton>
                            <Link to="/home">
                                <img
                                    src="../../../Assets/Logo/logobar.png"
                                    width="50"
                                    height="50"
                                    className="rounded-circle navbar-brand"
                                    alt="Buka logo" />
                            </Link>
                            <Offcanvas.Title className="m-auto" id={`offcanvasNavbarLabel-expand-${"md"}`}>
                                Buka Templo
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <Link className="p-1 list navbar-brand" to="/home">Home</Link>
                                <Link className="p-1 list navbar-brand" to="/nosotros">Nosotros</Link>
                                <Link className="p-1 list navbar-brand" to="/">Tienda</Link>
                                <Link className="p-1 list navbar-brand" to="/contacto">Contacto</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Nav>
                        <Link to="/cartView"><CartWidget content={0}/></Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar