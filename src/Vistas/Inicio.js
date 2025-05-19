import React from "react";

// traduccion del sitio web
import { useTranslation } from 'react-i18next';

import '../Estilos/Inicio.css';
import Modal from './inicio/Modal';
import { FaWallet, FaBalanceScale, FaReceipt, FaRegAddressCard, FaApple, FaGooglePlay, FaHandPointLeft, FaHandPointRight, FaFacebook, FaInstagram, FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdQrCode, MdSwapHoriz, MdCheckCircle, } from "react-icons/md";
import Seguridad from "./inicio/Bloque8";
import Recurso1 from '../img/Recurso 1.png';
import Recurso3 from '../img/Recurso 3.png';
import Recurso4 from '../img/Recurso4.png';
import Recurso17 from '../img/img17.jpg';
import Recurso18 from '../img/img18.jpeg';
import Recurso19 from '../img/img19.jpg';
import Recurso20 from '../img/img20.jpeg';
import Img11 from '../img/img11.PNG';
import Img12 from '../img/img12.png';
import Img13 from '../img/img13.png';
import Img15 from '../img/img15.png';
import Img0 from '../img/img0.png';

import remesas from '../img/remesa.png';
import paga from '../img/paga.jpeg';
import q_pay from '../img/Q_pay.png';

import block1 from '../img/5_1.png';
import block2 from '../img/5_2.png';
import block3 from '../img/5_3.png';
import block4 from '../img/5_4.png';
import block5 from '../img/5_5.png';
import block6 from '../img/5_6.png';
import block7 from '../img/block5_5.png';

const logos = [
  require("../img/img1.png"),
  require("../img/img2.png"),
  require("../img/img3.png"),
  require("../img/img4.png"),
  require("../img/img5.png"),
  require("../img/img7.png"),
  require("../img/img8.png"),
  require("../img/img9.png"),
  require("../img/img10.png"),
];

const Inicio = () => {

  const { t } = useTranslation();
  return (
    
    <div className="divprincipa row">
      <div className="bg-fondo">
        {/* bloque uno*/}
        <div className="container-fluid parent my-5">

          <div className="row col-12 col-md-12 align-items-center text-white">

            {/* Primera columna - Texto y botones */}
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
              <h1 className="fw-bold text-md-start text-center">
                 {t('inicio.bloque1.titulo')}
                <br /><br />
              </h1>
              <p className="size1 text-md-start text-center">
               {t('inicio.bloque1.texto1')}
              </p>

              {/* Botones de descarga */}
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                <a href="https://apps.apple.com/sv/app/tkiero-app/id6446649743?l=en-GB&platform=iphone" target="_blank" rel="noopener noreferrer">
                  <p className="btn store-btn"><FaApple color="#FFFFFF" size={30} />&#160; Apple Store</p>
                </a>
                <a href="https://play.google.com/store/apps/details?id=app.tkiero" target="_blank" rel="noopener noreferrer">
                  <p className="btn store-btn"><FaGooglePlay color="#FFFFFF" size={30} />&#160; Google Play</p>
                </a>
              </div>
            </div>

            {/* Segunda columna - Imagen */}
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center div1">
              <img src={Img0} alt="img0" className="img-fluid" />
            </div>
          </div>

          {/* Tercera fila - Botón centrado */}
          <div className="col-12 text-center mt-4 div3">
            <a href="https://play.google.com/store/apps/details?id=app.tkiero" style={{ fontSize: '1.3rem' }} className="btn btn-register" target="_blank" rel="noopener noreferrer">
              {t('inicio.bloque1.boton1')}
            </a>
          </div>
        </div>

        {/* bloque dos*/}
        <div className="container-fluid">
          <div className="container section-container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 text-center">
                <img src={Recurso1} className="img-fluid mobile-img" alt="Móvil 1" />
              </div>

              {/* Texto y Botón */}
              <div className="col-12 col-md-6">
                <h2 className="title">
                  {t('inicio.bloque2.titulo1')} <br /> {t('inicio.bloque2.titulo2')}
                </h2>
                <p className="highlight-text text-start">
                  {t('inicio.bloque2.text1')}
                </p>
                <p className="highlight-text text-start">
                  {t('inicio.bloque2.text2')}
                </p>
                <a href="https://play.google.com/store/apps/details?id=app.tkiero" className="btn btn-register fs-5 fs-md-4 fs-lg-3" target="_blank" rel="noopener noreferrer">
                  {t('inicio.bloque2.boton')}
                </a>
                {/*Iconos de Envío */}
                <div className="shipping-icons">
                  <img src={Recurso3} className="img-fluid" alt="UPS y DHL" />
                </div>
              </div>
            </div>

            {/* Mensaje Inferior */}
            <p className="footer-text">
              {t('inicio.bloque2.footer')}
            </p>
          </div>
        </div>
      </div>
      {/* bloque tres*/}
      <div className="container cards-container">
        <h2 className="title text-center">
          {t('inicio.bloque3.titulo1')}
          <a className="text-primary" href="https://play.google.com/store/apps/details?id=app.tkiero&pcampaignid=web_share"> {t('inicio.bloque3.titulo2')}</a>
        </h2>

        <div className="row row0">
          {/* Tarjeta Wallet */}
          <div className="col-12 col-md-4">
            <div className="card custom-card">
              <div className="icon-container">
                <FaWallet className="icon" />
              </div>
              <div className="text-container">
                <h2>{t('inicio.bloque3.card1')}</h2>
                <p>{t('inicio.bloque3.card-text1')} <br /><br />{t('inicio.bloque3.card-text2')}</p>
              </div>
            </div>
          </div>

          {/* Tarjeta Servicios Legales */}
          <div className="col-12 col-md-4">
            <div className="card custom-card">
              <div className="icon-container">
                <FaBalanceScale className="icon" />
              </div>
              <div className="text-container3">
                <h2>{t('inicio.bloque3.card2')}</h2>
                <p>{t('inicio.bloque3.card-text3')}<br /><br />{t('inicio.bloque3.card-text4')}</p>
              </div>
            </div>
          </div>

          {/* Tarjeta Finanzas */}
          <div className="col-12 col-md-4">
            <div className="card custom-card">
              <div className="icon-container">
                <FaReceipt className="icon" />
              </div>
              <div className="text-container">
                <h2>{t('inicio.bloque3.card3')}</h2>
                <p>{t('inicio.bloque3.card-text5')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-auto me-4">
          <div className="card custom-card custom2">
            <div className="text-container2">
              <h2 className="h2">{t('inicio.bloque3.card4')}</h2>
              <p>{t('inicio.bloque3.card-text6')}</p>
              <ul>
                <li>{t('inicio.bloque3.card-text7')}</li>
                <li>{t('inicio.bloque3.card-text8')}</li>
                <li>{t('inicio.bloque3.card-text9')}</li>
              </ul>
            </div>
            <div className="icon-container2">
              <FaRegAddressCard className="icon" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-auto">
          <div className="footer_blocl_3">
            <p className="highlight-text text-center">
               {t('inicio.bloque3.card-text10')}<br />
              {t('inicio.bloque3.card-text11')}
            </p>
            <a href="https://play.google.com/store/apps/details?id=app.tkiero" className="btn btn-register" target="_blank" rel="noopener noreferrer">
              {t('inicio.bloque3.boton')}
            </a>
          </div>
        </div>

      </div>
      {/*bloque 4*/}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Columna de Texto */}
          <div className="col-12 col-md-8 order-2 order-md-1">
            <h2 className="mb-4 text-center">{t('inicio.bloque4.titulo')}</h2>
            <p className="highlight-text block4">
              {t('inicio.bloque4.text1')}
              <br /><br />
              {t('inicio.bloque4.text2')}
              <br /><br />
              {t('inicio.bloque4.text3')}
            </p>
            <div className="d-flex flex-row gap-4">
              <button className="btn btn-register mt-3"> {t('inicio.bloque4.boton')} &nbsp; <FaHandPointRight color="#FFFFFF" size={25} /></button>
              <a href="https://apps.apple.com/sv/app/tkiero-app/id6446649743?l=en-GB&platform=iphone"><FaApple className="mt-3 apple" size={45} /></a>
              <a href="https://play.google.com/store/apps/details?id=app.tkiero"><FaGooglePlay className="mt-3 apple" size={45} /></a>
            </div>
          </div>
          {/* Columna de Imagen */}
          <div className="col-12 col-md-4 text-center text-md-end mt-4 mt-md-0 order-1 order-md-2">
            <img src={Recurso4} alt="img4" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      {/*blocke 5*/}
      <div className="container  my-5">
        <div className="row align-items-center">
          {/* Columna de Texto */}
          <div className="col-12 col-md-12 order-2 order-md-2">
            <h2 className="mb-4 text-center">{t('inicio.bloque5.titulo')}</h2>
            <p className="highlight-text block4">
              {t('inicio.bloque5.text1')}
              <br />
            </p>
            <div className="d-flex flex-column gap-4 align-items-center mb-5 order-1 order-md-1">
              <div>
                <h2 className="text-center text-dark">
                  {t('inicio.bloque5.text2')} <span style={{ color: '#007bff' }}>Tkiero App</span> {t('inicio.bloque5.text3')} 
                </h2>
              </div>
              <div className="slider-container2 mt-5">
                <div className="slider2">
                  <div className="slide2">
                    <img src={Recurso17} alt="Imagen 17" />
                  </div>
                  <div className="slide2">
                    <img src={Recurso18} alt="Imagen 18" />
                  </div>
                  <div className="slide2">
                    <img src={Recurso19} alt="Imagen 19" />
                  </div>
                  <div className="slide2">
                    <img src={Recurso20} alt="Imagen 20" />
                  </div>
                  <div className="slide2">
                    <img src={remesas} alt="remesa" />
                  </div>
                  <div className="slide2">
                    <img src={paga} alt="paga" />
                  </div>
                  <div className="slide2">
                    <img src={q_pay} alt="Qpay" />
                  </div>
                  <div className="slide2">
                    <img src={Recurso20} alt="Imagen 20" />
                  </div>
                </div>
              </div>

              {/*blocke 5.5*/}
              <div className="services-payment-container my-4 my-lg-6 px-2 px-md-4 bg-fondo">
                <div className="services-grid">
                  <div className="payment-header text-center">
                    <h2>
                      {t('inicio.bloque5-5.titulo')}
                    </h2>
                  </div>
                  <div className="payment-icons-group">
                    <div className="icons-row">
                      {[block1, block6, block2].map((img, index) => (
                        <div key={`top-icon-${index}`} className="payment-icon-wrapper">
                          <img
                            src={img}
                            alt={`Servicio ${index + 1}`}
                            className="payment-icon-img"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="featured-payment-image-container align-item-center text-center">
                    <img
                      src={block7}
                      alt="Servicios disponibles"
                      className="featured-payment-image"
                    />
                  </div>
                  <div className="payment-icons-group">
                    <div className="icons-row">
                      {[block3, block4, block5].map((img, index) => (
                        <div key={`bottom-icon-${index}`} className="payment-icon-wrapper">
                          <img
                            src={img}
                            alt={`Beneficio ${index + 1}`}
                            className="payment-icon-img"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="text-center col-auto me-4 alianza-container">
          <h3 className="text-primary">{t('inicio.bloque5-5.titulo2')}</h3>
          <h4>{t('inicio.bloque5-5.text1')}<span className="text-primary">{t('inicio.bloque5-5.text2')}</span> {t('inicio.bloque5-5.text3')}</h4>
        </div>
        <div className="carousel-container">
          <div className="carousel-track">
            {/* Se repiten las imágenes dos veces para el efecto infinito */}
            {[...logos, ...logos].map((logo, index) => (
              <img key={index} src={logo} alt="logos" className="carousel-img" />
            ))}
          </div>
        </div>
      </div>
      {/*Bloque 6*/}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Columna de Texto */}
          <div className="col-12 col-md-12 order-2 order-md-1">
            <h2 className="mb-4 text-center">{t('inicio.bloque6.titulo')}</h2>
            <p className="highlight-text block4">
              {t('inicio.bloque6.text1')}
            </p>


            <div className="row justify-content-between">
              {/* Card 1 */}
              <div className="col-12 col-md-4 mb-4">
                <div className="card text-center p-4 shadow rounded-4 block6" style={{ height: "100%" }}>
                  <MdQrCode size={50} className="mx-auto mb-3 icon2" />
                  <p className="highlight-text block4">
                    {t('inicio.bloque6.card1')}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-12 col-md-4 mb-4">
                <div className="card text-center p-4 shadow rounded-4 block6" style={{ height: "100%" }}>
                  <MdCheckCircle size={50} className="mx-auto mb-3 icon2" />
                  <p className="highlight-text block4">
                    {t('inicio.bloque6.card2')}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-12 col-md-4 mb-4">
                <div className="card text-center p-4 shadow rounded-4 block6" style={{ height: "100%" }}>
                  <MdSwapHoriz size={50} className="mx-auto mb-3 icon2" />
                  <p className="highlight-text block4">
                    {t('inicio.bloque6.card3')}
                  </p>
                </div>
              </div>
            </div>


            <div className="d-flex flex-row gap-4 justify-content-center space">
              <a href="https://apps.apple.com/sv/app/tkiero-app/id6446649743?l=en-GB&platform=iphone"><FaApple className="mt-3 apple" size={45} /></a>
              <a href="https://play.google.com/store/apps/details?id=app.tkiero"><FaGooglePlay className="mt-3 apple" size={45} /></a>
              <button className="btn btn-register mt-3"><FaHandPointLeft color="#FFFFFF" size={25} />&nbsp; {t('inicio.bloque6.boton')}</button>
            </div>
          </div>


        </div>
      </div>
      {/*Bloque 7*/}
      <div className="container my-5">
        <div>
          <h2 className="text-center">{t('inicio.bloque7.titulo')} <span className="text-primary" >Tkiero</span>{t('inicio.bloque7.titulo2')} <br />{t('inicio.bloque7.titulo3')}</h2>
        </div>
        <div className="slider-container mt-5">
          <div className="slider">
            <div className="slide">
              <img src={Img11} alt="Imagen 11" />
            </div>
            <div className="slide">
              <img src={Img12} alt="Imagen 12" />
            </div>
            <div className="slide">
              <img src={Img13} alt="Imagen 13" />
            </div>
            <div className="slide">
              <img src={Img11} alt="Imagen 14" />
            </div>
            <div className="slide">
              <img src={Img12} alt="Imagen 15" />
            </div>
            <div className="slide">
              <img src={Img13} alt="Imagen 16" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-8 block7">
            <p>{t('inicio.bloque7.text1')}<br />
              <Modal />
            </p>
          </div>
          <div className="col-12 col-md-4 justify-content-center" style={{ display: 'flex', gap: '20px' }}>
            <a href="https://www.facebook.com/Tkieroapp" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={40} className="block7-ico" />
            </a>
            <a href="https://www.instagram.com/tkiero_app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} className="block7-ico" />
            </a>
            <a href="https://www.tiktok.com/@tkiero_app?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={40} className="block7-ico" />
            </a>
            <a href="https://www.linkedin.com/company/tkiero-app/about/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} className="block7-ico" />
            </a>
          </div>
        </div>
      </div>

      {/*Bloque 8*/}
      <div>
        {/* Puedes agregar más secciones aquí */}
        <Seguridad />
      </div>
      {/*Bloque 9*/}
      <div className="container my-5 d-flex justify-content-center " >
        <div className="row align-items-center hero-secction">
          {/* Columna de Texto */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-end order-2 order-md-1">
            <div className="col-md-12 text-white p-3">
              <h2 className="fw-bold title3 text-md-start text-center">{t('inicio.bloque9.titulo')}</h2>
              <p className="description text-md-start text-center">
                {t('inicio.bloque9.text1')} <br /><br />
                {t('inicio.bloque9.text2')} 
              </p>
              <div className="text-md-start text-center">
                <button className="btn download-btn mt-3"> {t('inicio.bloque9.boton')}  &nbsp; <FaHandPointRight color="#FFFFFF" size={25} /></button>
                <a href="https://apps.apple.com/sv/app/tkiero-app/id6446649743?l=en-GB&platform=iphone"><FaApple color="#FFFFFF" className="mt-3 mx-3 " size={40} /></a>
                <a href="https://play.google.com/store/apps/details?id=app.tkiero"><FaGooglePlay color="#FFFFFF" className="mt-3 " size={40} /></a>
              </div>
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="col-12 col-md-6 text-center text-md-center mt-4 mt-md-0 order-1 order-md-2">
            <img src={Img15} alt="Logo2" className="logo2-img w-100" />
            <div className="social-icons text-center text-md-center mt-5">
              <a href="https://www.facebook.com/Tkieroapp" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.instagram.com/tkiero_app" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.tiktok.com/@tkiero_app" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={30} />
              </a>
              <a href="https://www.linkedin.com/company/tkiero-app/about/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.youtube.com/@Tkiero_app" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;