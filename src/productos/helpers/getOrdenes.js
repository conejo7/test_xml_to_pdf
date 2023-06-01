export const getOrdersByDate = async () => {
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=KvBXfifIRcb6d8H71R8LHnCEGLwytAEh&q=carne&limit=1`;
    //http://localhost:8091/ordersByDate?fechaInicio=2023-06-01
    const url = `http://localhost:8091/ordersByDate?fechaInicio=2023-06-01`;
    const resp = await fetch(url);
    // console.log(resp);
    const data = await resp.json();
    console.log(data.map(elem => {return elem.idHistoria}));
    //console.log(newOrdenes.map(elem => { return elem.idHistoria}))
    const ordenes = data.map( elem => ({
        id: elem.id,
        idHistoria: elem.idHistoria,
        idEmpresa: elem.idEmpresa,
        stsAdmin: elem.stsAdmin,
        stsTecnico: elem.stsTecnico

    }));
    // const ordenes = data.map((elem) => {
    //     return elem.id;
    // });

    // console.log(ordenes);
    //
     console.log("ordemap: "+ordenes[0].idEmpresa)
    return ordenes;
}