import React, {useState} from 'react';
import OrdenesFilas from "./OrdenesFilas";
import {ExportExcel} from "./ExportExcel";

const ProductTable = ({
                          products,
                          filterNombre, filterTextApellido, filterAvasus,
                          filterNextlab, filterCedula, filterEmpresa, filterHistoria
                      }) => {

    const rows = [];
    const ordenes = [];
    const [sortConfig, setSortConfig] = useState({
        key: '',
        direction: '',
    });
    // console.log("prod"+products);

    function handleSort(columnKey) {
        let direction = 'asc';
        if (sortConfig.key === columnKey && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key: columnKey, direction });
    }

    const sortedProducts = [...products].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });


    // console.log("filter"+filterNombre);
    sortedProducts.forEach((elem) => {

        if (elem.nombres.toLowerCase().indexOf(filterNombre.toLowerCase()) === -1) {
            return;
        }
        if (elem.apellidos.toLowerCase().indexOf(filterTextApellido.toLowerCase()) === -1) {
            return;
        }
        if (elem.abreviatura.toLowerCase().indexOf(filterEmpresa.toLowerCase()) === -1) {
            return;
        }

        if (elem.id.indexOf(filterAvasus) === -1) {
            return;
        }
        if (elem.codOrd.indexOf(filterNextlab) === -1) {
            return;
        }
        if (elem.num_id.indexOf(filterCedula) === -1) {
            return;
        }
        if (elem.id_historia.indexOf(filterHistoria) === -1) {
            return;
        }

        rows.push(
            <OrdenesFilas
                product={elem}
                key={elem.id}/>
        );
        ordenes.push(elem);
    });




    return (
        <>
            <div className="row">
                <div className="col">
                    <h6>Número de filas: {rows.length}</h6>
                </div>
                <div className="col">
                    <ExportExcel ordenes={ordenes}/>
                </div>
            </div>

            <table className="table table-bordered">
                <thead className="table table-warning ">
                <tr>
                    <th>FECHA INGRESO</th>
                    <th>ID NEXTLAB</th>
                    <th>ID AVASUS</th>
                    <th>ID HISTORIA</th>
                    <th onClick={() => handleSort('apellidos')}>APELLIDOS</th>
                    <th onClick={() => handleSort('nombres')}>NOMBRES</th>
                    <th>CEDULA</th>
                    <th onClick={() => handleSort('abreviatura')} >EMPRESA</th>
                    <th>MED. SOLICITANTE</th>
                    <th>ESTADO</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </>
    );
};

export default ProductTable;
