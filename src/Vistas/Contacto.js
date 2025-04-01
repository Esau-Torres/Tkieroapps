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
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3">Punto express 24/7 los 365 días del año</h4>
                      <p>Paga todas tus facturas de agua, luz, internet, cable en un solo lugar, en cualquier hora.</p>
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
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3">Paga en cualquier lugar</h4>
                      <p>En Tkiero App puedes pagar en establecimientos afiliados a QuickPay.</p>
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
                      <h4 className="mb-2 fs-6 fs-md-4 fs-lg-3">Paga o recibe dinero desde cualquier Lightning Network⚡</h4>
                      <p>Envia o recibe transferencias desde cualquier billetera Bitcoin vía Lightning Network.</p>
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
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3" >Realiza tus recargas telefónicas</h4>
                      <p>Realiza tus recargas o paquetes de tu compañía telefónica con nosotros.</p>
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
                      <h4 className="fs-5 fs-md-4 fs-lg-3">Realiza transacciones 365 desde tu billetera o cuenta bancaria</h4>
                      <p>Carga y retira tu billetera tkiero con tu cuenta de banco de forma seguras y rápidas</p>
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
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3">Recarga tu billetera con tu tarjeta de debito o crédito</h4>
                      <p>Realiza transacciones con tarjeta de crédito o débito, con tu banco de preferencia.</p>
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
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3">Obten tu Partida de Nacimiento</h4>
                      <p>Obtén tus documentos legales desde cualquier lugar de manera rápida y segura.</p>
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
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3">Envía Dinero a Terceros</h4>
                      <p>Transfiere dinero de forma segura y rápida usando solo tu DUI o pasaporte</p>
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