import React, {useState} from "react";
import {ExportExcel} from "./ExportExcel";
import DatePicker from "react-datepicker";
import ExportExcelStyle from "../styles/ExportExcelStyle.css"


function ProductRow({product}) {
    //const stock = product.stock > 0 ? product.stock : "No tiene Stock"
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
}

function ProductTable({
                          products,
                          filterText, filterTextApellido, filterAvasus,
                          filterNextlab, filterCedula, filterEmpresa, filterHistoria
                      }) {
    const rows = [];
    const ordenes = [];
    console.log(filterText);
    products.forEach((elem) => {

        if (elem.nombres.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
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
            <ProductRow
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
                    <th>APELLIDOS</th>
                    <th>NOMBRES</th>
                    <th>CEDULA</th>
                    <th>EMPRESA</th>
                    <th>MED. SOLICITANTE</th>
                    <th>ESTADO</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
            {/*<Export ordenes={rows}/>*/}
        </>

    );
}

function SearchBar({
                       filterText, onFilterTextChange,
                       filterTextApellido, onFilterTextChangeApellido,
                       filterAvasus, onFilterAvasus,
                       filterNextlab, onFilterNextlab,
                       filterCedula, onFilterCedula,
                       filterEmpresa, onFilterEmpresa,
                       filerHistoria, onFilterHistoria
                   }) {
    const handleClear = () => {
        onFilterTextChange('');
        onFilterTextChangeApellido('');
        onFilterAvasus('');
        onFilterNextlab('');
        onFilterCedula('');
        onFilterEmpresa('');
        onFilterHistoria('');
        };
    return (
        <>
            <div className="container text-left">
                <div className="row">
                    <div className="col">
                        <form>
                            <br/>
                            Nextlab:
                            <br/>
                            <input
                                type={"number"}
                                placeholder={"Buscando por Nextlab..."}
                                value={filterNextlab}
                                onChange={(e) => onFilterNextlab(e.target.value)}
                            />
                            <br/>
                        </form>
                    </div>
                    <div className="col">
                        <form>
                            <br/>
                            Avasus:
                            <br/>
                            <input
                                type={"number"}
                                placeholder={"Buscando por Avasus..."}
                                value={filterAvasus}
                                onChange={(e) => onFilterAvasus(e.target.value)}
                            />
                            <br/>
                        </form>
                    </div>
                    <div className="col">
                        <form>
                            <br/>
                            Cédula:
                            <br/>
                            <input
                                type={"number"}
                                placeholder={"Buscando por cédula..."}
                                value={filterCedula}
                                onChange={(e) => onFilterCedula(e.target.value)}
                            />
                            <br/>
                        </form>
                    </div>
                    <div className="col">
                        <form>
                            <br/>
                            Id Historia Avasus:
                            <br/>
                            <input
                                type={"number"}
                                placeholder={"Buscando por Id Historia..."}
                                value={filerHistoria}
                                onChange={(e) => onFilterHistoria(e.target.value)}
                            />
                            <br/>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form>
                            <br/>
                            Apellido:
                            <br/>
                            <input
                                type={"text"}
                                placeholder={"Buscando por Apellido..."}
                                value={filterTextApellido}
                                onChange={(e) => onFilterTextChangeApellido(e.target.value)}
                            />
                            <br/>
                        </form>
                    </div>
                    <div className="col">
                        <form>
                            <br/>
                            Nombre:
                            <br/>
                            <input
                                type={"text"}
                                placeholder={"Buscando..."}
                                value={filterText}
                                onChange={(e) => onFilterTextChange(e.target.value)}
                            />
                            <br/>
                        </form>
                    </div>
                    <div className="col">
                        <form>
                            <br/>
                            Empresa:
                            <br/>
                            <input
                                type={"text"}
                                placeholder={"Buscando por Empresa..."}
                                value={filterEmpresa}
                                onChange={(e) => onFilterEmpresa(e.target.value)}
                            />
                            <br/>
                        </form>
                    </div>
                    <div className="col">
                        <br/>
                                <button className="btn btn-primary align-center" onClick={handleClear}>Limpiar Campos</button>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    );
}

function FilterableProductTable({products}) {
    const [filterText, setFilterText] = useState('');
    const [filterTextApellido, setFilterTextApellido] = useState('');
    const [filterAvasus, setFilterAvasus] = useState('');
    const [filterNextlab, setFilterNextlab] = useState('');
    const [filterCedula, setFilterCedula] = useState('');
    const [filterEmpresa, setFilterEmpresa] = useState('');
    const [filterHistoria, setfilterHistoria] = useState('');


    // const handleClear = () => {
    //     setFilterText('');
    //     setFilterTextApellido('');
    //     setFilterAvasus('');
    //     setFilterNextlab('');
    //     setFilterCedula('');
    //     setFilterEmpresa('');
    //     setfilterHistoria('');
    // };
    return (
        <>
            <div>
                <div className="container text-left">
                    <div className="row">
                        <div className="col">
                            <SearchBar
                                filterText={filterText}
                                onFilterTextChange={setFilterText}

                                filterTextApellido={filterTextApellido}
                                onFilterTextChangeApellido={setFilterTextApellido}

                                filterAvasus={filterAvasus}
                                onFilterAvasus={setFilterAvasus}

                                filterNextlab={filterNextlab}
                                onFilterNextlab={setFilterNextlab}

                                filterCedula={filterCedula}
                                onFilterCedula={setFilterCedula}

                                filterEmpresa={filterEmpresa}
                                onFilterEmpresa={setFilterEmpresa}

                                filerHistoria={filterHistoria}
                                onFilterHistoria={setfilterHistoria}

                            />
                        </div>
                    </div>
                    <br/>

                    {/*<div className="row">*/}
                    {/*    <div className="col">*/}
                    {/*        <button className="btn btn-primary align-right" onClick={handleClear}>Limpiar Campos*/}
                    {/*        </button>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                </div>

                <br/>
                <ProductTable
                    products={products}
                    filterText={filterText}
                    filterTextApellido={filterTextApellido}
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

export function ProductsTable(products) {
    const {ordenes} = products;
    //{ordenes, startDate}
    //console.log("Fecha" + startDate);
    // console.log("PRdocu2"+ordenes);
    return <FilterableProductTable products={ordenes}/>;
}


