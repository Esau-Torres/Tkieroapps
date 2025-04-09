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
import TkieroTerms from "./Vistas/Terms";
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
          <Route path="/Terms" element={<TkieroTerms />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
