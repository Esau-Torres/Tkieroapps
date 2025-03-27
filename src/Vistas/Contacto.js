import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import visible from "./inicio/visible";
import '../Estilos/AcercaDe.css';
import logo from '../img/logotipo.png';
import services from '../img/services1.jpeg';
import services1 from '../img/services2.jpeg';
import services2 from '../img/services0.jpeg';
import services3 from '../img/services4.jpeg';

const Contacto = () => {

  visible();

  return (
    <>
      {/*Bloque 1*/}

      <section className="bg-fondo py-5">
        <Container>
          {/* Fila contenedora de las 4 secciones */}
          <div className="col-12 text-center mb-5">
            <img src={logo} alt="logo" height={'80px'} width={'auto'} />
            <p className="lead">Una travesía de innovación y compromiso con la inclusión financiera.</p>
          </div>
          <Row className="g-4">
            {/* Sección 1 */}
            <Col lg={3} md={6}>
              <div className="grid-item h-100">
              <div className="image-part">
                  <img
                    src={services}
                    alt="Pago de facturas"
                  />
                </div>
                <div className="text-part p-4 text-center">
                  <h3 className="mb-3">Ten un punto express</h3>
                  <p className="mb-0">
                    Paga todas tus facturas de agua, luz, internet, cable en un solo lugar.
                  </p>
                </div>
                <div className="bg-primary p-1">
                  <a href="https://play.google.com/store/apps/details?id=app.tkiero"><p className="text-center text-light m-2">Descarga La Apps</p></a>
                </div>
              </div>
            </Col>

            {/* Sección 2 */}
            <Col lg={3} md={6}>
              <div className="grid-item h-100">
              <div className="image-part">
                  <img
                    src={services2}
                    alt="Pago con QuickPay"
                  />
                </div>
                <div className="text-part p-4 text-center">
                  <h3 className="mb-3">Paga en cualquier lugar</h3>
                  <p className="mb-0">
                    En Tkiero App puedes pagar en establecimientos afiliados a QuickPay.
                  </p>
                </div>
                <div className="bg-primary p-1">
                  <a href="https://play.google.com/store/apps/details?id=app.tkiero"><p className="text-center text-light m-2">Descarga La Apps</p></a>
                </div>
              </div>
            </Col>

            {/* Sección 3 */}
            <Col lg={3} md={6}>
              <div className="grid-item h-100">
              <div className="image-part">
                  <img
                    src={services1}
                    alt="Lightning Network"
                  />
                </div>
                <div className="text-part p-4 text-center">
                  <h3 className=" mb-3">Tecnología Lightning</h3>
                  <p className="mb-0">
                    Transferencias instantáneas y de bajo costo con Bitcoin Lightning Network.
                  </p>
                </div>
                <div className="bg-primary p-1">
                  <a href="https://play.google.com/store/apps/details?id=app.tkiero"><p className="text-center text-light m-2">Descarga La Apps</p></a>
                </div>
              </div>
            </Col>

            {/* Sección 4 */}
            <Col lg={3} md={6}>
              <div className="grid-item h-100">
              <div className="image-part">
                  <img
                    src={services3}
                    alt="Recargas telefónicas"
                  />
                </div>
                <div className="text-part p-4 text-center">
                  <h3 className="mb-3">Recargas telefónicas</h3>
                  <p className="mb-0">
                    Realiza tus recargas o paquetes de tu compañía telefónica con nosotros.
                  </p>
                </div>
                <div className="bg-primary p-1">
                  <a href="https://play.google.com/store/apps/details?id=app.tkiero"><p className="text-center text-light m-2">Descarga La Apps</p></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*Bloque 2 */}
      <h2 className="text-center">!Tkiero cambia tu manera de manejar tu dinero¡</h2>
      <section className="animated-cards py-5 bg-fondo2">
        <div className="container">
          <div className="row">
            {/* Card 1: Quiénes Somos */}
            <div className="col-12 mb-4">
              <div className="card h-100 shadow-sm card5">
                <div className="card-body d-flex p-0">
                  {/* Bloque 1: Ícono */}
                  <div className="icon-section d-flex align-items-center justify-content-center">
                    <i className="fas fa-info-circle fa-4x"></i>
                  </div>
                  {/* Bloque 2: Texto */}
                  <div className="text-section p-4">
                    <div className="card-header p-0 mb-3">
                      <h3 className="card-title">¿Quiénes Somos?</h3>
                    </div>
                    <p className="card-text">
                      Tkiero es una fintech salvadoreña que busca revolucionar la manera en que las personas manejan su dinero, facilitando pagos digitales, remesas y servicios financieros de forma rápida y accesible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Nuestros Servicios */}
            <div className="col-12 mb-4">
              <div className="card h-100 shadow-sm card5">
                <div className="card-body d-flex p-0">
                  {/* Bloque 1: Ícono */}
                  <div className="icon-section d-flex align-items-center justify-content-center">
                    <i className="fas fa-cogs fa-4x"></i>
                  </div>
                  {/* Bloque 2: Texto */}
                  <div className="text-section p-4">
                    <div className="card-header p-0 mb-3">
                      <h3 className="card-title">Nuestros Servicios</h3>
                    </div>
                    <p className="card-text">En Tídero, nos especializamos en:</p>
                    <ul className="card-text">
                      <li>Envío y recepción de remesas</li>
                      <li>Pagos de facturas y servicios básicos</li>
                      <li>Recargas telefónicas y compra de paquetes</li>
                      <li>Pagos con Bitcoin y Lightning Network</li>
                      <li>Transferencias entre usuarios y pagos a comercios</li>
                      <li>Integración con plataformas como PayPal, Mercado Pago y más</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>







    </>
  );
};

export default Contacto;