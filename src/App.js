
import './App.css';

import AppRouter from "./router/AppRouter";
import {ProductosGeneral} from "./productos/components/ProductosGeneral";


import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import {Link, Navigate} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {Route, Routes} from "react-router";
import {ProductRoutes} from "./productos/routes/ProductRoutes";


function App() {

    const params1 = new URLSearchParams(window.location.search);
    const user = params1.get('user');
    console.log(user);

    // if (window.location.pathname === '/') {
    //     // <Nav.Link as={Link} to="/ingreso">ORDENES </Nav.Link>
    //     console.log("test")
    //     return <Navigate to="/avanexrea" />;
    // }
    return (
        <>
            <AppRouter user={user}></AppRouter>
        </>
    );

}

export default App;
