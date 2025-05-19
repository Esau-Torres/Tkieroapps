import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  //importacion de bootstrap para el diseño del sitio web
//estructura del sitio web
import Header from './componentes/Header';
import Footer from './componentes/Footer';
//vistas
import Inicio from "./Vistas/Inicio";
import Contacto from "./Vistas/Contacto";
import Caracteristicas from "./Vistas/Caracteristicas";
// Vistas de Terminos y condiciones
import TkieroTerms from "./Vistas/inicio/Terms_Con/Terms";
import TkieroAccount from "./Vistas/inicio/Terms_Con/AcountSuspention";
import TkieroPolicy from "./Vistas/inicio/Terms_Con/CriptoPolicy";
import TkieroCookies from "./Vistas/inicio/Terms_Con/FollowinCookies";
// vista del formulario de ibex
import IbexForm from "./Vistas/Ibex-form";

// estilos globales
import './App.css';

function App() {

  return (

    <>
      <Header />
      <main className="container mt-1" >
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/caracteristicas" element={<Caracteristicas />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Rutas para las vistas de términos y condiciones */}
          <Route path="/Terms" element={<TkieroTerms />} />
          <Route path='/Terms/AcountSuspention' element={<TkieroAccount />} />
          <Route path='/Terms/CriptoPolicy' element={<TkieroPolicy />} />
          <Route path='/Terms/FollowinCookies' element={<TkieroCookies />} />
          {/* Ruta para el formulario de IBEX */}
          <Route path='/transaction' element={<IbexForm />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;