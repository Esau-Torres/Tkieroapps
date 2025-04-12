import React, { useState, useEffect } from 'react';
import "../../../Estilos/TermsCon.css";
import logo from "../../../img/logo.png";

const AcountSuspention = () => {
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
                        <h1 className="tkiero-terminos-title">Términos y Condiciones - Suspensión por Sospecha de Uso Indebido de Tkiero App </h1>
                        <p className='text-center'>Fecha de Entrada en Vigor: Febrero 2, 2024 </p>
                        <div className="tkiero-terminos-divider"></div>
                    </header>

                    {/* Content */}
                    <div className="tkiero-terminos-intro mb-5">
                        <p>
                            Estos Términos y Condiciones ("Términos") establecen las condiciones bajo las cuales Tkiero App puede congelar el uso de la Billetera
                            del usuario en caso de sospecha de uso indebido. Al utilizar la Billetera, usted acepta cumplir y quedar sujeto a estos Términos.
                        </p>
                    </div>
                    <div className="tkiero-terminos-divider-large mb-4"></div>

                    {/* Secciones de términos */}
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className={`tkiero-terminos-accordion ${expandedSections[`section${i + 1}`] ? 'expanded' : ''}`}>
                            <div
                                className="tkiero-terminos-accordion-header"
                                onClick={() => toggleSection(`section${i + 1}`)}>
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
            1: "Suspensión por Sospecha de Mal Uso",
            2: "Derecho de Tkiero App",
            3: "Colaboración del Usuario",
            4: "Cumplimiento de Normativas",
            5: "Comunicación al Usuario",
            6: "Levantamiento de la Suspensión",
            7: "Modificaciones de los Términos",
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
                            Tkiero App se reserva el derecho de congelar el uso de la Billetera del usuario si hay una sospecha razonable de mal uso, incluyendo,
                            uso de ofensas, ataques cibernéticos, pero no limitado a lavado de dinero, mal uso de fondos, financiamiento del terrorismo o cualquier
                            actividad relacionada con armas de destrucción masiva
                        </p>
                    </div>
                );
            case 2:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Tkiero App tiene el derecho de tomar el tiempo que sea necesario para investigar y satisfacer la causa de la sospecha de mal uso antes de
                            levantar la suspensión. Durante este período, el usuario no podrá realizar transacciones con la Billetera ni podrá efectuarle ningún reclamo
                            legal o económico mientras dure tal suspensión
                        </p>
                    </div>
                );
            case 3:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            El usuario se compromete a colaborar plenamente con cualquier investigación llevada a cabo por Tkiero App en relación con la sospecha de mal uso.
                            Esto puede incluir, pero no se limita a, proporcionar información adicional y documentos que Tkiero App le pueda requerir, para ser presentada a
                            la autoridad judicial, administrativa o de la naturaleza que la solicite o requiera con el fin de comprobar la legalidad de las transacciones y
                            fondos utilizados por el usuario.
                        </p>
                    </div>
                );
            case 4:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Tkiero App toma estas medidas en cumplimiento con las leyes y regulaciones relacionadas con la prevención de lavado de dinero, financiamiento
                            del terrorismo y financiamiento ilícito para la adquisición de armas de destrucción masiva, así como cualquier actividad ilícita. El usuario
                            reconoce y acepta que Tkiero App está sujeto a estas obligaciones legales.
                        </p>
                    </div>
                );
            case 5:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            En caso de suspensión por sospecha de mal uso, Tkiero App notificará al usuario a la dirección o medio electrónico proporcionado por este, tan
                            pronto como sea posible, a menos que dicha notificación viole las leyes y regulaciones aplicables o perjudique la investigación en curso.
                        </p>
                    </div>
                );
            case 6:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Una vez que se satisfaga la causa de la sospecha y se haya completado la investigación, Tkiero App levantará la suspensión de la Billetera del
                            usuario, permitiendo la reanudación de las transacciones.
                        </p>
                    </div>
                );
            case 7:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Tkiero App se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigor después de su publicación.
                            Se notificará al usuario de cambios significativos.
                        </p>
                    </div>
                );
            case 8:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            Estos Términos se regirán e interpretarán de acuerdo con las leyes de El Salvador. Cualquier disputa derivada de o relacionada con estos
                            Términos estará sujeta a la jurisdicción exclusiva de los tribunales de El Salvador. <br /><br />
                            Al utilizar la Billetera de Tkiero App, usted acepta estos Términos y reconoce el derecho de Tkiero App de congelar el uso en caso de
                            sospecha de mal uso.
                        </p>
                    </div>
                );
            default:
                return <p>Contenido de la sección {sectionNumber}...</p>;
        }
    }

};

export default AcountSuspention;