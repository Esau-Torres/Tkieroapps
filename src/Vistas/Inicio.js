import React from "react";
import '../Estilos/Inicio.css';
import Modal from './inicio/Modal';
import { FaWallet, FaBalanceScale, FaReceipt, FaRegAddressCard, FaApple, FaGooglePlay, FaHandPointLeft, FaHandPointRight, FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { MdQrCode, MdSwapHoriz, MdCheckCircle, } from "react-icons/md";
import Seguridad from "./inicio/Bloque8";
import Recurso9 from '../img/Recurso9.png';
import Recurso10 from '../img/Recurso10.png';
import Recurso1 from '../img/Recurso 1.png';
import Recurso3 from '../img/Recurso 3.png';
import Recurso4 from '../img/Recurso4.png';
import Recurso5 from '../img/Recurso5.png';
import Recurso6 from '../img/Recurso 6.png';
import Recurso7 from '../img/Recurso 7.png';
import Img11 from '../img/img11.PNG';
import Img12 from '../img/img12.png';
import Img13 from '../img/img13.png';
import Img15 from '../img/img15.png';
import Img0 from '../img/img0.png';

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

  return (
    /*bloque uno*/
    <div className="divprincipa row">
      <div className="container-fluid parent my-5">

        <div className="row col-12 col-md-12 align-items-center text-white">

          {/* Primera columna - Texto y botones */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <h1 className="fw-bold text-md-start text-center">
              Envia Remesas a tus familiares  en El Salvador sin pagar comisiones<br /><br />
            </h1>

            <p className="size1 text-md-start text-center">
              Envia remesas al instante sin pagar comisiones desde tu <br /> teléfono. Regístrate únicamente con el DUI.
            </p>

            {/* Botones de descarga */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <a href="https://apps.apple.com/sv/app/tkiero-app/id6446649743?l=en-GB&platform=iphone" target="_blank" rel="noopener noreferrer">
                <img src={Recurso9} alt="Google Play" className="img-fluid btn store-btn" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=app.tkiero" target="_blank" rel="noopener noreferrer">
                <img src={Recurso10} alt="App Store" className="img-fluid btn store-btn" />
              </a>
            </div>
          </div>

          {/* Segunda columna - Imagen */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center div1">
            <img src={Img0} alt="Remesas" className="img-fluid" />
          </div>

        </div>

        {/* Tercera fila - Botón centrado */}
        <div className="col-12 text-center mt-4 div3">
          <a href="https://play.google.com/store/apps/details?id=app.tkiero" className="btn store-btn text-white" target="_blank" rel="noopener noreferrer">
            Crea tu cuenta
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
                Transferencias instantáneas, documentos <br /> legales y más en tu bolsillo.
              </h2>
              <p className="highlight-text text-start">
                Tramita partidas de nacimiento, actas de matrimonio y más, apostilladas, entregadas a tiempo con DHL.
              </p>
              <p className="highlight-text text-start">
                Monitorea tu envío en tiempo real desde El Salvador a cualquier parte del mundo. ¡Rápido, seguro y fácil con Tkiero app!
              </p>
              <a href="https://play.google.com/store/apps/details?id=app.tkiero" className="btn btn-register" target="_blank" rel="noopener noreferrer">
                Regístrate
              </a>
              {/*Iconos de Envío */}
              <div className="shipping-icons">
                <img src={Recurso3} className="img-fluid" alt="UPS y DHL" />
              </div>
            </div>
          </div>

          {/* Mensaje Inferior */}
          <p className="footer-text">
            Olvídate de largas esperas. Nosotros llevamos tus documentos por ti.
          </p>
        </div>
      </div>

      {/* bloque tres*/}
      <div className="container cards-container">
        <h2 className="title text-center">
          Descubre todo lo que puedes hacer con
          <a className="text-primary" href="https://play.google.com/store/apps/details?id=app.tkiero&pcampaignid=web_share"> Tkiero App</a>
        </h2>

        <div className="row row0">
          {/* Tarjeta Wallet */}
          <div className="col-12 col-md-4">
            <div className="card custom-card">
              <div className="icon-container">
                <FaWallet className="icon" />
              </div>
              <div className="text-container">
                <h2>Wallet</h2>
                <p>Envia y récibe transferencias al instante en tu wallet Tkiero 24/7 <br /><br /> !Sin Comisiones¡</p>
              </div>
            </div>
          </div>

          {/* Tarjeta Servicios Legales */}
          <div className="col-12 col-md-4">
            <div className="card custom-card">
              <div className="icon-container">
                <FaBalanceScale className="icon" />
              </div>
              <div className="text-container">
                <h2>Retiros</h2>
                <p>Retira tu dinero de Tkiero wallet en efectivo o transfierelo a tu banco. <br /><br /> !Con la tasa de comisión más baja¡ </p>
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
                <h2>Pagos</h2>
                <p>Paga tus recibos de servicios básicos desde Tkiero Wallet.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-auto me-4">
          <div className="card custom-card card2">
            <div className="text-container2">
              <h2 className="h2">Crea tu cuenta </h2>
              <p>Para registrarse llena el formulario, unicamente necesitarás tener tu Dui a la mano y ser mayor de 18 años para commenzar a disfrutar de todos los beneficios que Tkiero.app tiene para ti.</p>
              <ul>
                <li>Recibe pagos y remesas del exterior a tu Wallet Tkiero al instante sin comisiones.</li>
                <li>Compra en cualquier comercio y paga con tu teléfono usando el sistema QR Lightning. </li>
                <li>Solicita documentos como partidas, actas y apostillas, y recibelos hasta la puerta de tu casa. </li>
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
              Miles de Salvadoreños prefieren Tkiero Wallet para enviar, recibir y administrar su dinero. <br />
              ¿A que esperas? Haz tu cuenta en Tkiero y toma el control de tu dinero.
            </p>
            <button className="btn-register">Regístrate Ahora</button>
          </div>
        </div>

      </div>
      {/*blocke 4*/}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Columna de Texto */}
          <div className="col-12 col-md-8 order-2 order-md-1">
            <h2 className="mb-4 text-center">Recibe pagos y remesas internacionales</h2>
            <p className="highlight-text block4">
              Recibe pagos y remesas del extranjero a tu Wallet Tkiero sin
              comisiones. Para transferir tu dinero a tu cuenta bancaria
              ó retirar en efectivo en comercios afiliados a PuntoXpress
              pagando la tasa de comisión más baja de todo El Salvador.
              <br /><br />
              ¿Cuánto ahorras? Usa nuestra calculadora y compárala
              con PayPal u otras plataformas de transferencias
              internacionales.
              <br /><br />
              Olvídate de los días de espera. Con Tkiero, tu dinero cae
              al instante.
            </p>
            <div className="d-flex flex-row gap-4">
              <button className="btn btn-primary btn-register2 mt-3"> Crea tu cuenta &nbsp; <FaHandPointRight color="#FFFFFF" size={25} /></button>
              <a href="#"><FaApple color="#000000" className="mt-3 " size={45} /></a>
              <a href="https://play.google.com/store/apps/details?id=app.tkiero"><FaGooglePlay color="#34A853" className="mt-3 " size={45} /></a>
            </div>
          </div>
          {/* Columna de Imagen */}
          <div className="col-12 col-md-4 text-center text-md-end mt-4 mt-md-0 order-1 order-md-2">
            <img src={Recurso4} alt="Remesas" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      {/*blocke 5*/}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Columna de Imagen */}
          <div className="col-12 col-md-4 text-center text-md-end mt-4 mt-md-0 order-1 order-md-1">
            <img src={Recurso6} alt="Remesas" className="img-fluid rounded" />
          </div>
          {/* Columna de Texto */}
          <div className="col-12 col-md-8 order-2 order-md-2">
            <h2 className="mb-4 text-center">Retira tu dinero de Wallet en efectivo</h2>
            <p className="highlight-text block4">
              Retira tu dinero en efectivo de tkiero Wallet con la taza
              de comisión más baja en los comercios afiliados de
              Puntxpress a nivel nacional. Elige el que esté más
              cerca de ti. <br />
            </p>
            <div className="d-flex flex-row gap-4 justify-content-center mb-5">
              <img src={Recurso5} alt="Remesas" className="img-fluid rounded" />
            </div>
          </div>
          {/* rotacion infinita*/}
        </div>
        <div className="text-center col-auto me-4 alianza-container">
          <h3 className="text-primary">NUESTRAS ALIANZAS ESTRATEGICAS</h3>
          <h4>Paga todos <span className="text-primary">TUS SERVICIOS</span> Desde la comodidad de tu casa u oficina</h4>
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
          <div className="col-12 col-md-8 order-2 order-md-1">
            <h2 className="mb-4 text-center">Vende, Compra y paga con Tetecnología Lightning</h2>
            <p className="highlight-text block4">
              Lightning la forma más rápida de pagar o cobrar al instante con solo
              escanear un QR desde tu celular.
            </p>


            <div className="row justify-content-between">
              {/* Card 1 */}
              <div className="col-12 col-md-4">
                <div className="card text-center p-4 shadow rounded-4 block6" style={{ height: "100%" }}>
                  <MdQrCode size={50} className="mx-auto mb-3 icon2" />
                  <p className="highlight-text block4">
                    El vendedor genera un QR de cobro con el monto $$$ a recibir desde la app.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-12 col-md-4">
                <div className="card text-center p-4 shadow rounded-4 block6" style={{ height: "100%" }}>
                  <MdCheckCircle size={50} className="mx-auto mb-3 icon2" />
                  <p className="highlight-text block4">
                    El comprador abre su app Tkiero, escanea el QR y confirma el pago.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-12 col-md-4">
                <div className="card text-center p-4 shadow rounded-4 block6" style={{ height: "100%" }}>
                  <MdSwapHoriz size={50} className="mx-auto mb-3 icon2" />
                  <p className="highlight-text block4">
                    ¡Listo! El dinero se transfiere al instante de una cuenta a otra.
                  </p>
                </div>
              </div>
            </div>


            <div className="d-flex flex-row gap-4 justify-content-end space">
              <a href="#"><FaApple color="#000000" className="mt-3 " size={45} /></a>
              <a href="https://play.google.com/store/apps/details?id=app.tkiero"><FaGooglePlay color="#34A853" className="mt-3 " size={45} /></a>
              <button className="btn btn-primary btn-register2 mt-3"><FaHandPointLeft color="#FFFFFF" size={25} />&nbsp; Descarga la apps</button>
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="col-12 col-md-4 text-center text-md-end mt-4 mt-md-0 order-1 order-md-2">
            <img src={Recurso7} alt="QR" className="img-fluid rounded" />
          </div>

        </div>
      </div>
      {/*Bloque 7*/}
      <div className="container my-5">
        <div>
          <h2 className="text-center">Aprende a usar <span className="text-primary" >Tkiero</span> en minutos con <br /> nuestros tutoriales en TikTok</h2>
        </div>
        <div className="slider-container mt-5">
          <div className="slider">
            <div className="slide">
              <img src={Img11} alt="Imagen 1" />
            </div>
            <div className="slide">
              <img src={Img12} />
            </div>
            <div className="slide">
              <img src={Img13} />
            </div>
            <div className="slide">
              <img src={Img11} alt="Imagen 1" />
            </div>
            <div className="slide">
              <img src={Img12} />
            </div>
            <div className="slide">
              <img src={Img13} />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-8 block7">
            <p>¿Alguna Duda?<br />
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
      <div className="container my-5 d-flex justify-content-center" >
        <div className="row align-items-center hero-secction">
          {/* Columna de Texto */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-end order-2 order-md-1">
            <div className="col-md-12 text-white p-3">
              <h2 className="fw-bold title3 text-md-start text-center">Fácil, rápido y seguro</h2>
              <p className="description text-md-start text-center">
                Hacemos tu vida más fácil para ti y los tuyos. <br /><br />
                Te apoyamos con los trámites legales, realizar pagos y wallet integrada.
                Nuestra plataforma está disponible 24/7 los 365 días del año.
              </p>
              <div className="text-md-start text-center">
                <button className="btn download-btn mt-3"> Descarga la app &nbsp; <FaHandPointRight color="#FFFFFF" size={25} /></button>
                <a href="#"><FaApple color="#000000" className="mt-3 " size={45} /></a>
                <a href="https://play.google.com/store/apps/details?id=app.tkiero"><FaGooglePlay color="#34A853" className="mt-3 " size={45} /></a>
              </div>
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="col-12 col-md-6 text-center text-md-center mt-4 mt-md-0 order-1 order-md-2">
            <img src={Img15} alt="Logo2" className="logo2-img w-100" />
            <div className="social-icons text-center text-md-center">
              <a href="https://www.facebook.com/Tkieroapp" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} />
              </a>
              <a href="https://www.instagram.com/tkiero_app" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} />
              </a>
              <a href="https://www.tiktok.com/@tkiero_app" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={40} />
              </a>
              <a href="https://www.linkedin.com/company/tkiero-app/about/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;