import React, { useState, useEffect } from 'react';
import "../../../Estilos/TermsCon.css";
import logo from "../../../img/logo.png";
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    return (
        <section className="tkiero-terminos-section py-5">
            <div className="container">
                <div className="tkiero-terminos-card">
                    {/* Header */}
                    <header className="tkiero-terminos-header text-center mb-5">
                        <img src={logo} alt='Logo de Tkiero' className='tkiero-terminos-logo mb-4' />
                        <h1 className="tkiero-terminos-title">{t('acount.bloque1.title1')}</h1>
                        <p className='text-center'>{t('acount.bloque1.txt1')}</p>
                        <div className="tkiero-terminos-divider"></div>
                    </header>

                    {/* Content */}
                    <div className="tkiero-terminos-intro mb-5">
                        <p>
                            {t('acount.bloque1.txt2')}
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
            1: t('acount.bloque1.title2'),
            2: t('acount.bloque1.title3'),
            3: t('acount.bloque1.title4'),
            4: t('acount.bloque1.title5'),
            5: t('acount.bloque1.title6'),
            6: t('acount.bloque1.title7'),
            7: t('acount.bloque1.title8'),
            8: t('acount.bloque1.title9'),
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
                            {t('acount.bloque1.txt3')}
                        </p>
                    </div>
                );
            case 2:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            {t('acount.bloque1.txt4')}
                        </p>
                    </div>
                );
            case 3:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            {t('acount.bloque1.txt5')}
                        </p>
                    </div>
                );
            case 4:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            {t('acount.bloque1.txt6')}
                        </p>
                    </div>
                );
            case 5:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            {t('acount.bloque1.txt7')}
                        </p>
                    </div>
                );
            case 6:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            {t('acount.bloque1.txt8')}
                        </p>
                    </div>
                );
            case 7:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            {t('acount.bloque1.txt9')}
                        </p>
                    </div>
                );
            case 8:
                return (
                    <div className="text-justify text-sm space-y-4">
                        <p>
                            {t('acount.bloque1.txt10')} <br /><br />
                            {t('acount.bloque1.txt11')}
                        </p>
                        <p className='text-center'>
                            <strong>{t('acount.bloque1.txt12')}</strong>
                            
                        </p>
                        <p>{t('acount.bloque1.txt13')}</p> 
                        <p className='text-center'>
                            <strong>{t('acount.bloque1.txt14')}</strong>
                        </p>
                        <p>{t('acount.bloque1.txt15')}</p> 
                        <p className='text-center'>
                            <strong>{t('acount.bloque1.txt16')}</strong>
                        </p>
                        <p>{t('acount.bloque1.txt17')}</p> 
                    </div>
                );
            default:
                return <p>Contenido de la sección {sectionNumber}...</p>;
        }
    }

};

export default AcountSuspention;