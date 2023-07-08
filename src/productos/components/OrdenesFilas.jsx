import React from 'react';

const OrdenesFilas = ({product}) => {
    return (
        <>
            <tr>
                <td>{product.fec_ingreso}</td>
                <td>{product.codOrd}</td>
                <td>{product.id}</td>
                <td>{product.id_historia}</td>
                <td>{product.apellidos}</td>
                <td>{product.nombres}</td>
                <td>{product.num_id}</td>
                <td>{product.abreviatura}</td>
                <td>{product.m_solicitante}</td>
                <td>{product.sts_tecnico}</td>
            </tr>
        </>
    );
};

export default OrdenesFilas;
