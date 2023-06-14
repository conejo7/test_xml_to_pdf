import React from 'react';

import {Route, Routes} from "react-router";
import {ProductosGeneral} from "../components/ProductosGeneral";
import {NaveBar} from "../components/NaveBar";

export const ProductRoutes = ({user}) => {
    return (
        <>

            <NaveBar user={user}/>
            <Routes>

                <Route path="ingreso" element={<ProductosGeneral/>}/>

            </Routes>
        </>
    );
};

