import React, { useState, useEffect } from 'react';
import "../../../Estilos/TermsCon.css";
import logo from "../../../img/logo.png";

const CriptoPolicy = () => {
    const [expandedSections, setExpandedSections] = useState({});

    useEffect(() => {
        // Desplazar la ventana al inicio al cargar el componente
        window.scrollTo(0, 0);

        // Configuración inicial para dispositivos móviles
        const isMobile = window.innerWidth < 768;
        const initialSections = {};
        for (let i = 1; i <= 11; i++) {
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
                        <h1 className="tkiero-terminos-title">Política de Criptomonedas para la Aplicación Tkiero.App</h1>
                        <div className="tkiero-terminos-divider"></div>
                    </header>

                    {/* Content */}
                    <div className="tkiero-terminos-intro mb-5">

                        <p>
                            Esta Política de Criptomonedas ("Política") establece los términos y condiciones que rigen el uso de los servicios de
                            criptomonedas dentro de la aplicación Tkiero. App  (la "Aplicación"). La Aplicación facilita la compra y conversión de
                            Bitcoin a dólares y viceversa. Es importante que los usuarios lean y comprendan cuidadosamente esta Política antes de
                            utilizar los servicios de criptomonedas proporcionados por la Aplicación.
                        </p>
                    </div>
                    <div className="tkiero-terminos-divider-large mb-4"></div>
                    {/* Secciones de términos */}
                    {[...Array(11)].map((_, i) => (
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
            1: "Responsabilidad del Usuario",
            2: "Volatilidad y Riesgo",
            3: "Medidas de Seguridad",
            4: "Sin Asesoramiento Financiero",
            5: "Confirmación de Transacciones",
            6: "Cumplimiento Normativo",
            7: "Intercambios de Terceros",
            8: "No Responsabilidad por Pérdidas",
            9: "Interrupciones del Servicio",
            10: "Cambios en la Política de Criptomonedas",
            11: "Ley y Jurisdicción"
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
                            Los usuarios son completamente responsables del uso de criptomoneda, de los servicios de criptomonedas ofrecidos por la Aplicación.
                            Esto incluye, pero no se limita a, la compra, conversión, fluctuación, almacenamiento dentro del ecosistema de Tkiero App y gestión de
                            Bitcoin. Los usuarios deben ejercer precaución y diligencia al realizar transacciones con criptomonedas y desde ya liberan a Tkiero App
                            y a sus funcionarios de cualquier hecho, acto o perdida como consecuencia del uso de criptomonedas.
                        </p>
                    </div>
                );
            case 2:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Los valores de las criptomonedas son altamente volátiles y pueden fluctuar significativamente en un corto período. Los usuarios reconocen y
                            aceptan los riesgos asociados con las transacciones de criptomonedas, incluida la posibilidad de pérdida de valor, liberando a Tkiero App y a
                            sus funcionarios por tales fluctuaciones.
                        </p>

                    </div>
                );
            case 3:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Los usuarios son responsables de implementar medidas de seguridad adecuadas para proteger sus tenencias de criptomonedas, incluido, entre otros, el uso
                            de billeteras seguras, la activación de la autenticación de dos factores y el mantenimiento de la confidencialidad de las claves privadas.
                        </p>
                    </div>
                );
            case 4:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            La Aplicación no proporciona asesoramiento financiero con respecto a la compra, venta o conversión de criptomonedas. Los usuarios deben realizar
                            su propia investigación y, si es necesario, buscar asesoramiento profesional antes de participar en transacciones con criptomonedas y de no
                            realizarlo asumen su responsabilidad frente a Tkiero App. y sus funcionarios.
                        </p>
                    </div>
                );
            case 5:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Antes de completar cualquier transacción de criptomonedas, la Aplicación solicitará a los usuarios que confirmen sus decisiones. Los usuarios
                            deben revisar cuidadosamente los detalles y las confirmaciones de la transacción antes de proceder, ya que las transacciones de criptomonedas
                            son irreversibles, lo cual declaran expresamente que desde este acto entienden
                        </p>
                    </div>
                );
            case 6:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Los usuarios son responsables de cumplir con todas las leyes y regulaciones aplicables relacionadas con las transacciones de criptomonedas en su
                            jurisdicción. Tkiero App. no asume responsabilidad por las consecuencias legales derivadas del incumplimiento por parte del usuario a dichas
                            leyes y demás leyes similares y en uso a nivel internacional en materia tecnológica.
                        </p>

                    </div>
                );
            case 7:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            La Aplicación puede utilizar intercambios de terceros para la conversión de criptomonedas. Los usuarios deben ser conscientes de que pueden
                            aplicarse los términos y condiciones de estos intercambios sometiéndose expresamente a los mismos, de dichos terceros y la Aplicación no es
                            responsable de las acciones o políticas de los proveedores de terceros, los cuales también acepta.
                        </p>
                    </div>
                );
            case 8:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            La Aplicación no asume ninguna responsabilidad por pérdidas financieras, daños u otras consecuencias derivadas del uso de los servicios de
                            criptomonedas, sean estas legales, económicas o de otra naturaleza. Los usuarios participan en transacciones de criptomonedas bajo su propio
                            riesgo.

                        </p>
                    </div>
                );
            case 9:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            La Aplicación puede experimentar interrupciones del servicio, tiempo de inactividad o problemas técnicos relacionados con los servicios de
                            criptomonedas. Los usuarios reconocen que la Aplicación no es responsable de pérdidas o daños derivados de dichas interrupciones.
                        </p>
                    </div>
                );
            case 10:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            La Aplicación se reserva el derecho de modificar o actualizar esta Política de Criptomonedas en cualquier momento. Los usuarios serán notificados
                            de cualquier cambio, y el uso continuado de los servicios de criptomonedas constituye la aceptación por parte del usuario, de la Política revisada.
                        </p>
                    </div>
                );
            case 11:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Esta Política se regirá e interpretará de acuerdo con las leyes de El Salvador. Cualquier disputa derivada de o relacionada con esta Política 
                            estará sujeta a la jurisdicción exclusiva de los tribunales de El Salvador.<br/><br/>
                            Al utilizar los servicios de criptomonedas dentro de la Aplicación Tkiero App., los usuarios aceptan adherirse a esta Política de 
                            Criptomonedas y reconocen que la citada Aplicación no asume ninguna responsabilidad por el resultado de sus transacciones de criptomonedas.

                        </p>
                    </div>
                );
            default:
                return <p>Contenido de la sección {sectionNumber}...</p>;
        }
    }
};

export default CriptoPolicy;