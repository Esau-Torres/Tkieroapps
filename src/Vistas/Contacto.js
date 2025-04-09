import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import visible from "./inicio/visible";
import '../Estilos/AcercaDe.css';
import logo from '../img/logotipo.png';
import services from '../img/services1.jpeg';
import services1 from '../img/recursos2.jpg';
import services2 from '../img/services0.jpeg';
import services3 from '../img/services4.jpeg';
import services4 from '../img/services5.jpeg';
import services5 from '../img/services6.jpeg';
import services6 from '../img/services7.jpeg';
import services7 from '../img/services8.jpeg';
import services8 from '../img/Services9.png';


const Contacto = () => {

  visible();

  return (
    <>
      {/*Bloque 1*/}
      <section className="bg-fondo py-5">
        <Container>
          <div className="col-12 text-center mb-5">
            <img src={logo} alt="logo" height={"80px"} width={"auto"} />
            <h2 className="text-center mt-4">!Tkiero cambia tu manera de manejar tu dinero¡</h2>
          </div>

          <Row>
            <Col>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                speed={1500} // Desplazamiento suave
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  576: { slidesPerView: 1, slidesPerGroup: 1 },
                  768: { slidesPerView: 2, slidesPerGroup: 1 },
                  1024: { slidesPerView: 3, slidesPerGroup: 1 },
                  1200: { slidesPerView: 4, slidesPerGroup: 1 }
                }}
              >


                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services} alt="Pago de facturas" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3">¡Punto Xpress 24/7, los 365 días del año!</h4>
                      <p>Paga todas tus facturas de agua, luz, internet, cable y mucho más, en un solo lugar, desde tu teléfono y a cualquier hora del día.</p>
                    </div>
                    <div className="bg-primary p-1">
                      <a href="https://play.google.com/store/apps/details?id=app.tkiero">
                        <p className="text-center text-light m-2">Descarga La App</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services2} alt="Pago con QuickPay" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3">Tkiero: tu billetera en cada tienda.</h4>
                      <p className="text-center">Aceptada en miles de comercios afiliados a QuickPay.</p>
                    </div>
                    <div className="bg-primary p-1">
                      <a href="https://play.google.com/store/apps/details?id=app.tkiero">
                        <p className="text-center text-light m-2">Descarga La App</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services1} alt="Lightning Network" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-3 fs-5 fs-md-4 fs-lg-3">Con Tkiero, enviar y recibir por Lightning no tiene límites.</h4>
                      <p>Conéctate con cualquier billetera Bitcoin que use Lightning Network. Envía y recibe dinero al instante, sin fronteras ni complicaciones.</p>
                    </div>
                    <div className="bg-primary p-1">
                      <a href="https://play.google.com/store/apps/details?id=app.tkiero">
                        <p className="text-center text-light m-2">Descarga La App</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services3} alt="Recargas telefónicas" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3" >Nunca te quedes sin saldo</h4>
                      <p>Tkiero te da acceso a todas las compañías telefónicas desde una sola app. Recarga o compra paquetes al instante, estés donde estés.</p>
                    </div>
                    <div className="bg-primary p-1">
                      <a href="https://play.google.com/store/apps/details?id=app.tkiero">
                        <p className="text-center text-light m-2">Descarga La App</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                {/*Bloques agregados*/}
                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services4} alt="Recargas telefónicas" />
                    </div>
                    <div className="text-part">
                      <h4 className="fs-5 fs-md-4 fs-lg-3">Seguridad total: transacciones solo con tu cuenta personal</h4>
                      <p>Usa 365 para recargar o retirar desde tu billetera Tkiero, usando únicamente tu cuenta bancaria registrada a tu nombre</p>
                    </div>
                    <div className="bg-primary p-1">
                      <a href="https://play.google.com/store/apps/details?id=app.tkiero">
                        <p className="text-center text-light m-2">Descarga La App</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>


                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services5} alt="Recargas telefónicas" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-4 mt-2 fs-5 fs-md-4 fs-lg-3">Recarga tu billetera al instante y sin complicaciones</h4>
                      <p>Usa tu tarjeta de crédito o débito, desde cualquier banco.
                        Solo necesitas una cosa: que sea tuya. Por tu seguridad, no aceptamos tarjetas de terceros.</p>
                    </div>
                    <div className="bg-primary p-1">
                      <a href="https://play.google.com/store/apps/details?id=app.tkiero">
                        <p className="text-center text-light m-2">Descarga La App</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services6} alt="Recargas telefónicas" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-3 mt-3 fs-5 fs-md-4 fs-lg-3">Documentos legales a domicilio, estés donde estés</h4>
                      <p>Solicita partidas de nacimiento, actas y más desde cualquier lugar. El proceso es 100% en línea y recibes tus documentos físicos por DHL, UPS o FedEx, incluso apostillados si lo necesitas</p>
                    </div>
                    <div className="bg-primary p-1">
                      <a href="https://play.google.com/store/apps/details?id=app.tkiero">
                        <p className="text-center text-light m-2">Descarga La App</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services7} alt="Recargas telefónicas" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3">Envía dinero seguro y sin cuentas bancarias</h4>
                      <p>Con solo el DUI o pasaporte, el dinero llega rápido y seguro desde tu app Tkiero</p>
                    </div>
                    <div className="bg-primary p-1">
                      <a href="https://play.google.com/store/apps/details?id=app.tkiero">
                        <p className="text-center text-light m-2">Descarga La App</p>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>


      {/*Bloque 3*/}
      <section className="payment-sectionservices">
        <div className="payment-containerservices">
          {/* Header */}
          <div className="payment-headerservices">
            <h2 className="payment-titleservices">¡Recibe pagos al instante desde cualquier lugar!</h2>
            <div className="lightning-icon">⚡</div>
          </div>

          {/* Contenido principal */}
          <div className="payment-contentservices">
            {/* Columna de imagen */}
            <div className="payment-imageservices">
              <div className="image-wrapperservices">
                <img
                  src={services8}
                  alt="Servicios de pago Tkiero"
                  className="service-image"
                />
              </div>
            </div>

            {/* Columna de información */}
            <div className="payment-infoservices">
              <div className="info-card">
                <h3 className="info-headlineservices text-center">
                  Con tkiero puedes recibir dinero desde chivo , tkiero y cualquier billetera lightning estés donde estes.
                </h3>

                <div className="instruction-step">
                  <p className="step-guide">
                    Ve a la sección <strong className="highlight-pathservices">Billetera → Recibir</strong>
                  </p>
                  <ol className="step-list">
                    <li className="step-item">
                      <div className="step-marker">1</div>
                      <div className="step-content">
                        <strong>Tkiero</strong> - Entre usuarios de Tkiero
                      </div>
                    </li>
                    <li className="step-item">
                      <div className="step-marker">2</div>
                      <div className="step-content">
                        <strong>Lightning</strong> - Desde cualquier billetera Lightning (Strike, Wallet of Satoshi, Muun, etc.)
                      </div>
                    </li>
                    <li className="step-item">
                      <div className="step-marker">3</div>
                      <div className="step-content">
                        <strong>Chivo Wallet</strong> - Recibe directamente desde la app Chivo (en USD o BTC)
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="payment-methodservices">
                  <h4 className="methods-title">¿Cómo te pueden enviar dinero?</h4>
                  <ul className="method-list">
                    <li className="method-item">
                      <span className="method-icon">✓</span>
                      <span className="method-detail">
                        Con tu nickname: <span className="highlight-code">tunombre@tkiero.money</span>
                      </span>
                    </li>
                    <li className="method-item">
                      <span className="method-icon">✓</span>
                      <span className="method-detail">
                        Con tu número internacional: <span className="highlight-code">+503xxxxxxx@tkiero.money</span>
                      </span>
                    </li>
                    <li className="method-item">
                      <span className="method-icon">✓</span>
                      <span className="method-detail">
                        Transferencias internas usando nickname, email o número <span className="money-emoji">💸</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Bloque 2 */}
      <h2 className="text-center">Una travesía de innovación y compromiso con la inclusión financiera.</h2>
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
                      Tkiero es una aplicación que busca revolucionar la manera en que las personas manejan su dinero, facilitando pagos digitales, remesas y servicios financieros de forma rápida y accesible.
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
                    <p className="card-text">En Tkiero, nos especializamos en:</p>
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