import React, { useState } from "react";
import logo from '../img/logo.png'
import { Modal, Button } from 'react-bootstrap';
import ContactForm from "./inicio/Correo";

import '../Estilos/AcercaDe.css';

const Contacto = () => {
  const [isCard1Open, setIsCard1Open] = useState(false);
  const [isCard2Open, setIsCard2Open] = useState(false);
  const [isCard3Open, setIsCard3Open] = useState(false);

  const toggleCard1 = () => {
    setIsCard1Open(!isCard1Open);
  };

  const toggleCard2 = () => {
    setIsCard2Open(!isCard2Open);
  };
  const toggleCard3 = () => {
    setIsCard3Open(!isCard3Open);
  };
  
  /*Modal*/
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <><section className="animated-cards py-5">
      <div className="container">
        <div className="row">
          {/* Card 1: Quiénes Somos */}
          <div className="col-12 mb-4">
            <div className="card h-100 shadow-sm card5">
              <div className="card-body">
                <div className="circle-animation"></div>
                <div className="card-header">
                  <h3 className="card-title">Quiénes Somos</h3>
                  <img src={logo} className="card-image2" alt="logo" />
                </div>
                <p className="card-text">
                  Tkiero es una plataforma de tecnología financiera diseñada para ofrecer servicios financieros esenciales a personas que no tienen acceso a la banca tradicional. Estamos completamente regulados por el Banco Central de Reserva de El Salvador (BCR), la Superintendencia del Sistema Financiero (SSF) y la Unidad de Investigación Financiera (UIF). Cumplimos con estrictas normativas de Conozca a su Cliente (KYC) y Prevención de Lavado de Dinero (AML), garantizando un entorno seguro y transparente para todos nuestros usuarios.
                </p>
              </div>
            </div>
          </div>
          {/* Card 2: Nuestra Misión */}
          <div className="col-12 col-md-6 mb-4">
            <div className="card h-100 shadow-sm card5">
              <div className="card-body">
                <div className="circle-animation"></div>
                <div className="card-header">
                  <h3 className="card-title">Nuestra Misión</h3>
                  <img src={logo} className="card-image" alt="logo" />
                </div>
                <p className="card-text">
                  Nuestra misión es impulsar la inclusión financiera proporcionando herramientas seguras, accesibles y confiables, que permitan a las personas gestionar su dinero, pagar servicios y realizar transacciones de manera eficiente y a bajo costo.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Nuestra Visión */}
          <div className="col-12 col-md-6 mb-4">
            <div className="card h-100 shadow-sm card5">
              <div className="card-body">
                <div className="circle-animation"></div>
                <div className="card-header">
                  <h3 className="card-title">Nuestra Visión</h3>
                  <img src={logo} className="card-image" alt="logo" />
                </div>
                <p className="card-text">
                  Nuestra visión es convertirnos en la principal plataforma financiera digital en América Latina, creando oportunidades para individuos y empresas al simplificar los pagos, expandir el acceso a servicios financieros y contribuir al crecimiento económico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/*Bloque 2*/}

      <section className="contact-section py-5">
        <div className="container">
          {/* Título */}
          <h2 className="text-center mb-4">Contáctanos</h2>
          <div className="row align-item-center">
            {/* Columna 1: Cards */}
            <div className="col-12 col-md-6 mx-auto c1">
              {/* Fila 1: Nuestra Ubicación y E-mail */}
              <div className="row">
                <div className="col-12 col-md-6 mb-4 ">
                  <div className="card h-100 shadow-sm card6 mx-auto">
                    <div className="card-body5 ">
                      <h3 className="card-title5">Nuestra Ubicación</h3>
                      <p className="card-text5">
                        Miami FL, 33156<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4 ">
                  <div className="card h-100 shadow-sm card6 mx-auto">
                    <div className="card-body5">
                      <h3 className="card-title5">E-mail</h3>
                      <p className="card-text5">
                        hello@tkiero.app
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fila 2: Escríbenos y Redes Sociales */}
              <div className="row">
                <div className="col-12 col-md-6 mb-4">
                  <div className="card h-100 shadow-sm mx-auto card6">
                    <div className="card-body">
                      <h3 className="card-title5">Escríbenos</h3>
                      <p className="card-text5">
                        <strong>Horarios</strong><br />
                        Lun - Vie: 8am a 5pm<br />
                        Sáb: 8am a 2pm
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <div className="card h-100 shadow-sm card6 mx-auto" onClick={handleShowModal} style={{ cursor: 'pointer' }}>
                    <div className="card-body5">
                      <h3 className="card-title5">Redes Sociales</h3>
                      <p className="card-text5">
                        Haz clic aquí para ver nuestras redes sociales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 2: Formulario */}
            <ContactForm/>
          </div>
        </div>

        {/* Modal para Redes Sociales */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Redes Sociales</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="social-icons2 text-center">
              <a href="https://www.facebook.com/Tkieroapp" target="_blank" rel="noopener noreferrer" className="icon-circle2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.youtube.com/@Tkiero_app" target="_blank" rel="noopener noreferrer" className="icon-circle2">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.linkedin.com/feed/?shareActive=true&shareUrl=https%3A%2F%2Ftr.ee%2FEbICCOG1uJ" target="_blank" rel="noopener noreferrer" className="icon-circle2">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/TkieroApp" target="_blank" rel="noopener noreferrer" className="icon-circle2">
                <i className="fab fa-x"></i>
              </a>
              <a href="https://www.snapchat.com/add/tkieroapp?sender_web_id=3ab5da15-e7ae-454f-87dc-b98afa9bca2d&device_type=desktop&is_copy_url=true" target="_blank" rel="noopener noreferrer" className="icon-circle2">
                <i className="fab fa-snapchat"></i>
              </a> <a href="https://www.tiktok.com/@tkiero_app" target="_blank" rel="noopener noreferrer" className="icon-circle2">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://www.instagram.com/tkiero_app/" target="_blank" rel="noopener noreferrer" className="icon-circle2">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </section>

      {/*Bloque 3*/}
      <section className="expandable-cards py-5">
        <div className="container">
          {/* Card 1: Qué Hace Tkiero */}
          <div className="card mb-4 shadow-sm card4">
            <div className="card-header2" onClick={toggleCard1}>
              <h3 className="card-title text-light">¿Qué Hace Tkiero?</h3>
              <span className="toggle-icon">&nbsp;{isCard1Open ? '−' : '+'}&nbsp;</span>
            </div>
            <div className={`card-body2 justified-text ${isCard1Open ? "open" : ""}`}>
              <p>
                Tkiero ofrece una amplia gama de servicios destinados a simplificar la gestión financiera de los usuarios y permitir que las empresas alcancen nuevos segmentos de clientes. Aquí te contamos qué hacemos:
              </p>
              <ul>
                <li><strong>Transferencias de Dinero:</strong> <br/> Nuestra plataforma permite transferencias de dinero instantáneas entre usuarios, tanto a nivel local como internacional.</li>
                <li><strong>Pago de Servicios Públicos:</strong><br/> Los usuarios pueden pagar servicios esenciales como electricidad, agua e internet, directamente desde la aplicación de Tkiero.</li>
                <li><strong>Recargas Móviles:</strong><br/> Tkiero permite la compra rápida y conveniente de recargas de saldo y paquetes de datos para teléfonos móviles.</li>
                <li><strong>Pagos con Bitcoin Lightning Network: </strong><br/>Tkiero soporta pagos a través de la red Lightning de Bitcoin, lo que permite pagos transfronterizos rápidos y económicos.</li>
                <li><strong>Billetera Digital: </strong><br/>Los usuarios pueden cargar fondos en su billetera Tkiero por varios métodos y retirar los fondos en moneda local o en dólares estadounidenses.</li>
                <li><strong>Servicios de Documentos Legales:</strong><br/> Tkiero facilita la solicitud de documentos legales como certificados de nacimiento, licencias de matrimonio, y más, con entrega internacional.</li>
                <li><strong>Servicios Bancarios en EE. UU.: </strong><br/>Ofrecemos acceso a servicios como transferencias ACH, transferencias bancarias (wire) y Zelle, permitiendo a los usuarios pagar servicios como Netflix y Amazon.</li>
                <li><strong>Remesas:</strong><br/> Tkiero proporciona un servicio de remesas seguro y de bajo costo para que los usuarios puedan enviar y recibir dinero.</li>
                <li><strong>Pagos en Comercios:</strong><br/> Los usuarios pueden pagar en supermercados, farmacias y otros comercios esenciales a través de nuestra plataforma.</li>
                <li><strong>Envío de Documentos:</strong><br/> Tkiero ofrece el envío global de documentos legales a través de transportistas confiables como UPS y DHL.</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Cómo Tkiero Beneficia al Consumidor */}
          <div className="card mb-4 shadow-sm card4">
            <div className="card-header2" onClick={toggleCard2}>
              <h3 className="card-title text-light">¿Cómo Tkiero Beneficia al Consumidor?</h3>
              <span className="toggle-icon">&nbsp; {isCard2Open ? ' − ' : '+'} &nbsp;</span>
            </div>
            <div className={`card-body2 ${isCard2Open ? "open" : ""}`}>
              <p>
                Tkiero proporciona una plataforma conveniente y accesible para la gestión financiera, especialmente para aquellos que no tienen acceso a la banca tradicional. Con Tkiero, los consumidores pueden realizar transacciones esenciales sin necesidad de una cuenta bancaria, beneficiándose de:
              </p>
              <ul>
                <li>Ahorro en costos en remesas y pagos de servicios.</li>
                <li>Seguridad con cuentas verificadas y estrictos procedimientos KYC/AML.</li>
                <li>Flexibilidad con múltiples opciones de pago, incluyendo criptomonedas.</li>
                <li>Facilidad de uso, diseñada para personas que pueden no estar familiarizadas con los sistemas bancarios tradicionales.</li>
              </ul>
            </div>
          </div>

          {/* Card 3: Por Qué Integrar Tkiero Beneficia a Su Empresa */}
          <div className="card mb-4 shadow-sm card4">
            <div className="card-header2" onClick={toggleCard3}>
              <h3 className="card-title text-light">¿Por Qué Integrar Tkiero Beneficia a Su Empresa?</h3>
              <span className="toggle-icon">&nbsp; {isCard3Open ? ' − ' : '+'} &nbsp;</span>
            </div>
            <div className={`card-body2 ${isCard3Open ? "open" : ""}`}>
              <p>
                Al integrar Tkiero en su negocio, usted podrá:
              </p>
              <ul>
                <li>Ampliar su base de clientes ofreciendo servicios a la población no bancarizada o sub-bancarizada.</li>
                <li>Aumentar la satisfacción del cliente brindándoles más formas de pagar y gestionar sus finanzas.</li>
                <li>Mejorar la eficiencia con un procesamiento de pagos rápido y confiable y una gestión financiera simplificada.</li>
              </ul>
              <p>
                Asociarse con Tkiero significa abrazar la innovación y brindar a sus clientes la oportunidad de acceder a herramientas financieras esenciales, todo mientras impulsa el crecimiento de su negocio. Juntos, podemos tener un impacto duradero en la inclusión financiera en Nicaragua y más allá.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-center mt-5">Haciendo tu vida más fácil, una transacción a la vez.</h2>
      </section>
    </>
  );
};

export default Contacto;