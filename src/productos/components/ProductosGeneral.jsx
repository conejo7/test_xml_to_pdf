import React, {useEffect, useState} from 'react';
import {ProductsTable} from "./ProductsTable";
import {getOrdersByDate} from "../helpers/getOrdenes";
import DatePicker from "react-datepicker";
import moment from "moment";
import {getOrdersId} from "../helpers/getOrdenesId";


export const ProductosGeneral = () => {

    const [ordenes, setOrdenes] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndtDate] = useState(new Date());

    const [startOrder, setstartOrder] = useState(0);
    const [endOrder, setendOrder] = useState(0);

    const [isLoading, setIsLoading] = useState(true);

    const getOrdenes = async () => {
        console.log("presiono")
        setIsLoading(true);
        const fechaFormateadaStart = moment(startDate, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ").format('YYYY-MM-DD');

        const fechaFormateadaEnd = moment(endDate, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ").format('YYYY-MM-DD');

        if (startOrder===0 ){
            const newOrdenes = await getOrdersByDate(fechaFormateadaStart, fechaFormateadaEnd);
            console.log(newOrdenes);
            setOrdenes(newOrdenes);
            setIsLoading(false);

        }else {
            const newOrdenes = await getOrdersId(startOrder, endOrder);
            console.log(newOrdenes);
            setOrdenes(newOrdenes);
            setIsLoading(false);
        }

        // const newOrdenes = await getOrdersByDate(fechaFormateadaStart, fechaFormateadaEnd);
        // console.log(newOrdenes);
        // setOrdenes(newOrdenes);
        // setIsLoading(false);

    }
    useEffect(() => {
        getOrdenes();

    }, [])

    if (isLoading) {
        return <div>Cargando datos...</div>;
    }

    return (
        <>
            {/*<ExportExcel ordenes={ordenes} />*/}
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
                        FECHA INICIO: <DatePicker  dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)}/>
                    </div>
                    <div className="col">
                        FECHA FIN: <DatePicker dateFormat="dd/MM/yyyy" selected={endDate} onChange={(date1) => setEndtDate(date1)}/>
                    </div>
                    <div className="col">
                        Limite 20000 registros<button type="button" className="btn btn-primary" onClick={() => getOrdenes()}>Buscar ...</button>

                    </div>
                </div>

            </div>
            <div>
                <ProductsTable ordenes={ordenes}/>
            </div>

        </>
    );
};

