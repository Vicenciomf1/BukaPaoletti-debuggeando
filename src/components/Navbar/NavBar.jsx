import React from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';


function NavBar() {
    return (
        <>
            <Navbar key={"md"} expand={"md"} className=" navbar">
                <Container fluid>
                    <NavLink className="logo navbar-brand" to="/">
                        <img
                            src="../../../Assets/Logo/logobar.png"
                            width="50"
                            height="50"
                            className="rounded-circle"
                            alt="Buka logo" />
                    </NavLink>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
                    <Navbar.Offcanvas className="offcanvas"
                        id={`offcanvasNavbar-expand-${"md"}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
                        placement="start">
                        <Offcanvas.Header closeButton>
                            <NavLink to="/">
                                <img
                                    src="../../../Assets/Logo/logobar.png"
                                    width="50"
                                    height="50"
                                    className="rounded-circle navbar-brand"
                                    alt="Buka logo" />
                            </NavLink>
                            <Offcanvas.Title className="m-auto" id={`offcanvasNavbarLabel-expand-${"md"}`}>
                                Buka Templo
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <NavLink className="p-1 list navbar-brand" to="/home">Home</NavLink>
                                <NavLink className="p-1 list navbar-brand" to="/nosotros">Nosotros</NavLink>
                                <NavLink className="p-1 list navbar-brand" to="/">Tienda</NavLink>
                                <NavLink className="p-1 list navbar-brand" to="/contacto">Contacto</NavLink>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Nav>
                        <NavLink to="#"><CartWidget content={0}/></NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar