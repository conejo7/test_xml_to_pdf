import React from 'react';
import Excel from 'exceljs';
import { saveAs } from 'file-saver';

const columns = [
    { header: 'Fecha Ingreso', key: 'fec_ingreso' },
    { header: 'Nextalb Id', key: 'codOrd' },
    { header: 'Avasus Id', key: 'id' },
    { header: 'Apellidos', key: 'apellidos' },
    { header: 'Nombres', key: 'nombres' },
    { header: 'Cedula', key: 'num_id' },
    { header: 'Empresa', key: 'abreviatura' },
    { header: 'Nombre Practica', key: 'descripcion' },
    { header: 'Estado Practica', key: 'sts_tecnico' },
    { header: 'Usuario Ingreso', key: 'first_user' },
];
export const ExportExcelPracticas = (products ) => {
    const {ordenes}  = products;

    const workSheetName = 'Worksheet-1';
    const workBookName = 'ReportePracticas';
    const myInputId = 'myInput';
    // console.log("PRdocu2"+ordenes);
    const workbook = new Excel.Workbook();
    const saveExcel = async () => {
        try {
            const myInput = document.getElementById(myInputId);
            const fileName = myInput.value || workBookName;

            // creating one worksheet in workbook
            const worksheet = workbook.addWorksheet(workSheetName);

            // add worksheet columns
            // each columns contains header and its mapping key from data
            worksheet.columns = columns;

            // updated the font for first row.
            worksheet.getRow(1).font = { bold: true };

            // loop through all of the columns and set the alignment with width.
            worksheet.columns.forEach(column => {
                column.width = column.header.length + 5;
                column.alignment = { horizontal: 'center' };
            });

            ordenes.forEach((singleData) => {
                worksheet.addRow(singleData);
            });
            ordenes.map(uni => {})
            // loop through all of the rows and set the outline style.
            worksheet.eachRow({ includeEmpty: false }, row => {
                // store each cell to currentCell
                const currentCell = row._cells;
                // loop through currentCell to apply border only for the non-empty cell of excel
                currentCell.forEach(singleCell => {
                    // store the cell address i.e. A1, A2, A3, B1, B2, B3, ...
                    const cellAddress = singleCell._address;
                    // apply border
                    worksheet.getCell(cellAddress).border = {
                        top: { style: 'thin' },
                        left: { style: 'thin' },
                        bottom: { style: 'thin' },
                        right: { style: 'thin' }
                    };
                });
            });

            // write the content using writeBuffer
            const buf = await workbook.xlsx.writeBuffer();

            // download the processed file
            saveAs(new Blob([buf]), `${fileName}.xlsx`);
        } catch (error) {
            console.error('<<<ERRROR>>>', error);
            console.error('Something Went Wrong', error.message);
        } finally {
            // removing worksheet's instance to create new one
            workbook.removeWorksheet(workSheetName);
        }
    };
    return (
        <>
            <div className="row">
                <div></div>
                <div></div>

            </div>
            <div className="container text-left">
                <div className="row row-cols-2">
                    <div className="col">Nombre de excel a exportar: <input id={myInputId} defaultValue={workBookName} /> .xlsx  .</div>
                    <div className="col"><button className="btn btn-primary" onClick={saveExcel}>Export</button></div>
                </div>
            </div>

            <br/>

            {/*<div className="container ">*/}
            {/*    <div className="row">*/}
            {/*        <div></div>*/}
            {/*        */}
            {/*    </div>*/}
            {/*<br/>*/}
            {/*</div>*/}
        </>
    );
};

export const getCarnesByCategoria = ( categoria ) => {

    const validCategorias = ['especial', 'normal','corriente'];
    if (!validCategorias.includes(categoria)){
        throw new Error(`${ categoria } no valida`);
    }
    return "lo";

};

