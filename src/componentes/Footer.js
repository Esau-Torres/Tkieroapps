import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import footer from '../img/footer.png';
import footer1 from '../img/footer1.png';
import footer2 from '../img/footer2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaSnapchat, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
            <img src={logo} alt="logo" style={{ height: "40px" }} />
            <p className="small mt-2">© 2025 Copyright by Xert - All Rights Reserved.</p>

            <button type="button" className="small mt-1 text-black d-block mx-auto" style={{ cursor: 'pointer',   border: 'none', backgroundColor: 'rgb(214, 238, 248)', color: '#000',  fontWeight: 'bold',  padding: '6px 12px',  borderRadius: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  transition: 'all 0.2s ease-in-out'}} data-bs-toggle="modal" data-bs-target="#contactoModal" title="Contáctanos">Ponte en contacto con Tkiero</button>

            {/* modal de contacto */}
            <div className="modal fade" id="contactoModal" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">

                  <div className="modal-header">
                    <h5 className="modal-title">Contacta con Tkiero por medio de:</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                  </div>

                  <div className="modal-body">
                    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', maxWidth: '600px', margin: 'auto',}}>
                      <h3 style={{ color: '#333' }}>¿Tienes un reclamo, sugerencia o comentario?</h3>
                      <p style={{ fontSize: '16px', color: '#555' }}>
                        Estamos aquí para ayudarte. Contáctanos directamente por:
                      </p>

                      <div style={{ marginTop: '15px' }}>
                        <a
                          href="https://wa.me/50375781206"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none', backgroundColor: ' #1E3A8A', color: 'white', padding: '10px 20px', borderRadius: '8px', margin: '5px', display: 'inline-block',}}><i className="fab fa-whatsapp"></i> &nbsp; WhatsApp
                        </a>

                        <a
                          href="mailto:soporte@tkiero.app?subject=Reclamo o Comentario"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none', backgroundColor: ' #0784f2', color: 'white', padding: '10px 20px', borderRadius: '8px', margin: '5px', display: 'inline-block', }} ><i className="fas fa-envelope"></i> &nbsp; Correo Electrónico
                        </a>

                        <a href="https://tkiero.app/caracteristicas" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', backgroundColor: '#87CEEB', color: 'white', padding: '10px 20px', borderRadius: '8px', margin: '5px', display: 'inline-block',}} ><i className="fas fa-file-alt"></i> &nbsp; Web Site </a>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>

                </div>
              </div>
            </div>
        </div>

        <div className="col-md-6 text-center mb-3 mb-md-0">
          <Link to="/Terms" className="text-dark mx-2" title="Terminos y condiciones">Terms & Conditions</Link>
          <Link to="/Terms/FollowinCookies" className="text-dark mx-2" title="seguimiento y cookies">Following & Cookies</Link>
          <Link to="/Terms/CriptoPolicy" className="text-dark mx-2" title="politicas de criptomoneda">Crypto Policy</Link>
          <Link to="/Terms/AcountSuspention" className="text-dark mx-2" title="Suspension de cuenta">Account Suspension</Link><br />
          <Link to="https://enlinea.defensoria.gob.sv/Reclamos-en-linea" className="text-dark mx-2" title="¿Deseas contactar a la Defensoría del Consumidor? Puedes presentar tu reclamo o consulta
por los siguientes medios oficiales">Contacta a la defensoria del consumidor</Link>
          <Link to="https://www.defensoria.gob.sv/contactenos/" className="text-dark mx-2" title="¿Deseas escalar tu consulta o reclamo? También puedes contactar a la Defensoría del
Consumidor">Consulta con la defensoria del consumidor</Link>
          <Link to="https://ssf.gob.sv/atencion-al-publico/" className="text-dark mx-2" title="¿Tuviste un problema y no se resolvió dentro de Tkiero? Puedes contactar directamente a la
Superintendencia del Sistema Financiero (SSF)">Contacto a la Superintendencias del Sistema Financiero</Link>
        </div>

        <div className="col-md-3 text-center text-md-end">
          <a href="https://www.facebook.com/Tkieroapp" className="text-dark mx-2"><FaFacebook size={20} /></a>
          <a href="https://www.instagram.com/tkiero_app/" className="text-dark mx-2"><FaInstagram size={20} /></a>
          <a href="https://www.tiktok.com/@tkiero_app?is_from_webapp=1&sender_device=pc" className="text-dark mx-2"><FaTiktok size={20} /></a>
          <a href="https://x.com/TkieroApp" className="text-dark mx-2"><FaTwitter size={20} /></a>
          <a href="https://www.youtube.com/@Tkiero_app" className="text-dark mx-2"><FaYoutube size={20} /></a>
          <a href="https://www.snapchat.com/add/tkieroapp?sender_web_id=3ab5da15-e7ae-454f-87dc-b98afa9bca2d&device_type=desktop&is_copy_url=true" className="text-dark mx-2"><FaSnapchat size={20} /></a>
        </div>
      </div>

      <div className="text-center mt-3">
        <a href="https://ssf.gob.sv/atencion-al-publico/" title="superintendencia del sistema financiero"><img src={footer1} alt="footer1" style={{ height: "50px", marginTop: 20 }} /></a>
        <a href="https://www.defensoria.gob.sv/contactenos/" title="Defensoria del consumidor"><img src={footer} alt="footer" style={{ height: "100px" }} /></a>
        <a href="https://www.defensoria.gob.sv/guia-de-servicios/" title="defensoria del consumidor servicios"><img src={footer2} alt="footer2" style={{ height: "50px", marginTop: 20 }} /></a>

        <p className="small">
          Institución financiera supervisada por la Superintendencia del Sistema Financiero de El Salvador.
        </p>
      </div>
    </div>


    </footer >
  );
};

export default Footer;
