// import logo from './logo.svg';
import './App.css';
import {useParams} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import {ProductosGeneral} from "./productos/components/ProductosGeneral";


function App() {

    // const params1 = new URLSearchParams(window.location.search);
    // const user = params1.get('user');
    // console.log(user);
    // //const myParam = params.get('user');
    // return <h2>User ID: {user}</h2>;
    const params1 = new URLSearchParams(window.location.search);
    const user = params1.get('user');
    console.log(user);
    //const myParam = params.get('user');
    return (
        <>
            <h2>User ID: {user}</h2>
            <AppRouter></AppRouter>
            <ProductosGeneral/>
        </>
    )
        ;

}

export default App;
