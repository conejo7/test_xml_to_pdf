import React, {useState} from "react";
import {ExportExcel} from "./ExportExcel";

import BarrasBusqueda from "./BarrasBusqueda";
import OrdenesFilas from "./OrdenesFilas";
import ProductTable from "./ProductTable";


function FilterableProductTable({products, filterEmpresa, setFilterEmpresa,
                                    filterNextlab, setFilterNextlab,
                                    filterAvasus, setFilterAvasus,
                                    filterCedula, setFilterCedula,
                                    filterApellido,setFilterApellido,
                                    filterHistoria,setFilterHistoria,
                                    filterNombre,setFilterNombre}  ) {

    // const [filterText, setFilterText] = useState('');
    // const [filterTextApellido, setFilterTextApellido] = useState('');
    // const [filterAvasus, setFilterAvasus] = useState('');
    // const [filterNextlab, setFilterNextlab] = useState('');
    // const [filterCedula, setFilterCedula] = useState('');
    // const [filterEmpresa, setFilterEmpresa] = useState('');
    // const [filterHistoria, setfilterHistoria] = useState('');

    return (
        <>
            <div>
                <div className="container text-left">
                    <div className="row">
                        <div className="col">
                            {/*<BarrasBusqueda*/}
                            {/*    filterText={filterText}*/}
                            {/*    onFilterTextChange={setFilterText}*/}

                            {/*    filterTextApellido={filterTextApellido}*/}
                            {/*    onFilterTextChangeApellido={setFilterTextApellido}*/}

                            {/*    filterAvasus={filterAvasus}*/}
                            {/*    onFilterAvasus={setFilterAvasus}*/}

                            {/*    filterNextlab={filterNextlab}*/}
                            {/*    onFilterNextlab={setFilterNextlab}*/}

                            {/*    filterCedula={filterCedula}*/}
                            {/*    onFilterCedula={setFilterCedula}*/}

                            {/*    filterEmpresa={filterEmpresa}*/}
                            {/*    onFilterEmpresa={setFilterEmpresa}*/}

                            {/*    filerHistoria={filterHistoria}*/}
                            {/*    onFilterHistoria={setfilterHistoria}*/}

                            {/*/>*/}
                        </div>
                    </div>
                    <br/>
                </div>
                <br/>
                <ProductTable
                    products={products}
                    filterNombre={filterNombre}
                    filterTextApellido={filterApellido}
                    filterAvasus={filterAvasus}
                    filterNextlab={filterNextlab}
                    filterCedula={filterCedula}
                    filterEmpresa={filterEmpresa}
                    filterHistoria={filterHistoria}
                />
            </div>
        </>
    );
}

export function ProductsTable( {ordenes,
                                   filterEmpresa, setFilterEmpresa,
                                   filterNextlab, setFilterNextlab,
                                   filterAvasus, setFilterAvasus,
                                   filterCedula, setFilterCedula,
                                   filterApellido, setFilterApellido,
                                   filterHistoria,setFilterHistoria,
                                   filterNombre, setFilterNombre }) {

    return <FilterableProductTable products={ordenes}
                                   filterEmpresa={filterEmpresa}
                                   setFilterEmpresa={setFilterEmpresa}

                                   filterNextlab={filterNextlab}
                                   setFilterNextlab={setFilterNextlab}

                                   filterAvasus={filterAvasus}
                                   setFilterAvasus={setFilterAvasus}

                                   filterCedula={filterCedula}
                                   setFilterCedula={setFilterCedula}

                                   filterApellido={filterApellido}
                                   setFilterApellido={setFilterApellido}

                                   filterHistoria={filterHistoria}
                                   setFilterHistoria={setFilterHistoria}

                                   filterNombre={filterNombre}
                                   setFilterNombre={setFilterNombre}

    />;
}


