import React, { useEffect, useRef } from "react";
import '../../Estilos/Inicio.css';
import logotipo from '../../img/logotipo.png'; // Ajusta la ruta de tu logotipo


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
  
    return (
      <section id="mi-seccion" className="container-fluid" ref={seccionRef}>
        <div className="container">
          <h3 className="titulo1">Tu dinero siempre protegido</h3>
  
          <div className="row row1">
            <div className="col-12 col-md-4">
              <div className="card p-3 shadow rounded card3">
                <img src={logotipo} alt="Logotipo" className="img-fluid mb-3 logo" />
                <p>
                  En Tkiero la seguridad es nuestra prioridad.
                  Monitoreamos cada movimiento en tiempo real para proteger tu dinero siempre.
                </p>
              </div>
            </div>
  
            <div className="col-12 col-md-4">
              <div className="card p-3 shadow rounded card3">
              <img src={logotipo} alt="Logotipo" className="img-fluid mb-3 logo" />
                <p>
                  Estamos supervisados por la Superintendencia del Sistema Financiero de El Salvador,
                  garantizando transferencias rápidas, seguras y sin riesgos.
                </p>
              </div>
            </div>
  
            <div className="col-12 col-md-4">
              <div className="card p-3 shadow rounded card3">
              <img src={logotipo} alt="Logotipo" className="img-fluid mb-3 logo" />
                <p>
                  Empleamos encriptación de grado bancario y autenticación de dos factores para proteger tus fondos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Seccion;