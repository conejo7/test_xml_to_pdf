import React from 'react';
import {Route, Routes} from "react-router";
import {ProductRoutes} from "../productos/routes/ProductRoutes";
// import ProductRoutes from "../productos/routes/ProductRoutes";

export const AppRouter = ({user}) => {

    return (
        <>
            {/*<div className="container">*/}
            {/*<div className="react-datepicker__month-dropdown-container--select">*/}
                <div className="container-fluid">
                <Routes>
                    {/*<Route path="login" element={<Login/>}/>*/}
                    <Route path="/*" element={<ProductRoutes user={user}/>}/>
                </Routes>

            </div>
        </>

    );
};

export default AppRouter;



