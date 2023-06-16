export const getOrdersByDate = async (startDate, endDate) => {
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=KvBXfifIRcb6d8H71R8LHnCEGLwytAEh&q=carne&limit=1`;
    //http://localhost:8091/ordersByDate?fechaInicio=2023-06-01
    //const url = `http://localhost:8091/ordersByDate?fechaInicio=2023-06-01`;
    console.log("star" + startDate);
    console.log("end" + endDate);

    // const url = `http://localhost:8091/getCustomOrdersByDate?fechaInicio=2023-06-01&fechaFinal=2023-06-02`;
    const url = `http://192.168.56.101:8091/getCustomOrdersByDate?fechaInicio=${startDate}&fechaFinal=${endDate}`;


    const resp = await fetch(url);

    const data = await resp.json();
    console.log("data" + data);

    const ordenes = data.map(elem => ({
        fec_ingreso: elem.fec_ingreso,
        id: elem.id,
        id_historia: elem.id_historia,
        apellidos: elem.apellidos,
        nombres: elem.nombres,
        num_id: elem.num_id,
        abreviatura: elem.abreviatura,
        m_solicitante: elem.m_solicitante,
        sts_tecnico: elem.sts_tecnico,
        codOrd: elem.codOrd
    }));
    return ordenes;


}