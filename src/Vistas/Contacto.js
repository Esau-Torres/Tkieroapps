import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// traduccion del sitio web
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  return (
    <>
      {/*Bloque 1*/}
      <section className="bg-fondo py-5">
        <Container>
          <div className="col-12 text-center mb-5">
            <img src={logo} alt="logo" height={"80px"} width={"auto"} />
            <h2 className="text-center mt-4">{t('contacto.bloque1.titulo')}</h2>
          </div>

          <Row>
            <Col>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                speed={1500} 
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
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3">{t('contacto.bloque1.card-title1')}</h4>
                      <p>{t('contacto.bloque1.card-text1')}</p>
                    </div>
                    <div className="bg-primary p-1">
                      <p className="text-center text-light m-2">&#160;</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services2} alt="Pago con QuickPay" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3">{t('contacto.bloque1.card-title2')}</h4>
                      <p className="text-center">{t('contacto.bloque1.card-text2')}</p>
                    </div>
                    <div className="bg-primary p-1">
                      <p className="text-center text-light m-2">&#160;</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services1} alt="Lightning Network" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-3 fs-5 fs-md-4 fs-lg-3">{t('contacto.bloque1.card-title3')}</h4>
                      <p>{t('contacto.bloque1.card-text3')}</p>
                    </div>
                    <div className="bg-primary p-1">
                      <p className="text-center text-light m-2">&#160;</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services3} alt="Recargas telefónicas" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3" >{t('contacto.bloque1.card-title4')}</h4>
                      <p>{t('contacto.bloque1.card-text4')}</p>
                    </div>
                    <div className="bg-primary p-1">
                      <p className="text-center text-light m-2">&#160;</p>
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
                      <h4 className="fs-5 fs-md-4 fs-lg-3">{t('contacto.bloque1.card-title5')}</h4>
                      <p>{t('contacto.bloque1.card-text5')}</p>
                    </div>
                    <div className="bg-primary p-1">
                      <p className="text-center text-light m-2">&#160;</p>
                    </div>
                  </div>
                </SwiperSlide>


                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services5} alt="Recargas telefónicas" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-4 mt-2 fs-5 fs-md-4 fs-lg-3">{t('contacto.bloque1.card-title6')}</h4>
                      <p>{t('contacto.bloque1.card-text6')}</p>
                    </div>
                    <div className="bg-primary p-1">
                      <p className="text-center text-light m-2">&#160;</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services6} alt="Recargas telefónicas" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-3 mt-3 fs-5 fs-md-4 fs-lg-3">{t('contacto.bloque1.card-title7')}</h4>
                      <p>{t('contacto.bloque1.card-text7')}</p>
                    </div>
                    <div className="bg-primary p-1">
                      <p className="text-center text-light m-2">&#160;</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid-item">
                    <div className="image-part">
                      <img src={services7} alt="Recargas telefónicas" />
                    </div>
                    <div className="text-part">
                      <h4 className="mb-4 fs-5 fs-md-4 fs-lg-3">{t('contacto.bloque1.card-title8')}</h4>
                      <p>{t('contacto.bloque1.card-text8')}</p>
                    </div>
                    <div className="bg-primary p-1">
                      <p className="text-center text-light m-2">&#160;</p>
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
            <h2 className="payment-titleservices">{t('contacto.bloque2.title1')}</h2>
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
                  {t('contacto.bloque2.title2')}
                </h3>

                <div className="instruction-step">
                  <p className="step-guide">
                    {t('contacto.bloque2.text1')} <strong className="highlight-pathservices">{t('contacto.bloque2.text2')}</strong>
                  </p>
                  <ol className="step-list">
                    <li className="step-item">
                      <div className="step-marker">1</div>
                      <div className="step-content">
                        <strong>Tkiero</strong> -  {t('contacto.bloque2.text3')}
                      </div>
                    </li>
                    <li className="step-item">
                      <div className="step-marker">2</div>
                      <div className="step-content">
                        <strong>Lightning</strong> - {t('contacto.bloque2.text4')}
                      </div>
                    </li>
                    <li className="step-item">
                      <div className="step-marker">3</div>
                      <div className="step-content">
                        <strong>Chivo Wallet</strong> - {t('contacto.bloque2.text5')}
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="payment-methodservices">
                  <h4 className="methods-title">{t('contacto.bloque2.title3')}</h4>
                  <ul className="method-list">
                    <li className="method-item">
                      <span className="method-icon">✓</span>
                      <span className="method-detail">
                        {t('contacto.bloque2.text6')} <span className="highlight-code">tunombre@tkiero.money</span>
                      </span>
                    </li>
                    <li className="method-item">
                      <span className="method-icon">✓</span>
                      <span className="method-detail">
                        {t('contacto.bloque2.text7')} <span className="highlight-code">+503xxxxxxx@tkiero.money</span>
                      </span>
                    </li>
                    <li className="method-item">
                      <span className="method-icon">✓</span>
                      <span className="method-detail">
                       {t('contacto.bloque2.text8')} <span className="money-emoji">💸</span>
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
      <h2 className="text-center">{t('contacto.bloque3.title1')}</h2>
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
                      <h3 className="card-title">{t('contacto.bloque3.title2')}</h3>
                    </div>
                    <p className="card-text">
                      {t('contacto.bloque3.text1')}
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
                      <h3 className="card-title">{t('contacto.bloque3.title3')}</h3>
                    </div>
                    <p className="card-text">{t('contacto.bloque3.text2')}</p>
                    <ul className="card-text">
                      <li>{t('contacto.bloque3.text3')}</li>
                      <li>{t('contacto.bloque3.text4')}</li>
                      <li>{t('contacto.bloque3.text5')}</li>
                      <li>{t('contacto.bloque3.text6')}</li>
                      <li>{t('contacto.bloque3.text7')}</li>
                      <li>{t('contacto.bloque3.text8')}</li>
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