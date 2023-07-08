import React from 'react';

import {Route, Routes} from "react-router";
import {ProductosGeneral} from "../components/ProductosGeneral";
import {NaveBar} from "../components/NaveBar";
import {PracticasxOrden} from "../components/PracticasxOrden";

export const ProductRoutes = ({user}) => {
    return (
        <>
            <NaveBar user={user}/>
            <Routes>
                <Route path="ingreso" element={<ProductosGeneral/>}/>
                <Route path="pracxordenes" element={<PracticasxOrden/>}/>
                <Route path="/*" element={<ProductosGeneral/>}/>

            </Routes>
        </>
    );
};

