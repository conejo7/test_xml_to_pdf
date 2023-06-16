import React, {useEffect, useState} from 'react';
import {ProductsTable} from "./ProductsTable";
import {getOrdersByDate} from "../helpers/getOrdenes";
import DatePicker from "react-datepicker";
import moment from "moment";


export const ProductosGeneral = () => {

    const [ordenes, setOrdenes] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndtDate] = useState(new Date());

    const [isLoading, setIsLoading] = useState(true);

    const getOrdenes = async () => {
        console.log("presiono")
        setIsLoading(true);
        const fechaFormateadaStart = moment(startDate, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ").format('YYYY-MM-DD');

        const fechaFormateadaEnd = moment(endDate, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ").format('YYYY-MM-DD');

        if (fechaFormateadaStart===fechaFormateadaEnd){
            const fechaRestada = moment(fechaFormateadaStart).subtract(1, 'day').format('YYYY-MM-DD');
            console.log("fechaRestada"+fechaRestada + fechaFormateadaEnd);
            const newOrdenes = await getOrdersByDate(fechaRestada, fechaFormateadaEnd);
            console.log(newOrdenes);
            setOrdenes(newOrdenes);
            setIsLoading(false);

        }else {
            const newOrdenes = await getOrdersByDate(fechaFormateadaStart, fechaFormateadaEnd);
            console.log(newOrdenes);
            setOrdenes(newOrdenes);
            setIsLoading(false);
        }

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
                        FECHA INICIO: <DatePicker  dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)}/>
                    </div>
                    <div className="col">
                        FECHA FIN: <DatePicker dateFormat="dd/MM/yyyy" selected={endDate} onChange={(date1) => setEndtDate(date1)}/>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" onClick={() => getOrdenes()}>Buscar ...</button>
                                 Limite máximo 10000 registros.
                    </div>
                </div>

            </div>
            <div>
                <ProductsTable ordenes={ordenes}/>
            </div>

            {/*<div className="container">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-sm">*/}
            {/*        </div>*/}
            {/*        <div className="col align-self-end">*/}
            {/*            /!*<DatePicker  dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)}/>*!/*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="container">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col">*/}
            {/*            First, but unordered*/}
            {/*        </div>*/}
            {/*        <div className="col order-12">*/}
            {/*            Second, but last*/}
            {/*        </div>*/}
            {/*        <div className="col order-1">*/}
            {/*            /!*<DatePicker dateFormat="dd/MM/yyyy" selected={endDate} onChange={(date1) => setEndtDate(date1)}/>*!/*/}
            {/*        </div>*/}
            {/*        <div className="col order-2">*/}
            {/*            /!*<button type="button" className="btn btn-primary" onClick={() => getOrdenes()}>Buscar ...</button>*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <ProductsTable ordenes={ordenes}/>*/}
            {/*</div>*/}
        </>
    );
};

