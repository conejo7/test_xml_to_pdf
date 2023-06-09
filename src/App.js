
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

            <div className="col align-self-center">
                <h2>User ID: {user}</h2>
            </div>


            <ProductosGeneral />
            <AppRouter></AppRouter>
        </>
    );

}

export default App;
