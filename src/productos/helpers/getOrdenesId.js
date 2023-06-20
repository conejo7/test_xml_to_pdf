export const getOrdersId = async (startOrder, endOrder) => {


    const url = `http://192.168.56.101:8091/find?ordenInicio=${startOrder}&ordenFinal=${endOrder}`;

    const resp = await fetch(url);

    const data = await resp.json();
    // console.log("data" + data);

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