import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../../Estilos/TermsCon.css";
import logo from "../../../img/logo.png";
import { useTranslation } from 'react-i18next';

const TkieroTermsConditions = () => {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState({});

  useEffect(() => {
    // Desplazar la ventana al inicio al cargar el componente
    window.scrollTo(0, 0);

    // Configuración inicial para dispositivos móviles
    const isMobile = window.innerWidth < 768;
    const initialSections = {};
    for (let i = 1; i <= 20; i++) {
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

  const sections = [
    {
      id: 15,
      title: t('Terms.bloque1.title5'),
      content: (
        <div className="text-justify text-sm space-y-4">
          <p>
            {t('Terms.bloque1.txt7')}
          </p>
          <div className='tkiero-terminos-intro'>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('Terms.bloque1.txt8')}</li>

              <li>{t('Terms.bloque1.txt9')}</li>
            </ul>
          </div>
          <p className='mt-4 mb-4'>
            {t('Terms.bloque1.txt10')}
          </p>
          <div className='tkiero-terminos-intro'>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>{t('Terms.bloque1.txt11')}</strong>{t('Terms.bloque1.txt12')}</li>
              <li><strong>{t('Terms.bloque1.txt13')}</strong>{t('Terms.bloque1.txt14')}</li>
              <li><strong>{t('Terms.bloque1.txt15')}</strong>{t('Terms.bloque1.txt16')}</li>
              <li><strong>{t('Terms.bloque1.txt17')}</strong>{t('Terms.bloque1.txt18')}</li>
              <li><strong>{t('Terms.bloque1.txt19')}</strong>{t('Terms.bloque1.txt20')}</li>
              <li><strong>{t('Terms.bloque1.txt21')}</strong>{t('Terms.bloque1.txt22')}</li>
              <li><strong>{t('Terms.bloque1.txt23')}</strong>{t('Terms.bloque1.txt24')}</li>
              <li><strong>{t('Terms.bloque1.txt25')}</strong>{t('Terms.bloque1.txt26')}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 16,
      title: t('Terms.bloque1.title6'),
      content: (
        <div className="text-justify text-sm space-y-4">
          <p>
            {t('Terms.bloque1.txt27')}
          </p>
          <div className='tkiero-terminos-intro'>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('Terms.bloque1.txt28')}</li>
              <li>{t('Terms.bloque1.txt29')}</li>
              <li>{t('Terms.bloque1.txt30')}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 17,
      title: t('Terms.bloque1.title7'),
      content: (
        <div className="text-justify text-sm space-y-4">
          <p>
            {t('Terms.bloque1.txt31')}
          </p>
          <div className='tkiero-terminos-intro'>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('Terms.bloque1.txt32')}</li>
              <li>{t('Terms.bloque1.txt33')}</li>
              <li>{t('Terms.bloque1.txt34')}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 18,
      title: t('Terms.bloque1.title8'),
      content: (
        <div className="text-justify text-sm space-y-4">
          <p>
            {t('Terms.bloque1.txt35')}
          </p>
          <div className='tkiero-terminos-intro'>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('Terms.bloque1.txt36')}</li>
              <li>{t('Terms.bloque1.txt37')}</li>
              <li>{t('Terms.bloque1.txt38')}</li>
            </ul>
          </div>
          <p>
            <br />
            {t('Terms.bloque1.txt39')}
          </p>
        </div>
      )
    },
    {
      id: 19,
      title: t('Terms.bloque1.title9'),
      content: (
        <div className="text-justify text-sm space-y-4">
          <p className='mb-4'>
            {t('Terms.bloque1.txt40')}
          </p>
          <div className='tkiero-terminos-intro'>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>{t('Terms.bloque1.txt11')}</strong>{t('Terms.bloque1.txt41')}</li>
              <li><strong>{t('Terms.bloque1.txt13')}</strong>{t('Terms.bloque1.txt42')}</li>
              <li><strong>{t('Terms.bloque1.txt15')}</strong>{t('Terms.bloque1.txt43')}</li>
              <li><strong>{t('Terms.bloque1.txt17')}</strong>{t('Terms.bloque1.txt44')}</li>
              <li><strong>{t('Terms.bloque1.txt19')}</strong>{t('Terms.bloque1.txt45')}</li>
              <li><strong>{t('Terms.bloque1.txt21')}</strong>{t('Terms.bloque1.txt46')}</li>
              <li><strong>{t('Terms.bloque1.txt23')}</strong>{t('Terms.bloque1.txt47')}</li>
              <li><strong>{t('Terms.bloque1.txt25')}</strong>{t('Terms.bloque1.txt48')}</li>
            </ul>
          </div>

          <p className='mt-4'>
            {t('Terms.bloque1.txt49')}
          </p>
        </div>
      )
    },
    {
      id: 20,
      title: t('Terms.bloque1.title10'),
      content: (
        <div className="text-justify text-sm space-y-4">
          <p>
            {t('Terms.bloque1.txt50')}
          </p>
          <div className='tkiero-terminos-intro'>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('Terms.bloque1.txt51')}</li>
              <li>{t('Terms.bloque1.txt52')}</li>
            </ul>
          </div>
        </div>
      )
    },
  ];


  return (
    <>
      <section className="tkiero-terminos-section py-5">
        <div className="container">
          <div className="tkiero-terminos-card">
            {/* Header */}
            <header className="tkiero-terminos-header text-center mb-5">
              <img src={logo} alt='Logo de Tkiero' className='tkiero-terminos-logo mb-4' />
              <h1 className="tkiero-terminos-title">{t('Terms.bloque1.title1')}</h1>
              <div className="tkiero-terminos-divider"></div>
            </header>

            {/* Introducción */}
            <div className="tkiero-terminos-intro mb-5">
              <h4 className="tkiero-terminos-subtitle">{t('Terms.bloque1.txt1')}</h4>
              <p>
                {t('Terms.bloque1.txt2')}
              </p>
            </div>

            {/* Aviso importante */}
            <div className="tkiero-terminos-alert alert alert-info">
              <div className="tkiero-terminos-alert-icon">
                <i className="bi bi-exclamation-circle-fill"></i>
              </div>
              <h5>{t('Terms.bloque1.title2')}</h5>
              <p>
                {t('Terms.bloque1.txt3')}
              </p>
            </div>

            {/* Secciones de términos */}
            {[...Array(14)].map((_, i) => (
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

            {/* Aceptación */}
            <div className="tkiero-terminos-acceptance text-center mt-5">
              <div className="tkiero-terminos-acceptance-icon">
                <i className="bi bi-check-circle-fill"></i>
              </div>
              <p>
                {t('Terms.bloque1.txt4')}
              </p>
              <p className="tkiero-terminos-contact">
                {t('Terms.bloque1.txt5')}{' '}
                <Link to="mailto:help@tkiero.app" className="tkiero-terminos-link">help@tkiero.app</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tkiero-terminos-section py-1">
        <div className="container">
          <div className="tkiero-terminos-card">
            {/* Header */}
            <header className="tkiero-terminos-header text-center mb-5">
              <img src={logo} alt='Logo de Tkiero' className='tkiero-terminos-logo mb-4' />
              <h1 className="tkiero-terminos-title">{t('Terms.bloque1.title3')}</h1>
              <div className="tkiero-terminos-divider"></div>
            </header>

            <div className="tkiero-terminos-intro mb-5">
              <h4 className="tkiero-terminos-subtitle text">{t('Terms.bloque1.title4')}</h4>
              <p>
                {t('Terms.bloque1.txt6')}
              </p>
            </div>
            <div className="tkiero-terminos-divider-large mb-4"></div>

            {/* Secciones de términos */}
            {sections.map((section) => (
              <Accordion
                key={section.id}
                id={section.id}
                title={section.title}
                content={section.content}
                isExpanded={expandedSections[`section${section.id}`]}
                onToggle={() => toggleSection(`section${section.id}`)}
              />
            ))}
            <div className="tkiero-terminos-divider-large mb-4"></div>
            <div className="tkiero-terminos-intro mb-5">
              <h4 className="tkiero-terminos-subtitle text">{t('Terms.bloque3.title1')}</h4>
              <p>
                {t('Terms.bloque3.txt1')}
                <br /><br />
                {t('Terms.bloque3.txt2')}
                <br /><br />
                {t('Terms.bloque3.txt3')}
                <br /><br />
                {t('Terms.bloque3.txt4')}
                <br /><br />
                {t('Terms.bloque3.txt5')}
                <br /><br />
                {t('Terms.bloque3.txt6')}
                <Link to="mailto:help@tkiero.app" className="tkiero-terminos-link">help@tkiero.app</Link>
              </p>
            </div>
            <div className="tkiero-terminos-divider-large mb-4"></div>
            <div className="tkiero-terminos-alert alert alert-info">
              <h5 className='text-center'>{t('Terms.bloque3.title2')} <br />  {t('Terms.bloque3.txt7')}</h5>
              <p>
                <br />
                {t('Terms.bloque3.txt8')}
              </p>
              <p>
                {t('Terms.bloque3.txt9')}
                <br /><br />
                {t('Terms.bloque3.txt10')}
                <br /><br />
                {t('Terms.bloque3.txt11')}
                <br /><br />
                {t('Terms.bloque3.txt12')}
                <br /><br />
                {t('Terms.bloque3.txt13')}
                <br /><br />
                {t('Terms.bloque3.txt14')}
              </p>
            </div>
            <div className="tkiero-terminos-divider-large mb-4"></div>

            <header className="tkiero-terminos-header text-center mb-5">
              <img src={logo} alt='Logo de Tkiero' className='tkiero-terminos-logo mb-4' />
              <h1 className="tkiero-terminos-title">{t('Terms.bloque3.title3')}</h1>
              <div className="tkiero-terminos-divider"></div>
            </header>

            {/* Introducción */}
            <div className="tkiero-terminos-intro mb-5">
              <p>
                {t('Terms.bloque3.txt15')}
                <br /><br />
                {t('Terms.bloque3.txt16')}
                <br /><br />
                {t('Terms.bloque3.txt17')}
                <Link to="mailto:help@tkiero.app" className="tkiero-terminos-link">help@tkiero.app</Link>
                {t('Terms.bloque3.txt18')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  // Funciones auxiliares para renderizar contenido dinámico
  function getSectionTitle(sectionNumber) {
    const titles = {
      1: t('Terms.bloque2.title1'),
      2: t('Terms.bloque2.title2'),
      3: t('Terms.bloque2.title3'),
      4: t('Terms.bloque2.title4'),
      5: t('Terms.bloque2.title5'),
      6: t('Terms.bloque2.title6'),
      7: t('Terms.bloque2.title7'),
      8: t('Terms.bloque2.title8'),
      9: t('Terms.bloque2.title9'),
      10: t('Terms.bloque2.title10'),
      11: t('Terms.bloque2.title11'),
      12: t('Terms.bloque2.title12'),
      13: t('Terms.bloque2.title13'),
      14: t('Terms.bloque2.title14'),
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
              {t('Terms.bloque2.txt1')}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>{t('Terms.bloque2.txt2')}</strong>{t('Terms.bloque2.txt3')}
              </li>
              <li>
                <strong>{t('Terms.bloque2.txt4')}</strong>{t('Terms.bloque2.txt5')}
              </li>
              <li>
                <strong>{t('Terms.bloque2.txt6')}</strong>{t('Terms.bloque2.txt7')}
              </li>
              <li>
                <strong>{t('Terms.bloque2.txt8')}</strong>{t('Terms.bloque2.txt9')}
              </li>
              <li>
                <strong>{t('Terms.bloque2.txt10')}</strong>{t('Terms.bloque2.txt11')}
              </li>
              <li>
                <strong>{t('Terms.bloque2.txt12')}</strong>{t('Terms.bloque2.txt13')}
              </li>
              <li>
                <strong>{t('Terms.bloque2.txt14')}</strong>{t('Terms.bloque2.txt15')}
              </li>
              <li>
                <strong>{t('Terms.bloque2.txt16')}</strong>{t('Terms.bloque2.txt17')}
              </li>
              <li>
                <strong>{t('Terms.bloque2.txt18')}</strong>{t('Terms.bloque2.txt19')}
              </li>
              <li>
                <strong>{t('Terms.bloque2.txt20')}</strong>{t('Terms.bloque2.txt21')}
              </li>
              <li>
                <strong>{t('Terms.bloque2.txt22')}</strong>{t('Terms.bloque2.txt23')}
              </li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              <strong>{t('Terms.bloque2.txt23-5')}</strong>
              {t('Terms.bloque2.txt24')}
              <br /><br />
              <p className="text-center"><strong>{t('Terms.bloque2.txt24-5')}</strong> </p>
              {t('Terms.bloque2.txt25')}
              <br /><br />
              {t('Terms.bloque2.txt26')}
              <br /><br />
              {t('Terms.bloque2.txt26-1')}
              <br /><br />
              {t('Terms.bloque2.txt26-2')}
              <br /><br />
              {t('Terms.bloque2.txt26-3')}
            </p>
          </div>
        );
      case 3:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              {t('Terms.bloque2.txt27')}
              <br /><br />
              {t('Terms.bloque2.txt28')}
              <br /><br />
              {t('Terms.bloque2.txt28-1')}
            </p>
          </div>
        );
      case 4:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              {t('Terms.bloque2.txt29')}
              <br /><br />
              {t('Terms.bloque2.txt30')}
              <br /><br />
              {t('Terms.bloque2.txt31')}
            </p>
          </div>
        );
      case 5:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              {t('Terms.bloque2.txt32')}
            </p>
            <p className="text-center"><strong>{t('Terms.bloque2.txt32-1')}</strong> </p>

            <p>
              {t('Terms.bloque2.txt32-2')}
              <br /><br />
              {t('Terms.bloque2.txt32-3')}
            </p>
          </div>
        );
      case 6:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              {t('Terms.bloque2.txt33')}
              <br /><br />
              {t('Terms.bloque2.txt33-1')}
              <br /><br />
              {t('Terms.bloque2.txt33-2')}
            </p>
          </div>
        );
      case 7:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              {t('Terms.bloque2.txt34')}
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('Terms.bloque2.txt35')}</li>
              <li>{t('Terms.bloque2.txt36')}</li>
              <li>{t('Terms.bloque2.txt37')}</li>
              <li>{t('Terms.bloque2.txt38')}</li>
              <li>{t('Terms.bloque2.txt39')}</li>
              <li>{t('Terms.bloque2.txt40')}</li>
              <li>{t('Terms.bloque2.txt41')}</li>
              <li>{t('Terms.bloque2.txt42')}</li>
              <li>{t('Terms.bloque2.txt43')}</li>
              <li>{t('Terms.bloque2.txt44')}</li>
              <li>{t('Terms.bloque2.txt45')}</li>
              <li>{t('Terms.bloque2.txt46')}</li>
              <li>{t('Terms.bloque2.txt47')}</li>
              <li>{t('Terms.bloque2.txt48')}</li>
              <li>{t('Terms.bloque2.txt49')}</li>
              <li>{t('Terms.bloque2.txt50')}</li>
              <li>{t('Terms.bloque2.txt51')}</li>
              <p className="mt-4">
                {t('Terms.bloque2.txt52')}
              </p>
            </ul>
          </div>
        );
      case 8:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              {t('Terms.bloque2.txt53')}
            </p>
            <p className="text-center">
              <strong>{t('Terms.bloque2.txt53-1')}</strong>
            </p>
            <p>
              {t('Terms.bloque2.txt53-2')}
              <br /><br />
              {t('Terms.bloque2.txt53-3')}
            </p>
          </div>
        );
      case 9:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              {t('Terms.bloque2.txt54')}
              <br /><br />
              {t('Terms.bloque2.txt55')}
              <br /><br />
              {t('Terms.bloque2.txt55-2')}
            </p>
          </div>
        );
      case 10:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              {t('Terms.bloque2.txt56')}
              <br /><br />
              {t('Terms.bloque2.txt57')}
            </p>
          </div>
        );
      case 11:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              {t('Terms.bloque2.txt58')}
              <br /><br />
              {t('Terms.bloque2.txt59')}
              <br /><br />
              {t('Terms.bloque2.txt59-2')}
            </p>
          </div>
        );
      case 12:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              {t('Terms.bloque2.txt60')}
              <br /><br />
              {t('Terms.bloque2.txt60-2')}
            </p>
          </div>
        );
      case 13:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              {t('Terms.bloque2.txt61')}
            </p>
            <p className="text-center">
              <strong>{t('Terms.bloque2.txt61-1')}</strong>
            </p>
            <p>
              {t('Terms.bloque2.txt62')}
              <br /><br />
              {t('Terms.bloque2.txt63')}
              <br /><br />
              {t('Terms.bloque2.txt63-1')}
              <br /><br />
              {t('Terms.bloque2.txt63-2')}
              <Link to="mailto:help@tkiero.app" className="tkiero-cookies-link">help@tkiero.app</Link>
              <br /><br />
              {t('Terms.bloque2.txt63-3')}
            </p>
          </div>
        );
      case 14:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              {t('Terms.bloque2.txt64')}
            </p>
            <p className="text-center">
              <strong>{t('Terms.bloque2.txt64-1')}</strong>
            </p>
            <p>
              {t('Terms.bloque2.txt64')}
              <br /><br />
              {t('Terms.bloque2.txt64-2')}
            </p>
          </div>
        );
      default:
        return <p>Contenido de la sección {sectionNumber}...</p>;
    }
  }


  // Componente reutilizable para el acordeón
  function Accordion({ title, content, isExpanded, onToggle }) {
    return (
      <div className={`tkiero-terminos-accordion ${isExpanded ? "expanded" : ""}`}>
        <div className="tkiero-terminos-accordion-header" onClick={onToggle}>
          <h3> {title}</h3>
          <span className="tkiero-terminos-accordion-toggle">
            {isExpanded ? <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}
          </span>
        </div>
        {isExpanded && (
          <div className="tkiero-terminos-accordion-content">
            {content}
          </div>
        )}
      </div>
    );
  }
};

export default TkieroTermsConditions;