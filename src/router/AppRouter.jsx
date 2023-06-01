import React from 'react';
import {Route, Routes} from "react-router";
import {ProductRoutes} from "../productos/routes/ProductRoutes";
// import ProductRoutes from "../productos/routes/ProductRoutes";

export const AppRouter = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    {/*<Route path="login" element={<Login/>}/>*/}
                    <Route path="/*" element={<ProductRoutes/>}/>
                </Routes>

            </div>
        </>

    );
};

export default AppRouter;



