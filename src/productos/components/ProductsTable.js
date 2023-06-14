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

function ProductTable({products,
                          filterText, filterTextApellido, filterAvasus,
                            filterNextlab,filterCedula,filterEmpresa}) {
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


        rows.push(
            <ProductRow
                product={elem}
                key={elem.id}/>
        );
        ordenes.push(elem);
    });

    return (
        <>
            <ExportExcel ordenes={ordenes}/>
            <table className="table table-bordered">
                <thead className="table table-warning ">
                <tr>
                    <th>FECHA INGRESO</th>
                    <th>NEXTLAB</th>
                    <th>Id AVASUS</th>
                    <th>HISTORIA</th>
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
                       filterCedula,  onFilterCedula,
                       filterEmpresa,onFilterEmpresa
                   }) {

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


    const handleClear = () => {
        setFilterText('');
        setFilterTextApellido('');
        setFilterAvasus('');
        setFilterNextlab('');
        setFilterCedula('');
        setFilterEmpresa('');
    };
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
                            />
                        </div>
                    </div>
                    <br/>

                    <div className="row">
                        <div className="col">
                            <button className="btn btn-primary align-right" onClick={handleClear}>Limpiar Campos</button>
                        </div>

                    </div>
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
                />
            </div>

        </>
    );
}

export function ProductsTable(products) {
    const {ordenes} = products;
    //{ordenes, startDate}
    //console.log("Fecha" + startDate);
    //console.log("PRdocu2"+ordenes);
    return <FilterableProductTable products={ordenes}/>;
}


