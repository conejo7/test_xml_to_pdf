import React, {useEffect, useState} from 'react';
import {ProductsTable} from "./ProductsTable";
import {getOrdersByDate} from "../helpers/getOrdenes";
import DatePicker from "react-datepicker";
import moment from "moment";
import {getOrdersId} from "../helpers/getOrdenesId";
import {getEmpresas} from "../helpers/getEmpresas";

import {setSelectionRange} from "@testing-library/user-event/dist/utils";


export const ProductosGeneral = () => {

    const [ordenes, setOrdenes] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndtDate] = useState(new Date());

    const [startOrder, setstartOrder] = useState(0);
    const [endOrder, setendOrder] = useState(0);

    const [isLoading, setIsLoading] = useState(true);



    const [filterNextlab, setFilterNextlab] = useState('');
    const [filterAvasus, setFilterAvasus] = useState('');
    const [filterCedula, setFilterCedula] = useState('');
    const [filterTextApellido, setFilterTextApellido] = useState('');
    const [filterHistoria, setFilterHistoria] = useState('');
    const [filterNombre, setFilterNombre] = useState('');

    const [filterEmpresa, setFilterEmpresa] = useState('');
    const [empresas, setEmpresas] = useState([]);

    const getOrdenes = async () => {
        console.log("presiono")
        setIsLoading(true);
        const fechaFormateadaStart = moment(startDate, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ").format('YYYY-MM-DD');

        const fechaFormateadaEnd = moment(endDate, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ").format('YYYY-MM-DD');

        if (startOrder === 0) {
            const newOrdenes = await getOrdersByDate(fechaFormateadaStart, fechaFormateadaEnd);
            console.log(newOrdenes);
            setOrdenes(newOrdenes);
            setIsLoading(false);

        } else {
            const newOrdenes = await getOrdersId(startOrder, endOrder);
            console.log(newOrdenes);
            setOrdenes(newOrdenes);
            setIsLoading(false);
        }


        // const newOrdenes = await getOrdersByDate(fechaFormateadaStart, fechaFormateadaEnd);
        // console.log(newOrdenes);
        // setOrdenes(newOrdenes);
        // setIsLoading(false);
        console.log("filterEmpresa"+filterEmpresa +"setfilterEmpresa"+setFilterEmpresa);
        console.log("Empresa"+empresas +"setEmpresas"+setEmpresas);
    }

    const getEmpresa = async () => {

            const newEmpresas = await getEmpresas();
            console.log(newEmpresas);
             setEmpresas(newEmpresas);
            //setFilterEmpresa(newEmpresas);

    }

    useEffect(() => {
        getOrdenes();
        getEmpresa();
    }, []);

    if (isLoading) {
        return <div>Cargando datos...</div>;
    }

    const handleClear = () => {
        setFilterNombre('');
        setFilterTextApellido('');
        setFilterAvasus('');
        setFilterNextlab('');
        setFilterCedula('');
        setFilterEmpresa('');
        setFilterHistoria('');
        setstartOrder('');
        setendOrder('');

    };

    const handleSelectChange= (e) =>{
        const selectedValue = e.target.value;
        console.log("valor"+e.target.value);
        setFilterEmpresa(selectedValue);
    }
    console.log("fileter"+filterEmpresa);

    // const handleInputChange = (event) => {
    //     setFilterEmpresa(event.target.value);
    // };
    //
    // const handleSelectChange = (event) => {
    //     setFilterEmpresa(event.target.value);
    // };



    return (
        <>

            <div className="container text-left">
                <div className="row">
                    <div className="col">
                        ORDEN INICIO: <input type="number"
                                             placeholder={"Buscando por id avasus..."}
                                             value={startOrder}
                                             onChange={(startOrder) => setstartOrder(startOrder.target.value)}
                    />
                    </div>
                    <div className="col">
                        ORDEN FINAL: <input type="number"
                                            placeholder={"Buscando por id avasus..."}
                                            value={endOrder}
                                            onChange={(endOrder) => setendOrder(endOrder.target.value)}
                    />
                    </div>

                    <div className="col">
                        FECHA INICIO: <DatePicker dateFormat="dd/MM/yyyy" selected={startDate}
                                                  onChange={(date) => setStartDate(date)}/>
                    </div>
                    <div className="col">
                        FECHA FIN: <DatePicker dateFormat="dd/MM/yyyy" selected={endDate}
                                               onChange={(date1) => setEndtDate(date1)}/>
                    </div>
                    <div className="col">
                        Limite 20000 registros
                        <button type="button" className="btn btn-primary" onClick={() => getOrdenes()}>Buscar ...
                        </button>
                    </div>
                </div>
                <div className="row">
                    {/*<div className="col">*/}
                    {/*    <form>*/}
                    {/*        <br/>*/}
                    {/*        Empresa:*/}
                    {/*        <br/>*/}
                    {/*        <input*/}
                    {/*            type={"text"}*/}
                    {/*            placeholder={"Buscando por Empresa..."}*/}
                    {/*            value={filterEmpresa}*/}
                    {/*            onChange={(e) => setFilterEmpresa(e.target.value)}*/}
                    {/*        />*/}
                    {/*        <br/>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                    <div className="col">
                        <form>
                            <br/>
                            Empresa:
                            <br/>
                            <input
                                type={"text"}
                                placeholder={"Buscando por Empresa..."}
                                value={filterEmpresa}
                                onChange={(e) => setFilterEmpresa(e.target.value)}
                            />
                            <select value={filterEmpresa} onChange={handleSelectChange} style={{ width: '190px' }}>>
                                <option value="">Seleccionar empresa</option>
                                {empresas.map((empresa, index) => (
                                    <option key={index} value={empresa.Empresa}>
                                        {empresa.Empresa}
                                    </option>
                                ))}
                            </select>
                        </form>
                    </div>

                    <div className="col">
                        <form>
                            <br/>
                            Nextlab:
                            <br/>
                            <input
                                type={"number"}
                                placeholder={"Buscando por Nextlab..."}
                                value={filterNextlab}
                                onChange={(e) => setFilterNextlab(e.target.value)}
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
                                onChange={(e) => setFilterAvasus(e.target.value)}
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
                                onChange={(e) => setFilterCedula(e.target.value)}
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
                                onChange={(e) => setFilterTextApellido(e.target.value)}
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
                                value={filterHistoria}
                                onChange={(e) => setFilterHistoria(e.target.value)}
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
                                value={filterNombre}
                                onChange={(e) => setFilterNombre(e.target.value)}
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

            <div>
                <ProductsTable ordenes={ordenes}
                               filterEmpresa={filterEmpresa}
                               setFilterEmpresa={setFilterEmpresa}

                               filterNextlab={filterNextlab}
                               setFilterNextlab={setFilterNextlab}

                               filterAvasus={filterAvasus}
                               setFilterAvasus={setFilterAvasus}

                               filterCedula={filterCedula}
                               setFilterCedula={setFilterCedula}

                               filterApellido={filterTextApellido}
                               setFilterApellido={setFilterTextApellido}

                               filterHistoria={filterHistoria}
                               setFilterHistoria={setFilterHistoria}

                               filterNombre={filterNombre}
                               setFilterNombre={setFilterNombre}

                />
            </div>

        </>
    );
};

