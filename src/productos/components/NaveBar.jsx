import React, {useContext} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";
import NavbarStyle from "../styles/NavbarStyle.css"

export const NaveBar = ({user}) => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {replace: true});
    }

    return (
        <>

            <br/>
            <Navbar className="navbar">
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        User ID: {user}
                    </span>
                    </ul>
                </div>
                <Container >
                    <Navbar.Brand >AVASUS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/ingreso">ORDENES INGRESADAS</Nav.Link>
                        <Nav.Link as={Link} to="/pracxordenes">PRACTICAS POR ORDENES</Nav.Link>
                        {/*<Nav.Link as={Link} to="/pracxordenes2">PRACTICAS POR ORDENES2</Nav.Link>*/}
                        {/*<Nav.Link as={Link} to="/pracxordenes3">PRACTICAS POR ORDENES3</Nav.Link>*/}
                        {/*<Nav.Link as={Link} to="/table">PRODUCTOS GENERAL</Nav.Link>*/}
                        {/*<Nav.Link as={Link} to="/ingreso">ingreso </Nav.Link>*/}
                    </Nav>

                </Container>
            </Navbar>
            <br/>
        </>

    )
}