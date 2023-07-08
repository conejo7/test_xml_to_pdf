export const getEmpresas = async () => {

    // const url = `http://localhost:8091/getCustomOrdersByDate?fechaInicio=2023-06-01&fechaFinal=2023-06-02`;
    //const url = `http://192.168.56.101:8091/getCustomOrdersByDate?fechaInicio=${startDate}&fechaFinal=${endDate}`;
    // const url = `http://192.168.56.101:8091/getCustomOrdersByDate?fechaInicio=${startDate}&fechaFinal=${endDate}`;
    // const url = `http://localhost:8091/test?fechaInicio=${empresa}`;
    const url = `http://localhost:8091/empresas`;

    const resp = await fetch(url);

    const data = await resp.json();
    // console.log("data" + Empresa);
    // const ordenes = data.map(elem => ({
    //     Empresa: elem.Empresa
    // }));
    // console.log(ordenes);
    return data;


}