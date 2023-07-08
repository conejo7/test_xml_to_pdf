export const getPracticasByDate = async (startDate, endDate ) => {


     const url = `http://localhost:8091/practicas?fechaInicio=${startDate}&fechaFinal=${endDate}`;

    const resp = await fetch(url);

    const data = await resp.json();
    // console.log("data" + data);

    const practicas = data.map(elem => ({
        fec_ingreso: elem.fec_ingreso,
        codOrd: elem.codOrd,
        id: elem.id,
        apellidos: elem.apellidos,
        nombres: elem.nombres,
        num_id: elem.num_id,
        abreviatura: elem.abreviatura,
        descripcion: elem.descripcion,
        sts_tecnico: elem.sts_tecnico,
        id_practica: elem.id_practica,
        first_user: elem.first_user

    }));
    return practicas;


}