import React, { useEffect, useRef } from "react";
import '../../Estilos/Inicio.css';
import logotipo from '../../img/logotipo.png'; // Ajusta la ruta de tu logotipo
import { useTranslation } from 'react-i18next';

const Seccion = () => {
    const seccionRef = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("aparece");
            }
          });
        },
        { threshold: 0.2 }
      );
  
      if (seccionRef.current) {
        const elementos = seccionRef.current.querySelectorAll(".card");
        elementos.forEach((element) => observer.observe(element));
  
        return () => {
          elementos.forEach((element) => observer.unobserve(element));
        };
      }
    }, []);
   const { t } = useTranslation();
    return (
      <section id="mi-seccion" className="container-fluid bg-fondo2" ref={seccionRef}>
        <div className="container">
          <h3 className="titulo1">{t('inicio.bloque8.titulo')}</h3>
  
          <div className="row row1">
            <div className="col-12 col-md-4">
              <div className="card p-3 shadow rounded card3">
                <img src={logotipo} alt="Logotipo" className="img-fluid mb-3 logo" />
                <p>
                  {t('inicio.bloque8.text1')}
                </p>
              </div>
            </div>
  
            <div className="col-12 col-md-4">
              <div className="card p-3 shadow rounded card3">
              <img src={logotipo} alt="Logotipo" className="img-fluid mb-3 logo" />
                <p>
                  {t('inicio.bloque8.text2')}
                </p>
              </div>
            </div>
  
            <div className="col-12 col-md-4">
              <div className="card p-3 shadow rounded card3">
              <img src={logotipo} alt="Logotipo" className="img-fluid mb-3 logo" />
                <p>
                  {t('inicio.bloque8.text3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Seccion;