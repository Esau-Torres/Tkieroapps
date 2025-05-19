import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Estilos/AcercaDe.css';
import ContactForm from "./inicio/Correo";
// traduccion del sitio web
import { useTranslation } from 'react-i18next';


const Caracteristicas = () => {
    /*Modal*/
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

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
    const {t} = useTranslation();

    return (
        <>
            <section className="contact-section py-5 ">
                <div className="container bg-fondo2">
                    {/* Título */}
                    <h2 className="text-center mb-4">{t('caracteristicas.bloque1.title1')}</h2>
                    <div className="row align-item-center">
                        {/* Columna 1: Cards */}
                        <div className="col-12 col-md-6 mx-auto c1">
                            {/* Fila 1: Nuestra Ubicación y E-mail */}
                            <div className="row">
                                <div className="col-12 col-md-6 mb-4 ">
                                    <a href="https://wa.me/50375781206" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                        <div className="card h-100 shadow-sm card6 mx-auto" style={{ cursor: 'pointer' }}>
                                            <div className="card-body5 ">
                                                <h3 className="card-title5">{t('caracteristicas.bloque1.title2')}</h3>
                                                <p className="card-text5">
                                                    {t('caracteristicas.bloque1.text1')} <br />+503 7578-1206
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 mb-4 ">
                                    <Link to="mailto:help@tkiero.app" className="text-decoration-none">
                                        <div className="card h-100 shadow-sm card6 mx-auto">
                                            <div className="card-body5">
                                                <h3 className="card-title5">E-mail</h3>
                                                <p className="card-text5">
                                                    help@tkiero.app
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Fila 2: Escríbenos y Redes Sociales */}
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-8 mb-4">
                                    <div className="card h-100 shadow-sm card6 mx-auto" onClick={handleShowModal} style={{ cursor: 'pointer' }}>
                                        <div className="card-body5">
                                            <h3 className="card-title5">{t('caracteristicas.bloque1.title3')}</h3>
                                            <p className="card-text5">
                                                {t('caracteristicas.bloque1.text2')}
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
                        <Modal.Title>{t('caracteristicas.bloque1.title3')}</Modal.Title>
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
                            {t('caracteristicas.bloque1.text8')}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>

            {/*Bloque 3*/}
            <section className="expandable-cards py-5">
                <h2 className="text-center mb-5">{t('caracteristicas.bloque2.title1')}</h2>
                <div className="container">
                    {/* Card 1: Qué Hace Tkiero */}
                    <div className="card mb-4 shadow-sm card4">
                        <div className="card-header2" onClick={toggleCard1}>
                            <h3 className="card-title text-light">{t('caracteristicas.bloque2.title2')}</h3>
                            <span className="toggle-icon">&nbsp;{isCard1Open ? '−' : '+'}&nbsp;</span>
                        </div>
                        <div className={`card-body2 justified-text ${isCard1Open ? "open" : ""}`}>
                            <p>
                                {t('caracteristicas.bloque2.text1')}
                            </p>
                            <ul>
                                <li><strong>{t('caracteristicas.bloque2.text2')}</strong> <br />{t('caracteristicas.bloque2.text3')} </li>
                                <li><strong>{t('caracteristicas.bloque2.text4')}</strong><br /> {t('caracteristicas.bloque2.text5')}</li>
                                <li><strong>{t('caracteristicas.bloque2.text6')}</strong><br /> {t('caracteristicas.bloque2.text7')}</li>
                                <li><strong>{t('caracteristicas.bloque2.text8')} </strong><br /> {t('caracteristicas.bloque2.text9')}</li>
                                <li><strong>{t('caracteristicas.bloque2.text10')} </strong><br />{t('caracteristicas.bloque2.text11')}</li>
                                <li><strong>{t('caracteristicas.bloque2.text12')}</strong><br /> {t('caracteristicas.bloque2.text13')}</li>
                                <li><strong>{t('caracteristicas.bloque2.text14')} </strong><br />{t('caracteristicas.bloque2.text15')}</li>
                                <li><strong>{t('caracteristicas.bloque2.text16')}</strong><br /> {t('caracteristicas.bloque2.text17')}</li>
                                <li><strong>{t('caracteristicas.bloque2.text18')}</strong><br /> {t('caracteristicas.bloque2.text19')}</li>
                                <li><strong>{t('caracteristicas.bloque2.text20')}</strong><br /> {t('caracteristicas.bloque2.text21')}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Cómo Tkiero Beneficia al Consumidor */}
                    <div className="card mb-4 shadow-sm card4">
                        <div className="card-header2" onClick={toggleCard2}>
                            <h3 className="card-title text-light">{t('caracteristicas.bloque2.text22')}</h3>
                            <span className="toggle-icon">&nbsp; {isCard2Open ? ' − ' : '+'} &nbsp;</span>
                        </div>
                        <div className={`card-body2 ${isCard2Open ? "open" : ""}`}>
                            <p>
                               {t('caracteristicas.bloque2.text23')}
                            </p>
                            <ul>
                                <li>{t('caracteristicas.bloque2.text24')}</li>
                                <li>{t('caracteristicas.bloque2.text25')}</li>
                                <li>{t('caracteristicas.bloque2.text26')}</li>
                                <li>{t('caracteristicas.bloque2.text27')}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3: Por Qué Integrar Tkiero Beneficia a Su Empresa */}
                    <div className="card mb-4 shadow-sm card4">
                        <div className="card-header2" onClick={toggleCard3}>
                            <h3 className="card-title text-light">{t('caracteristicas.bloque2.text28')}</h3>
                            <span className="toggle-icon">&nbsp; {isCard3Open ? ' − ' : '+'} &nbsp;</span>
                        </div>
                        <div className={`card-body2 ${isCard3Open ? "open" : ""}`}>
                            <p>
                                {t('caracteristicas.bloque2.text29')}
                            </p>
                            <ul>
                                <li>{t('caracteristicas.bloque2.text30')}</li>
                                <li>{t('caracteristicas.bloque2.text31')}</li>
                                <li>{t('caracteristicas.bloque2.text32')}</li>
                            </ul>
                            <p>
                                {t('caracteristicas.bloque2.text33')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Caracteristicas;
