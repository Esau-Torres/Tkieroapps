import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/TermsCon.css';
import logo from "../img/logo.png";

const TkieroCookiesPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  useEffect(() => {

    window.scrollTo(0, 0);
    // Configuración inicial para dispositivos móviles
    if (window.innerWidth < 768) {
      setExpandedSections({
        section1: false,
        section2: false,
        section3: false,
        section4: false,
        section5: false,
        section6: false,
        section7: false,
        section8: false,
        section9: false,
        section10: false,
        section11: false
      });
    } else {
      // Configuración para desktop/tablet
      setExpandedSections({
        section1: true,
        section2: true,
        section3: true,
        section4: true,
        section5: true,
        section6: true,
        section7: true,
        section8: true,
        section9: true,
        section10: true,
        section11: true
      });
    }
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="tkiero-cookies-container">
      <header className="tkiero-cookies-header">
        <h1 className="tkiero-cookies-title mb-4">Términos y Condiciones de la Billetera Tkiero App</h1>
        <img src={logo} alt='logo de tkiero' className='tkiero-logo mb-4' />
        <p className="tkiero-cookies-date">Fecha de Entrada en Vigor: Febrero 2, 2024</p>
      </header>

      <div className="tkiero-cookies-intro">
        <p>
          Esta Política describe cómo Tkiero App (“Nosotros”, “Nuestro” o “Tkiero App”) realiza el seguimiento
          de los usuarios y utiliza cookies en su sitio web y aplicación móvil (en adelante, “Plataforma”). Al
          utilizar la Plataforma de Servicios de esta apllicacion, usted acepta el seguimiento de usuario y el
          uso de cookies de acuerdo con esta política.
        </p>
      </div>

      <div className="tkiero-cookies-notice">
        <div className="tkiero-cookies-notice-icon">!</div>
        <p>
          Al continuar usando nuestra plataforma, usted acepta nuestro uso de cookies y tecnologías similares
          según lo descrito en esta política.
        </p>
      </div>

      <div className={`tkiero-cookies-section ${expandedSections.section1 ? 'tkiero-cookies-expanded' : ''}`}>
        <div className="tkiero-cookies-section-header" onClick={() => toggleSection('section1')}>
          <h2>1. Seguimiento de Usuario:</h2>
          <span className="tkiero-cookies-toggle">{expandedSections.section1 ? '−' : '+'}</span>
        </div>
        {expandedSections.section1 && (
          <div className="tkiero-cookies-section-content">
            <p>
              Tkiero App puede recopilar información sobre la actividad de los usuarios en la Plataforma para mejorar
              la experiencia del usuario, personalizar el contenido y realizar análisis estadísticos y de mercadeo. La
              información recopilada puede incluir, pero no se limita a, páginas visitadas, acciones realizadas, y
              dispositivos utilizados.
            </p>
          </div>
        )}
      </div>

      <div className={`tkiero-cookies-section ${expandedSections.section2 ? 'tkiero-cookies-expanded' : ''}`}>
        <div className="tkiero-cookies-section-header" onClick={() => toggleSection('section2')}>
          <h2>2. Uso Legítimo:</h2>
          <span className="tkiero-cookies-toggle">{expandedSections.section2 ? '−' : '+'}</span>
        </div>
        {expandedSections.section2 && (
          <div className="tkiero-cookies-section-content">
            <p>
              El usuario se compromete a utilizar la Billetera únicamente para actividades legítimas y de conformidad
              con todas las leyes y regulaciones aplicables en su jurisdicción. Tkiero App no asume responsabilidad por
              el uso indebido de la Billetera por parte del usuario.
            </p>

          </div>
        )}
      </div>


      <div className={`tkiero-cookies-section ${expandedSections.section3 ? 'tkiero-cookies-expanded' : ''}`}>
        <div className="tkiero-cookies-section-header" onClick={() => toggleSection('section3')}>
          <h2>3. Veracidad de la Información:</h2>
          <span className="tkiero-cookies-toggle">{expandedSections.section3 ? '−' : '+'}</span>
        </div>
        {expandedSections.section3 && (
          <div className="tkiero-cookies-section-content">
            <p>
              El usuario garantiza la veracidad y precisión de toda la información suministrada a través de la Billetera.
              Tkiero App, la cual no se hace responsable de las consecuencias derivadas de información incorrecta, falsa
              o inexacta proporcionada por el usuario.<br /><br />

              El usuario garantiza la veracidad y precisión de toda la información suministrada a través de la Billetera.y
              Declara bajo juramento que toda la información de identificación personal y las operaciones que realice a traves
              de está , seran legitimas y de origern licito, sometiéndome desde este momento a los términos y condiciones
              establecidos para el uso del servicio<br /><br />

              Tkiero App no se hace responsable de las consecuencias derivadas de información incorrecta, falsa o inexacta
              proporcionada por el usuario, liberando a Tkiero App de todas sus consecuencias, sanciones o penalidades<br /><br />
            </p>

          </div>
        )}
      </div>

      <div className={`tkiero-cookies-section ${expandedSections.section4 ? 'tkiero-cookies-expanded' : ''}`}>
        <div className="tkiero-cookies-section-header" onClick={() => toggleSection('section4')}>
          <h2>4. Transacciones y Pagos:</h2>
          <span className="tkiero-cookies-toggle">{expandedSections.section4 ? '−' : '+'}</span>
        </div>
        {expandedSections.section4 && (
          <div className="tkiero-cookies-section-content">
            <p>
              El usuario asume la responsabilidad total de todas las transacciones, pagos, comisiones , fluctuaciones por
              conversion , operaciones y sanciones realizadas desde la Billetera. Tkiero App no es responsable de pérdidas
              o daños derivados de transacciones no autorizadas o malentendidos.
            </p>

          </div>
        )}
      </div>

      <div className={`tkiero-cookies-section ${expandedSections.section5 ? 'tkiero-cookies-expanded' : ''}`}>
        <div className="tkiero-cookies-section-header" onClick={() => toggleSection('section5')}>
          <h2>5. Resguardo de Claves y Contraseñas:</h2>
          <span className="tkiero-cookies-toggle">{expandedSections.section5 ? '−' : '+'}</span>
        </div>
        {expandedSections.section5 && (
          <div className="tkiero-cookies-section-content">
            <p>
              El usuario es responsable de mantener la confidencialidad y seguridad de las claves y contraseñas asociadas con la
              Billetera. Tkiero App no será responsable de pérdidas derivadas del acceso no autorizado a la Billetera debido a
              negligencia en la seguridad de las credenciales, perdidas de equipos o actos ilicitos de terceros.
            </p>

          </div>
        )}
      </div>

      <div className={`tkiero-cookies-section ${expandedSections.section6 ? 'tkiero-cookies-expanded' : ''}`}>
        <div className="tkiero-cookies-section-header" onClick={() => toggleSection('section6')}>
          <h2>6. Privacidad y Datos Personales:</h2>
          <span className="tkiero-cookies-toggle">{expandedSections.section6 ? '−' : '+'}</span>
        </div>
        {expandedSections.section6 && (
          <div className="tkiero-cookies-section-content">
            <p>
              El uso de la Billetera está sujeto a nuestra Política de Privacidad. Al utilizar la Billetera, usted acepta
              las prácticas de privacidad descritas en dicha política.
            </p>

          </div>
        )}
      </div>

      <div className={`tkiero-cookies-section ${expandedSections.section7 ? 'tkiero-cookies-expanded' : ''}`}>
        <div className="tkiero-cookies-section-header" onClick={() => toggleSection('section7')}>
          <h2>7. Cumplimiento Normativo:</h2>
          <span className="tkiero-cookies-toggle">{expandedSections.section7 ? '−' : '+'}</span>
        </div>
        {expandedSections.section7 && (
          <div className="tkiero-cookies-section-content">
            <p>
              El usuario acepta cumplir con todas las leyes y regulaciones aplicables en su jurisdicción con respecto a la
              información y transacciones realizadas desde la Billetera.
            </p>

          </div>
        )}
      </div>

      <div className={`tkiero-cookies-section ${expandedSections.section8 ? 'tkiero-cookies-expanded' : ''}`}>
        <div className="tkiero-cookies-section-header" onClick={() => toggleSection('section8')}>
          <h2>8. Modificaciones de los Términos:</h2>
          <span className="tkiero-cookies-toggle">{expandedSections.section8 ? '−' : '+'}</span>
        </div>
        {expandedSections.section8 && (
          <div className="tkiero-cookies-section-content">
            <p>
              Tkiero App se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones entrarán en
              vigor después de su publicación en la Billetera. Se le notificará de cambios significativos.
            </p>

          </div>
        )}
      </div>

      <div className={`tkiero-cookies-section ${expandedSections.section9 ? 'tkiero-cookies-expanded' : ''}`}>
        <div className="tkiero-cookies-section-header" onClick={() => toggleSection('section9')}>
          <h2>9. Cierre de Cuenta:</h2>
          <span className="tkiero-cookies-toggle">{expandedSections.section9 ? '−' : '+'}</span>
        </div>
        {expandedSections.section9 && (
          <div className="tkiero-cookies-section-content">
            <p>
              Tkiero App se reserva el derecho de cerrar su cuenta y desactivar la Billetera en caso de violación de estos
              Términos o actividades sospechosas.
            </p>

          </div>
        )}
      </div>

      <div className={`tkiero-cookies-section ${expandedSections.section10 ? 'tkiero-cookies-expanded' : ''}`}>
        <div className="tkiero-cookies-section-header" onClick={() => toggleSection('section10')}>
          <h2>10. Ley y Jurisdicción:</h2>
          <span className="tkiero-cookies-toggle">{expandedSections.section10 ? '−' : '+'}</span>
        </div>
        {expandedSections.section10 && (
          <div className="tkiero-cookies-section-content">
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes de El Salvador. Cualquier disputa derivada
              de o relacionada con estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de El Salvador.
            </p>

          </div>
        )}
      </div>

      <div className={`tkiero-cookies-section ${expandedSections.section11 ? 'tkiero-cookies-expanded' : ''}`}>
        <div className="tkiero-cookies-section-header" onClick={() => toggleSection('section11')}>
          <h2>11. Reconocimiento Facial:</h2>
          <span className="tkiero-cookies-toggle">{expandedSections.section11 ? '−' : '+'}</span>
        </div>
        {expandedSections.section11 && (
          <div className="tkiero-cookies-section-content">
            <p>
              La aplicación Tkiero recopila y utiliza datos faciales estrictamente con el fin de mejorar la interacción
              del usuario y personalizar la experiencia de la aplicación. No compartimos estos datos con terceros. Los
              datos faciales se almacenan de forma segura en servidores en los Estados Unidos y se conservan solo durante
              el tiempo necesario para el uso previsto o hasta que el usuario solicite su eliminación.
            </p>

          </div>
        )}
      </div>

      <div className="tkiero-cookies-acceptance">
        <p>
          Al utilizar la Plataforma de Tkiero App, usted acepta el seguimiento de usuario y el uso de cookies
          de acuerdo con esta política.
        </p>
        <p className="tkiero-cookies-contact">
          Si tiene alguna pregunta o inquietud, comuníquese con{' '}
          <Link to="mailto:help@tkiero.app" className="tkiero-cookies-link">help@tkiero.app</Link>
        </p>
      </div>

      {/*<div className="tkiero-cookies-footer">
      <Link to="/terms" className="tkiero-cookies-footer-link">Términos y Condiciones</Link>
      <span className="tkiero-cookies-footer-separator">|</span>
      <Link to="/privacy" className="tkiero-cookies-footer-link">Política de Privacidad</Link>
    </div>*/}
    </div>
  );
};

export default TkieroCookiesPolicy;