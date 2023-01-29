/*##### Modulos ####*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* ### Estilos ###  */
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/* componentes */
//import App from './App';
import NavBar from './components/navbar/NavBar.js';
import Home from './components/home/Home';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailcontainer';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';


/*core */
import reportWebVitals from './reportWebVitals';


/* logica*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar />
       

      <Routes>
                
        <Route exact path='/'element={<ItemListContainer />}/>
        <Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route exact path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route exact path='/nosotros' element={<AboutUs/>}/>
            
      </Routes>

      <Footer />

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
