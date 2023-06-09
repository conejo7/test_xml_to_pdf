import React, {useState} from "react";

function ProductRow({product}) {
    //const stock = product.stock > 0 ? product.stock : "No tiene Stock"
    return (
        <>
            <tr>
                <td>{product.fec_ingreso}</td>
                <td>{product.codOrd}</td>
                <td>{product.id}</td>
                <td>{product.id_historia}</td>
                <td>{product.apellidos}</td>
                <td>{product.nombres}</td>
                <td>{product.num_id}</td>
                <td>{product.abreviatura}</td>
                <td>{product.m_solicitante}</td>
                <td>{product.sts_tecnico}</td>
            </tr>
        </>
    );
}

function ProductTable({products, filterText, startDate}) {
    const rows = [];


    console.log("startDate  " + startDate);
    products.forEach((elem) => {
        if (elem.nombres.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        rows.push(
            <ProductRow
                product={elem}
                key={elem.id}/>
        );
    });
    console.log(rows);
    return (
        <>
            {/*<Pruebas ordenes={rows} />*/}
            <table className="table table-bordered">
                <thead className="table table-warning ">
                <tr>
                    <th>FECHA INGRESO</th>
                    <th>NEXTLAB</th>
                    <th>Id AVASUS</th>
                    <th>HISTORIA</th>
                    <th>APELLIDOS</th>
                    <th>NOMBRES</th>
                    <th>CEDULA</th>
                    <th>EMPRESA</th>
                    <th>MED. SOLICITANTE</th>
                    <th>ESTADO</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
            {/*<Export ordenes={rows}/>*/}
        </>

    );
}

function SearchBar({filterText, onFilterTextChange}) {
    return (
        <>

            <form>
                <br/>
                Busqueda por Nombre:
                <br/>
                <input
                    type={"text"}
                    placeholder={"Buscando..."}
                    value={filterText}
                    onChange={(e) => onFilterTextChange(e.target.value)}
                />
                <br/>
            </form>
        </>
    );
}

function FilterableProductTable({products}) {
    const [filterText, setFilterText] = useState('');
    return (
        <div>

            <SearchBar
                filterText={filterText}
                onFilterTextChange={setFilterText}
            />
            <br/>
            <ProductTable
                products={products}
                filterText={filterText}
            />
        </div>
    );
}

export function ProductsTable(products) {
    const {ordenes } = products;
    //{ordenes, startDate}
    //console.log("Fecha" + startDate);
    //console.log("PRdocu2"+ordenes);
    return <FilterableProductTable products={ordenes}/>;
}


