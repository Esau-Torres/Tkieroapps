import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../../Estilos/TermsCon.css";
import logo from "../../../img/logo.png";

const FollowinCookies = () => {
    const [expandedSections, setExpandedSections] = useState({});

    useEffect(() => {
        // Desplazar la ventana al inicio al cargar el componente
        window.scrollTo(0, 0);

        // Configuración inicial para dispositivos móviles
        const isMobile = window.innerWidth < 768;
        const initialSections = {};
        for (let i = 1; i <= 8; i++) {
            initialSections[`section${i}`] = !isMobile;
        }
        setExpandedSections(initialSections);
    }, []);

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    return (
        <section className="tkiero-terminos-section py-5">
            <div className="container">
                <div className="tkiero-terminos-card">
                    {/* Header */}
                    <header className="tkiero-terminos-header text-center mb-5">
                        <img src={logo} alt='Logo de Tkiero' className='tkiero-terminos-logo mb-4' />
                        <h1 className="tkiero-terminos-title">Política de Seguimiento de Usuario y Uso de Cookies de Tkiero App</h1>
                        <p className='text-center'>Fecha de Entrada en Vigor: Febrero 2, 2024</p>
                        <div className="tkiero-terminos-divider"></div>
                    </header>

                    {/* Content */}
                    <div className="tkiero-terminos-intro mb-5">
                        <p>
                            Esta Política describe cómo Tkiero App ("Nosotros", "Nuestro" o "Tkiero App") realiza el seguimiento de los usuarios y
                            utiliza cookies en su sitio web y aplicación móvil (en adelante, "Plataforma"). Al utilizar la Plataforma, usted acepta
                            el seguimiento de usuario y el uso de cookies de acuerdo con esta política.
                        </p>
                    </div>

                    {/* Secciones de términos */}
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className={`tkiero-terminos-accordion ${expandedSections[`section${i + 1}`] ? 'expanded' : ''}`}>
                            <div
                                className="tkiero-terminos-accordion-header"
                                onClick={() => toggleSection(`section${i + 1}`)}
                            >
                                <h3>{i + 1}. {getSectionTitle(i + 1)}</h3>
                                <span className="tkiero-terminos-accordion-toggle">
                                    {expandedSections[`section${i + 1}`] ? <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}
                                </span>
                            </div>
                            {expandedSections[`section${i + 1}`] && (
                                <div className="tkiero-terminos-accordion-content">
                                    {renderSectionContent(i + 1)}
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
    // Funciones auxiliares para renderizar contenido dinámico
    function getSectionTitle(sectionNumber) {
        const titles = {
            1: "Seguimiento de Usuario",
            2: "Uso de Cookies",
            3: "Tipos de Cookies",
            4: "Consentimiento del Usuario",
            5: "Desactivación de Cookies",
            6: "Seguridad de la Información",
            7: "Actualizaciones de la Política",
            8: "Ley y Jurisdicción"
        };
        return titles[sectionNumber] || "";
    }

    // funcion objetivo para renderizar el contenido de cada sección
    function renderSectionContent(sectionNumber) {
        switch (sectionNumber) {
            case 1:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Tkiero App puede recopilar información sobre la actividad de los usuarios en la Plataforma para mejorar la experiencia del usuario, personalizar
                            el contenido y realizar análisis estadísticos. La información recopilada puede incluir, pero no se limita a, páginas visitadas, acciones realizadas,
                            y dispositivos utilizados.
                        </p>
                    </div>
                );
            case 2:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Las cookies son pequeños archivos de datos que se almacenan en su dispositivo cuando visita la Plataforma. Tkiero App utiliza cookies para diversos fines,
                            que incluyen:
                        </p>
                        <div className='tkiero-terminos-intro'>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Mejora de la Experiencia del Usuario:</strong> Las cookies permiten personalizar la experiencia del usuario al recordar preferencias y ajustes.</li>

                                <li><strong>Analítica:</strong> Utilizamos cookies para recopilar datos analíticos y realizar un seguimiento del rendimiento de la Plataforma. Esto nos ayuda a mejorar la calidad y
                                    eficacia de nuestros servicios.</li>

                                <li><strong>Publicidad Personalizada:</strong> Tkiero App puede utilizar cookies para proporcionar anuncios personalizados basados en sus intereses y actividades en la Plataforma.</li>
                            </ul>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Cookies de Sesión:</strong>Estas cookies son temporales y se eliminan cuando cierra su navegador.</li>
                            <li><strong>Cookies Persistentes:</strong> Estas cookies permanecen en su dispositivo durante un período más prolongado.</li>
                            <li><strong>Cookies Propias:</strong> Estas cookies son establecidas por Tkiero App.</li>
                            <li><strong>Cookies de Terceros: </strong> Algunas cookies son proporcionadas por terceros para fines analíticos y de publicidad.</li>
                        </ul>
                    </div>
                );
            case 4:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Al utilizar la Plataforma, usted acepta el uso de cookies de acuerdo con esta política. Puede gestionar sus preferencias de cookies a través de la configuración de su navegador o dispositivo.
                        </p>
                    </div>
                );
            case 5:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Usted tiene la opción de desactivar las cookies a través de la configuración de su navegador. Tenga en cuenta que la desactivación de ciertas
                            cookies puede afectar la funcionalidad de la Plataforma.
                        </p>
                    </div>
                );
            case 6:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Tkiero App se compromete a proteger la privacidad y seguridad de la información recopilada a través del seguimiento de usuario y cookies. La información se manejará de
                            acuerdo con nuestra Política de Privacidad.
                        </p>

                    </div>
                );
            case 7:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Tkiero App se reserva el derecho de modificar o actualizar esta Política en cualquier momento. Las modificaciones entrarán en vigor después de su
                            publicación en la Plataforma.
                        </p>
                    </div>
                );
            case 8:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Esta Política se regirá e interpretará de acuerdo con las leyes de El Salvador. Cualquier disputa derivada de o relacionada con esta Política 
                            estará sujeta a la jurisdicción exclusiva de los tribunales de El Salvador.<br/><br/>
                            Al utilizar la Plataforma de Tkiero App, usted acepta el seguimiento de usuario y el uso de cookies de acuerdo con esta política. Si tiene 
                            alguna pregunta o inquietud, comuníquese con <Link to="mailto:help@tkiero.app" className="tkiero-terminos-link">help@tkiero.app</Link>

                        </p>
                    </div>
                );
            default:
                return <p>Contenido de la sección {sectionNumber}...</p>;
        }
    }

};

export default FollowinCookies;