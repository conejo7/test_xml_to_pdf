import React from 'react';
import Navbar from "../components/Navbar";
import {Route, Routes} from "react-router";
import {ProductosGeneral} from "../components/ProductosGeneral";

export const ProductRoutes = () => {
    return (
        <>
            <Routes>

                <Route path="table" element={<ProductosGeneral/>}/>

            </Routes>
        </>
    );
};

