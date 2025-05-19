import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import footer from '../img/footer.png';
import footer1 from '../img/footer1.png';
import footer2 from '../img/footer2.png';
import aws from '../img/aws.png'
import cloudfire from '../img/Cloudflare.png';
import ssl2 from '../img/SSL2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaFacebook, FaInstagram, FaTiktok, FaSnapchat, FaYoutube, FaShieldAlt, FaLock } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-light text-dark py-4">
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
            <img src={logo} alt="logo" style={{ height: "40px" }} className="d-block mx-auto" />
            <p className="small mt-2 text-center">© 2025 Copyright by Xert - All Rights Reserved.</p>

            {/* modal de contacto */}
            <div className="modal fade" id="contactoModal" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">

                  <div className="modal-header">
                    <h5 className="modal-title">{t('footer.txt3')}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                  </div>

                  <div className="modal-body">
                    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', maxWidth: '600px', margin: 'auto', }}>
                      <h3 style={{ color: '#333' }}>{t('footer.txt5')}</h3>
                      <p style={{ fontSize: '16px', color: '#555' }}>
                        {t('footer.txt4')}</p>
                      <div style={{ marginTop: '15px' }}>
                        <a href="https://wa.me/50375781206" target="_blank" rel="noopener noreferrer"
                          style={{ textDecoration: 'none', backgroundColor: ' #1E3A8A', color: 'white', padding: '10px 20px', borderRadius: '8px', margin: '5px', display: 'inline-block', }}><i className="fab fa-whatsapp"></i> &nbsp; WhatsApp
                        </a>
                        <a href="mailto:help@tkiero.app?subject=Reclamo o Comentario" target="_blank" rel="noopener noreferrer"
                          style={{ textDecoration: 'none', backgroundColor: ' #0784f2', color: 'white', padding: '10px 20px', borderRadius: '8px', margin: '5px', display: 'inline-block', }} ><i className="fas fa-envelope"></i> &nbsp; {t('footer.txt6')}
                        </a>
                        <a href="https://tkiero.app/caracteristicas" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', backgroundColor: '#87CEEB', color: 'white', padding: '10px 20px', borderRadius: '8px', margin: '5px', display: 'inline-block', }} ><i className="fas fa-file-alt"></i> &nbsp; Web Site </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer" style={{ borderTop: 'none', padding: '1.2rem 1.5rem', backgroundColor: '#f9fbfd' }}>
                    <button type="button" className="btn" data-bs-dismiss="modal"
                      style={{ background: 'transparent', color: '#0066cc', border: '1px solid rgb(214, 238, 248)', borderRadius: '6px', padding: '0.5rem 1.5rem', fontWeight: '500', transition: 'all 0.3s' }}
                      onMouseOver={(e) => { e.target.style.background = '#0784f2'; e.target.style.color = 'white'; }} onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#0784f2'; }}>
                      {t('caracteristicas.bloque1.text8')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* modal de seguridad */}
            <div className="modal fade" id="security_Modal" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content" style={{ border: 'none', borderRadius: '12px', overflow: 'hidden' }}>
                  <div className="modal-header" style={{ background: ' #0066cc', color: 'white', borderBottom: 'none', padding: '1.5rem' }}>
                    <h5 className="modal-title" style={{ fontWeight: '600', fontSize: '1.5rem' }}>
                      <FaShieldAlt className="me-2" /> {t('footer.text14')}</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                  </div>
                  <div className="modal-body">
                    <div style={{ backgroundColor: '#f8fafc', padding: '2.5rem', textAlign: 'center', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid rgba(0, 102, 204, 0.1)', margin: '0 auto', maxWidth: '580px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(0, 102, 204, 0.05)', zIndex: 0 }}></div>
                      <div style={{ position: 'relative', zIndex: 1, marginBottom: '1.5rem' }}>
                        <div style={{ display: 'inline-flex', padding: '1.5rem', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 64, 128, 0.1) 100%)', boxShadow: '0 4px 12px rgba(0, 102, 204, 0.15)' }}>
                          <FaShieldAlt size={40} style={{ color: '#0066cc', filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' }} />
                        </div>
                      </div>
                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3 style={{ color: '#003366', fontWeight: '600', fontSize: '1.4rem', marginBottom: '1.2rem', lineHeight: '1.4' }}>
                          {t('footer.txt15')}</h3>
                        <div style={{ display: 'inline-block', margin: '1.2rem 0', padding: '0.8rem 1.5rem', background: 'rgba(0, 102, 204, 0.08)', borderRadius: '30px', border: '1px dashed rgba(0, 102, 204, 0.3)' }}>
                          <p style={{ margin: 0, fontSize: '0.9rem', color: '#0066cc', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <FaLock className="me-1" />
                            <span>{t('footer.txt16')}</span>
                          </p>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: '#555', marginTop: '1.5rem', opacity: 0.9 }}>
                          {t('footer.txt17')}
                          <br />
                          {t('footer.txt18')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer" style={{ borderTop: 'none', padding: '1.2rem 1.5rem', backgroundColor: '#f9fbfd' }}>
                    <button type="button" className="btn" data-bs-dismiss="modal"
                      style={{ background: 'transparent', color: '#0066cc', border: '1px solid rgb(214, 238, 248)', borderRadius: '6px', padding: '0.5rem 1.5rem', fontWeight: '500', transition: 'all 0.3s' }}
                      onMouseOver={(e) => { e.target.style.background = '#0784f2'; e.target.style.color = 'white'; }} onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#0784f2'; }}>
                      {t('caracteristicas.bloque1.text8')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center mb-3 mb-md-0">
            
            <p className="small mt-1 text-black fw-bold text-center">{t('footer.txt1')}</p>
            <button type="button" className="small mt-1 text-black d-block mx-auto" style={{ cursor: 'pointer', border: 'none', backgroundColor: 'rgb(214, 238, 248)', color: '#000', fontWeight: 'bold', padding: '6px 12px', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'all 0.2s ease-in-out' }} data-bs-toggle="modal" data-bs-target="#contactoModal" title="Contáctanos">{t('footer.txt2')}</button>
            <br/><br/>
            <Link to="/Terms" className="text-dark mx-2" title="Terminos y condiciones">Terms & Conditions</Link>
            <Link to="/Terms/FollowinCookies" className="text-dark mx-2" title="seguimiento y cookies">Following & Cookies</Link>
            <Link to="/Terms/CriptoPolicy" className="text-dark mx-2" title="politicas de criptomoneda">Crypto Policy</Link>
            <Link to="/Terms/AcountSuspention" className="text-dark mx-2" title="Suspension de cuenta">Account Suspension</Link><br />
            <Link to="https://enlinea.defensoria.gob.sv/Reclamos-en-linea" className="text-dark mx-2" title={t('footer.txt7')}>{t('footer.txt10')}</Link>
            <Link to="https://www.defensoria.gob.sv/contactenos/" className="text-dark mx-2" title={t('footer.txt8')}>{t('footer.txt11')}</Link>
            <Link to="https://ssf.gob.sv/atencion-al-publico/" className="text-dark mx-2" title={t('footer.txt9')}>{t('footer.txt12')}</Link>
          </div>

          <div className="col-md-3 text-center ">
            <a href="https://www.facebook.com/Tkieroapp" className="text-dark mx-2"><FaFacebook size={25} /></a>
            <a href="https://www.instagram.com/tkiero_app/" className="text-dark mx-2"><FaInstagram size={25} /></a>
            <a href="https://www.tiktok.com/@tkiero_app?is_from_webapp=1&sender_device=pc" className="text-dark mx-2"><FaTiktok size={25} /></a>
            <a href="https://x.com/TkieroApp" className="text-dark mx-2"> <i className="fab fa-x fs-4"></i></a>
            <a href="https://www.youtube.com/@Tkiero_app" className="text-dark mx-2"><FaYoutube size={25} /></a>
            <a href="https://www.snapchat.com/add/tkieroapp?sender_web_id=3ab5da15-e7ae-454f-87dc-b98afa9bca2d&device_type=desktop&is_copy_url=true" className="text-dark mx-2"><FaSnapchat size={25} /></a>
            <br />
            <button data-bs-toggle="modal" style={{ all: 'unset', cursor: 'pointer' }} data-bs-target="#security_Modal" title={t('footer.txt19')}>
              <img src={aws} alt="aws" className="me-3" style={{ height: "25px", marginTop: 20 }} />
              <img src={cloudfire} alt="cloudfire" className="me-3" style={{ height: "25px", marginTop: 20 }} />
              <img src={ssl2} alt="ssl2" className="me-3" style={{ height: "25px", marginTop: 20 }} />
            </button>
          </div>
        </div>

        <div className="text-center mt-3">
          <a href="https://ssf.gob.sv/atencion-al-publico/" title="superintendencia del sistema financiero"><img src={footer1} alt="footer1" style={{ height: "50px", marginTop: 20 }} /></a>
          <a href="https://www.defensoria.gob.sv/contactenos/" title="Defensoria del consumidor"><img src={footer} alt="footer" style={{ height: "100px" }} /></a>
          <a href="https://www.defensoria.gob.sv/guia-de-servicios/" title="defensoria del consumidor servicios"><img src={footer2} alt="footer2" style={{ height: "50px", marginTop: 20 }} /></a>
          <p className="small">
            {t('footer.txt13')}
          </p>
        </div>
      </div>


    </footer >
  );
};

export default Footer;
