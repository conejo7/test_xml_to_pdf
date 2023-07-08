import React from 'react';
import {Route, Routes} from "react-router";
import {ProductRoutes} from "../productos/routes/ProductRoutes";
import {Navigate} from "react-router-dom";
// import ProductRoutes from "../productos/routes/ProductRoutes";

export const AppRouter = ({user}) => {

    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path="/*" element={<ProductRoutes user={user}/>}/>
                    <Route path="/" element={<Navigate to="/avanexrea" />} />
                    <Route path="/avanexrea" element={<ProductRoutes user={user} />} />
                </Routes>

            </div>
        </>

    );
};

export default AppRouter;



