import {carnes} from "./Products";
// import '../../styles/ProductRow.css';

import {useState} from "react";

function ProductRow({product}) {
    //const stock = product.stock > 0 ? product.stock : "No tiene Stock"
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.idHistoria}</td>
            <td>{product.idEmpresa}</td>
            <td>{product.stsAdmin}</td>
            <td>{product.stsTecnico}</td>
        </tr>
    );
}

function ProductTable({products, filterText, inStockOnly}) {
    const rows = [];
    let lastCategory = null;

    products.forEach((elem) => {
        // if (elem.id.indexOf(filterText.toLowerCase()) === -1) {
        //     return;
        // }
        rows.push(
            <ProductRow
                product={elem}
                key={elem.id}/>
        );
        //lastCategory = elem.category;
    });
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>IdHistoria</th>
                <th>IdEmpresa </th>
                <th>StsAdmin</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar({filterText, onFilterTextChange}) {
    return (
        <form>
            <br/>
            Busqueda por Id:
            <br/>
            <input
                type={"text"}
                placeholder={"Buscando..."}
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
            <br/>
        </form>
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

export function ProductsTable( {ordenes}) {
    return <FilterableProductTable products={ordenes}/>;
}


