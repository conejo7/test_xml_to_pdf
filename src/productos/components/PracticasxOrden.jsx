
import React, {useEffect, useState} from 'react';
import {ProductsTablePractica} from "./ProductsTablePractica";
import {getOrdersByDate} from "../helpers/getOrdenes";
import DatePicker from "react-datepicker";
import moment from "moment";
import {getPracticasByDate} from "../helpers/getPracticasxOrden";

export const PracticasxOrden = () => {
    const [practicas, setPracticas] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndtDate] = useState(new Date());


    const [isLoading, setIsLoading] = useState(true);

    const [searchByOrder, setSearchByOrder] = useState(false);

    const getPracticas = async () => {
        //console.log("presiono")
        setIsLoading(true);
        const fechaFormateadaStart = moment(startDate, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ").format('YYYY-MM-DD');

        const fechaFormateadaEnd = moment(endDate, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ").format('YYYY-MM-DD');
        // console.log("star"+startOrder);
        // if (startOrder!==0){
        //    //1 busqueda por numero
        //     const newOrdenes = await getPracticasByDate(startOrder, endOrder, 1);
        //     console.log(newOrdenes);
        //     setPracticas(newOrdenes);
        //     setIsLoading(false);
        //
        // }else {
        //     //0 busqueda por fecha
        //     const newOrdenes = await getPracticasByDate(fechaFormateadaStart, fechaFormateadaEnd ,0);
        //     console.log(newOrdenes);
        //     setPracticas(newOrdenes);
        //     setIsLoading(false);
        // }
        const newOrdenes = await getPracticasByDate(fechaFormateadaStart, fechaFormateadaEnd);
            console.log(newOrdenes);
            setPracticas(newOrdenes);
            setIsLoading(false);

    }
    useEffect(() => {
        getPracticas();

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
                        FECHA INICIO: <DatePicker  dateFormat="dd/MM/yyyy"
                                                   selected={startDate}
                                                   onChange={(date) => setStartDate(date)}
                                                  />
                    </div>
                    <div className="col">
                        FECHA FINAL: <DatePicker dateFormat="dd/MM/yyyy"
                                                 selected={endDate}
                                                 onChange={(date1) => setEndtDate(date1)}
                                                 />
                    </div>
                    <div className="col">
                        Limite máximo 20000 registros.
                        <button type="button" className="btn btn-primary" onClick={() => getPracticas()}>Buscar ...</button>
                    </div>
                </div>

            </div>
            <div>
                <ProductsTablePractica practicas={practicas}/>
            </div>

        </>
    );
};


