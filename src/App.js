
import './App.css';

import AppRouter from "./router/AppRouter";
import {ProductosGeneral} from "./productos/components/ProductosGeneral";


import "react-datepicker/dist/react-datepicker.css";
import React from "react";


function App() {

    const params1 = new URLSearchParams(window.location.search);
    const user = params1.get('user');
    console.log(user);

    return (
        <>

            {/*<div className="col align-self-left">*/}
            {/*    <h2>User ID: {user}</h2>*/}
            {/*</div>*/}

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-primary">
                        User ID: {user}
                    </span>
                </ul>
            </div>

            <ProductosGeneral />
            <AppRouter></AppRouter>
        </>
    );

}

export default App;
