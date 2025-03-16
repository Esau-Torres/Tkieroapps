import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ContactModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Botón para abrir el modal */}
            <button className="btn btn-primary btn-register5 mt-3" onClick={handleShow}>
                Contáctanos
            </button>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton className="modal-header-custom">
                    <Modal.Title className="modal-title-custom">
                        Únete a Tkiero Apps en <a href="https://auth.linktr.ee/login?state=hKFo2SBHRW9vT04yM1YycWtnOWRacW04dXJUMHNrZWdvNXY1X6FupWxvZ2luo3RpZNkgaHlhdGp3ZXNwNWRnVzdYeWhKdzlOYzl5ZWNHM1oxUS2jY2lk2SBYYTl5SUJRSWh0ZTA2SVp4c1VQbFo1OE5xUGNETnk0Zg&client=Xa9yIBQIhte06IZxsUPlZ58NqPcDNy4f&protocol=oauth2&auth0Client=eyJuYW1lIjoiSFdJT0F1dGhCdW5kbGUiLCJ2ZXJzaW9uIjoidW5rbm93biIsImVudmlyb25tZW50Ijp7Im5hbWUiOiJQSFAiLCJ2ZXJzaW9uIjoiOC4zLjE0In19&response_type=code&scope=openid%20profile%20email%20username%20offline_access%20read%3Aauthenticators%20&redirect_uri=https%3A%2F%2Flinktr.ee%2Fconnect%2Fservice%2Fauth0%3Futm_campaign%3Dfooter_logo_cta&audience=https%3A%2F%2Flinktr.ee%2Fapi&mfeOnboarding=true&utm_source=linktree&utm_medium=profile&utm_content=tkieroapp&utm_campaign=footer_logo_cta#/register">
                            Linktree
                        </a>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-custom">
                    <p className="modal-description">
                        Obtén tu propio Linktree gratis. El único enlace en bio en el que confían más de 50 millones de personas.
                    </p>
                    <div className="social-icons1">
                        <a href="https://www.facebook.com/Tkieroapp" target="_blank" rel="noopener noreferrer" className="icon-circle">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.youtube.com/@Tkiero_app" target="_blank" rel="noopener noreferrer" className="icon-circle">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.linkedin.com/feed/?shareActive=true&shareUrl=https%3A%2F%2Ftr.ee%2FEbICCOG1uJ" target="_blank" rel="noopener noreferrer" className="icon-circle">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://x.com/TkieroApp" target="_blank" rel="noopener noreferrer" className="icon-circle">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.snapchat.com/add/tkieroapp?sender_web_id=3ab5da15-e7ae-454f-87dc-b98afa9bca2d&device_type=desktop&is_copy_url=true" target="_blank" rel="noopener noreferrer" className="icon-circle">
                            <i className="fab fa-snapchat"></i>
                        </a>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer-custom">
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Regístrate gratis
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ContactModal;