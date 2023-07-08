import React from 'react';

const BarrasBusqueda = ({
                            filterText, onFilterTextChange,
                            filterTextApellido, onFilterTextChangeApellido,
                            filterAvasus, onFilterAvasus,
                            filterNextlab, onFilterNextlab,
                            filterCedula, onFilterCedula,
                            filterEmpresa, onFilterEmpresa,
                            filerHistoria, onFilterHistoria
                        }) => {
    const handleClear = () => {
        onFilterTextChange('');
        onFilterTextChangeApellido('');
        onFilterAvasus('');
        onFilterNextlab('');
        onFilterCedula('');
        onFilterEmpresa('');
        onFilterHistoria('');
    };
    return (
            <>
                <div className="container text-left">
                    <div className="row">
                        {/*<div className="col">*/}
                        {/*    <form>*/}
                        {/*        <br/>*/}
                        {/*        Nextlab:*/}
                        {/*        <br/>*/}
                        {/*        <input*/}
                        {/*            type={"number"}*/}
                        {/*            placeholder={"Buscando por Nextlab..."}*/}
                        {/*            value={filterNextlab}*/}
                        {/*            onChange={(e) => onFilterNextlab(e.target.value)}*/}
                        {/*        />*/}
                        {/*        <br/>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                        {/*<div className="col">*/}
                        {/*    <form>*/}
                        {/*        <br/>*/}
                        {/*        Avasus:*/}
                        {/*        <br/>*/}
                        {/*        <input*/}
                        {/*            type={"number"}*/}
                        {/*            placeholder={"Buscando por Avasus..."}*/}
                        {/*            value={filterAvasus}*/}
                        {/*            onChange={(e) => onFilterAvasus(e.target.value)}*/}
                        {/*        />*/}
                        {/*        <br/>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                        {/*<div className="col">*/}
                        {/*    <form>*/}
                        {/*        <br/>*/}
                        {/*        Cédula:*/}
                        {/*        <br/>*/}
                        {/*        <input*/}
                        {/*            type={"number"}*/}
                        {/*            placeholder={"Buscando por cédula..."}*/}
                        {/*            value={filterCedula}*/}
                        {/*            onChange={(e) => onFilterCedula(e.target.value)}*/}
                        {/*        />*/}
                        {/*        <br/>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                        {/*<div className="col">*/}
                        {/*    <form>*/}
                        {/*        <br/>*/}
                        {/*        Id Historia Avasus:*/}
                        {/*        <br/>*/}
                        {/*        <input*/}
                        {/*            type={"number"}*/}
                        {/*            placeholder={"Buscando por Id Historia..."}*/}
                        {/*            value={filerHistoria}*/}
                        {/*            onChange={(e) => onFilterHistoria(e.target.value)}*/}
                        {/*        />*/}
                        {/*        <br/>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                    </div>
                    <div className="row">
                        {/*<div className="col">*/}
                        {/*    <form>*/}
                        {/*        <br/>*/}
                        {/*        Apellido:*/}
                        {/*        <br/>*/}
                        {/*        <input*/}
                        {/*            type={"text"}*/}
                        {/*            placeholder={"Buscando por Apellido..."}*/}
                        {/*            value={filterTextApellido}*/}
                        {/*            onChange={(e) => onFilterTextChangeApellido(e.target.value)}*/}
                        {/*        />*/}
                        {/*        <br/>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                        {/*<div className="col">*/}
                        {/*    <form>*/}
                        {/*        <br/>*/}
                        {/*        Nombre:*/}
                        {/*        <br/>*/}
                        {/*        <input*/}
                        {/*            type={"text"}*/}
                        {/*            placeholder={"Buscando..."}*/}
                        {/*            value={filterText}*/}
                        {/*            onChange={(e) => onFilterTextChange(e.target.value)}*/}
                        {/*        />*/}
                        {/*        <br/>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                        {/*<div className="col">*/}
                        {/*    <form>*/}
                        {/*        <br/>*/}
                        {/*        Empresa:*/}
                        {/*        <br/>*/}
                        {/*        <input*/}
                        {/*            type={"text"}*/}
                        {/*            placeholder={"Buscando por Empresa..."}*/}
                        {/*            value={filterEmpresa}*/}
                        {/*            onChange={(e) => onFilterEmpresa(e.target.value)}*/}
                        {/*        />*/}
                        {/*        <br/>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                        <div className="col">
                            <br/>
                            <button className="btn btn-primary align-center" onClick={handleClear}>Limpiar Campos</button>
                            <br/>
                        </div>
                    </div>
                </div>
            </>
    );
};

export default BarrasBusqueda;

