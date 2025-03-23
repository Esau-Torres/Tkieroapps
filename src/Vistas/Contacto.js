import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import ContactForm from "./inicio/Correo";
import visible from "./inicio/visible";
import '../Estilos/AcercaDe.css';
import logos from  '../img/logotipo.png'

const Contacto = () => {

  visible();
  /*Modal*/
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      {/*Bloque 1*/}
      <section className="tkiero-history py-5 bg-fondo3">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <img src={logos} alt="logo" height={'80px'} width={'auto'}/>
              <p className="lead">Una travesía de innovación y compromiso con la inclusión financiera.</p>
            </div>
          </div>
          <div className="timeline">
            {/* Bloque 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-lightbulb fa-2x"></i>
              </div>
              <div className="timeline-content">
                <h3 className="text-center">Los Inicios</h3>
                <p className="timeline-text">
                  Todo comenzó con una necesidad real: facilitar el acceso a servicios financieros y digitales para las personas en El Salvador y más allá. Se identificó que una gran parte de la población no tenía acceso a servicios bancarios tradicionales.
                </p>
              </div>
            </div>

            {/* Bloque 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-cogs fa-2x"></i>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title text-center">Evolución</h3>
                <p className="timeline-text">
                  En sus inicios, Tkiero nació como una plataforma para ayudar a las personas a tramitar documentos legales desde cualquier parte del mundo. Luego, evolucionó para permitir pagos de servicios básicos como electricidad, agua e internet.
                </p>
              </div>
            </div>

            {/* Bloque 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-rocket fa-2x"></i>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title text-center">Visión Ampliada</h3>
                <p className="timeline-text">
                  Con el tiempo, la visión se amplió: crear una aplicación financiera integral que permitiera a las personas enviar dinero, recibir remesas, pagar en comercios, recargar saldo telefónico y hasta realizar pagos con Bitcoin Lightning Network.
                </p>
              </div>
            </div>

            {/* Bloque 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-check-circle fa-2x"></i>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title text-center">Hoy</h3>
                <p className="timeline-text">
                  Hoy, Tkiero está regulada y registrada ante las instituciones financieras de El Salvador, garantizando confianza y seguridad a sus usuarios. A través de alianzas estratégicas con bancos, fintechs y procesadores de pagos, la app se ha convertido en una solución innovadora para millones de personas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Bloque 2 */}
      <h2 className="text-center">El Salvador cambia su manera de manejar el dinero con nosotros.</h2>
      <section className="animated-cards py-5">
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
                      Tídero es una fintech salvadoreña que busca revolucionar la manera en que las personas manejan su dinero, facilitando pagos digitales, remesas y servicios financieros de forma rápida y accesible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Nuestra Misión */}
            <div className="col-12 mb-4">
              <div className="card h-100 shadow-sm card5">
                <div className="card-body d-flex p-0">
                  {/* Bloque 1: Ícono */}
                  <div className="icon-section d-flex align-items-center justify-content-center">
                    <i className="fas fa-bullseye fa-4x"></i>
                  </div>
                  {/* Bloque 2: Texto */}
                  <div className="text-section p-4">
                    <div className="card-header p-0 mb-3">
                      <h3 className="card-title">Nuestra Misión</h3>
                    </div>
                    <p className="card-text">
                      Nuestra misión es impulsar la inclusión financiera proporcionando herramientas seguras, accesibles y confiables, que permitan a las personas gestionar su dinero, pagar servicios y realizar transacciones de manera eficiente y a bajo costo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Nuestra Visión */}
            <div className="col-12 mb-4">
              <div className="card h-100 shadow-sm card5">
                <div className="card-body d-flex p-0">
                  {/* Bloque 1: Ícono */}
                  <div className="icon-section d-flex align-items-center justify-content-center">
                    <i className="fas fa-eye fa-4x"></i>
                  </div>
                  {/* Bloque 2: Texto */}
                  <div className="text-section p-4">
                    <div className="card-header p-0 mb-3">
                      <h3 className="card-title">Nuestra Visión</h3>
                    </div>
                    <p className="card-text">
                      Nuestra visión es convertirnos en la principal plataforma financiera digital en América Latina, creando oportunidades para individuos y empresas al simplificar los pagos, expandir el acceso a servicios financieros y contribuir al crecimiento económico.
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

      {/*Bloque 3*/}

      <section className="contact-section py-5 ">
        <div className="container bg-fondo2">
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
                        67 Av. Sur , Edificio 300, apto 4,<br />
                        segunda planta, Colonia Roma, S.S.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4 ">
                  <div className="card h-100 shadow-sm card6 mx-auto">
                    <div className="card-body5">
                      <h3 className="card-title5">E-mail</h3>
                      <p className="card-text5">
                        help@tkiero.app
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fila 2: Escríbenos y Redes Sociales */}
              <div className="row">
                <div className="col-12 col-md-6 mb-4">
                  <div className="card h-100 shadow-sm mx-auto card6">
                    <div className="card-body5">
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
            <ContactForm />
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


    </>
  );
};

export default Contacto;