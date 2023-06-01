import React, {useEffect, useState} from 'react';
import {ProductsTable} from "./ProductsTable";
import {getOrdersByDate} from "../helpers/getOrdenes";



export const ProductosGeneral = () => {

    const [ordenes, setOrdenes] = useState([]);
    const getOrdenes = async () => {
        const newOrdenes = await getOrdersByDate();
        setOrdenes(newOrdenes);

    }
    useEffect(() => {
        getOrdenes();
    }, [])

    return (
        <>
            <div>
                <ProductsTable ordenes ={ordenes}/>
            </div>

        </>
    );
};

