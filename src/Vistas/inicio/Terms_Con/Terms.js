import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../../Estilos/TermsCon.css";
import logo from "../../../img/logo.png";

const TkieroTermsConditions = () => {
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
      title: "1. Responsabilidad del Usuario sobre la Información Ingresada",
      content: (
        <div className="text-justify text-sm space-y-4">
          <p>
            El usuario de Tkiero es responsable único y directo de la información que ingresa al vincular su cuenta de PayPal y
            al generar una transacción. Tkiero no se hace responsable de errores cometidos por el usuario al ingresar información
            incorrecta o inexacta, y no realizará reembolsos en caso de disputas relacionadas con dichos errores.
          </p>
          <div className='tkiero-terminos-intro'>
            <ul className="list-disc list-inside space-y-2">
              <li>Al ingresar su información en Tkiero, el usuario acepta que es responsable de asegurarse de que la cuenta de PayPal
                esté registrada a su nombre y que la información proporcionada coincida con la registrada en Tkiero (nombre, correo
                electrónico y dirección).</li>

              <li>Tkiero no permite la vinculación de cuentas de PayPal pertenecientes a terceros. Cualquier intento de utilizar una
                cuenta de PayPal que no pertenezca al usuario de Tkiero será considerado como una actividad fraudulenta.</li>
            </ul>
          </div>
          <p className='mt-4 mb-4'>
            Esta política se rige por las siguientes leyes en los respectivos países:
          </p>
          <div className='tkiero-terminos-intro'>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Guatemala:</strong> Ley de Delitos Informáticos, Decreto 47-2008</li>
              <li><strong>Honduras: </strong>Ley Especial Contra los Delitos Informáticos y Conexos, Decreto No. 243-2010</li>
              <li><strong>Nicaragua: </strong>Ley Especial de Delitos Informáticos, Ley No. 641</li>
              <li><strong>Costa Rica:</strong> Ley de Delitos Informáticos y Conexos, Ley No. 9048</li>
              <li><strong>República Dominicana: </strong>Ley No. 53-07 sobre Crímenes y Delitos de Alta Tecnología</li>
              <li><strong>Panamá: </strong>Ley 82 de 2012 sobre Delitos Informáticos</li>
              <li><strong>México: </strong>Código Penal Federal, Título IX, Capítulo I, Delitos Informáticos</li>
              <li><strong>Estados Unidos:</strong> Computer Fraud and Abuse Act (CFAA)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 16,
      title: "2. Transacciones No Autorizadas",
      content: (
        <div className="text-justify text-sm space-y-4">
          <p>
            Cualquier transacción procesada a través de Tkiero con PayPal debe ser iniciada exclusivamente por el usuario registrado de la cuenta
            vinculada. Tkiero no permite que un tercero acceda o utilice una cuenta de PayPal vinculada sin la autorización explícita del usuario.
          </p>
          <div className='tkiero-terminos-intro'>
            <ul className="list-disc list-inside space-y-2">
              <li>Si se detecta que una transacción ha sido realizada por un tercero no autorizado, Tkiero procederá a cancelar la transacción y
                tomará las acciones legales pertinentes.</li>

              <li>La Ley Especial contra los Delitos Cibernéticos de El Salvador y las leyes equivalentes en Guatemala, Honduras, Nicaragua, Costa Rica,
                República Dominicana, Panamá, México, y los Estados Unidos sancionan el uso indebido de sistemas informáticos para obtener beneficios financieros
                indebidos en perjuicio de otros.</li>
              <li>Tkiero colaborará con las autoridades para reportar cualquier actividad que comprometa la seguridad de los sistemas financieros de la plataforma.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 17,
      title: "3. Proceso de Verificación y Retención de Fondos",
      content: (
        <div className="text-justify text-sm space-y-4">
          <p>
            Para proteger los intereses de Tkiero, todas las transacciones realizadas a través de PayPal estarán sujetas a un proceso de verificación, que puede
            tardar entre 48 a 72 horas. Durante este período:
          </p>
          <div className='tkiero-terminos-intro'>
            <ul className="list-disc list-inside space-y-2">
              <li>Los fondos permanecerán retenidos hasta que se complete el proceso de verificación y se confirme que la cuenta de PayPal está registrada con el
                mismo nombre, correo electrónico y dirección que el usuario de Tkiero.</li>

              <li>Si la información ingresada por el usuario no coincide, Tkiero cancelará automáticamente la transacción, y los fondos serán devueltos a
                la cuenta de PayPal del remitente.</li>

              <li>El usuario será notificado de la cancelación de la transacción y de los motivos de la misma.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 18,
      title: "4. Cancelación de Transacciones y Reembolsos",
      content: (
        <div className="text-justify text-sm space-y-4">
          <p>
            Las transacciones de PayPal solo serán procesadas y completadas una vez que se confirme la veracidad de la información proporcionada. Tkiero se reserva
            el derecho de cancelar cualquier transacción en los siguientes casos:
          </p>
          <div className='tkiero-terminos-intro'>
          <ul className="list-disc list-inside space-y-2">
            <li>Si el nombre, correo electrónico o dirección de la cuenta de PayPal no coincide con los datos registrados en Tkiero.</li>
            <li>Si la transacción es marcada como sospechosa o fraudulenta durante el proceso de verificación.</li>
            <li>Si el usuario presenta más de una disputa o reclamo de transacción no autorizada, su cuenta será revisada y, en caso de detectarse fraude, será
              bloqueada indefinidamente.</li>
          </ul>
          </div>
          <p>
            Tkiero no realizará reembolsos por transacciones canceladas que incumplan estas políticas, ya que se consideran una violación de las normativas de la plataforma.
          </p>
        </div>
      )
    },
    {
      id: 19,
      title: "5. Obligaciones del Usuario bajo la Ley Especial contra los Delitos Cibernéticos y Leyes Relacionadas",
      content: (
        <div className="text-justify text-sm space-y-4">
          <p className='mb-4'>
          De acuerdo con la Ley Especial contra los Delitos Cibernéticos de El Salvador, y las respectivas leyes en los países mencionados a continuación, los usuarios 
          que realicen actos fraudulentos, manipulen datos o sistemas financieros en Tkiero, o presenten reclamos fraudulentos a través de PayPal, serán denunciados 
          ante las autoridades competentes. Las sanciones incluyen:
          </p>
          <div className='tkiero-terminos-intro'>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Guatemala:</strong> Ley de Delitos Informáticos, Decreto 47-2008, penas incluyen prisión para aquellos que manipulen datos o sistemas para obtener beneficios financieros.</li>
            <li><strong>Honduras: </strong>Ley Especial Contra los Delitos Informáticos y Conexos, que incluye penas por acceso no autorizado o fraude en sistemas digitales.</li>
            <li><strong>Nicaragua:</strong> Ley Especial de Delitos Informáticos, Artículo 541, establece penas para fraudes cibernéticos y uso indebido de sistemas informáticos.</li>
            <li><strong>Costa Rica:</strong> Ley No. 9048, que establece penas para fraudes en plataformas digitales y transacciones financieras.</li>
            <li><strong>República Dominicana: </strong>Ley No. 53-07, que impone sanciones por delitos relacionados con fraudes digitales y manipulación no autorizada de sistemas.</li>
            <li><strong>Panamá: </strong>Ley 82, que regula los fraudes cibernéticos y delitos financieros a través de plataformas digitales.</li>
            <li><strong>México:</strong> Código Penal Federal, que cubre fraudes cometidos a través de plataformas digitales, incluyendo penas por el uso indebido de datos personales y financieros.</li>
            <li><strong>Estados Unidos:</strong> Computer Fraud and Abuse Act (CFAA), que impone severas sanciones por actividades fraudulentas relacionadas con sistemas digitales.</li>
          </ul>
          </div>

          <p className='mt-4'>
          Tkiero se compromete a proteger la integridad de su plataforma y tomará todas las medidas necesarias para prevenir, detectar y denunciar fraudes o actividades ilegales.
          </p>
        </div>
      )
    },
    {
      id: 20,
      title: "6. Colaboración con PayPal y las Autoridades",
      content: (
        <div className="text-justify text-sm space-y-4">
          <p>
          Tkiero colabora activamente con PayPal y las autoridades financieras y legales locales en Guatemala, Honduras, Nicaragua, Costa Rica, República Dominicana, Panamá, México y los Estados Unidos para 
          prevenir y combatir fraudes. Cualquier transacción considerada sospechosa será reportada de inmediato a PayPal y a las autoridades locales correspondientes.
          </p>
          <div className='tkiero-terminos-intro'>
          <ul className="list-disc list-inside space-y-2">
            <li>Si se detectan actividades fraudulentas, Tkiero proporcionará toda la información necesaria a las autoridades para iniciar los procedimientos legales correspondientes.</li>
            <li>Los usuarios que cometan fraudes o intenten manipular los sistemas financieros de Tkiero serán sujetos a investigación legal, y sus cuentas serán bloqueadas permanentemente.</li>
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
              <h1 className="tkiero-terminos-title">Términos y Condiciones de la Billetera Tkiero App</h1>
              <div className="tkiero-terminos-divider"></div>
            </header>

            {/* Introducción */}
            <div className="tkiero-terminos-intro mb-5">
              <h4 className="tkiero-terminos-subtitle">Generales</h4>
              <p>
                En la PLATAFORMA DIGITAL, respetamos su información personal a través de su uso limitado y legítimo, por lo
                que se le informa lo siguiente: sus datos personales le corresponden solo a usted, sin embargo TKIERO, desde
                su aceptación, podrá incorporarla a su base de datos y utilizarla sin restricción alguna para fines internos,
                ya sean comerciales, estadísticos o de establecer perfiles, pero se responsabiliza de no revelar ninguna clase
                de información que le pertenezca (como email, dirección IP, etc.), salvo con su expresa autorización o en casos
                excepciones tales como a las situaciones causadas debido a fuerza mayor que lo requieran, como robos cibernéticos
                o suplantaciones y requerimientos gubernamentales locales o internacionales legítimos, incluyendo investigaciones
                judiciales.
              </p>
            </div>

            {/* Aviso importante */}
            <div className="tkiero-terminos-alert alert alert-info">
              <div className="tkiero-terminos-alert-icon">
                <i className="bi bi-exclamation-circle-fill"></i>
              </div>
              <h5>AVISO IMPORTANTE</h5>
              <p>
                Al acceder o utilizar cualquiera de los sistemas o plataformas desarrolladas por
                XERT, LLC, usted acepta que quedará obligado por estos Términos y Condiciones, los cuales están vigentes durante la utilización de la(s) Plataforma(s)
                TKIERO, en adelante denominada la "PLATAFORMA DIGITAL", tales términos
                incluyen los datos personales, recabados por XERT, LLC. y/o sus relacionadas, afiliadas,
                subsidiarias y Licenciatarias de la referida Plataforma.
              </p>
            </div>

            {/* Secciones de términos */}
            {[...Array(14)].map((_, i) => (
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

            {/* Aceptación */}
            <div className="tkiero-terminos-acceptance text-center mt-5">
              <div className="tkiero-terminos-acceptance-icon">
                <i className="bi bi-check-circle-fill"></i>
              </div>
              <p>
                Al utilizar la Plataforma de Tkiero App, usted acepta el seguimiento de usuario y el uso de cookies
                de acuerdo con esta política.
              </p>
              <p className="tkiero-terminos-contact">
                Si tiene alguna pregunta o inquietud, comuníquese con{' '}
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
              <h1 className="tkiero-terminos-title">Política de Fondos PayPal de Tkiero</h1>
              <div className="tkiero-terminos-divider"></div>
            </header>

            <div className="tkiero-terminos-intro mb-5">
              <h4 className="tkiero-terminos-subtitle text">Objetivo:</h4>
              <p>
                Esta política tiene como objetivo regular el uso de la plataforma Tkiero para procesar pagos a
                través de PayPal, garantizando la protección total de Tkiero frente a posibles fraudes, transacciones
                no autorizadas y el uso indebido de los sistemas financieros. Tkiero, en cumplimiento con la Ley Especial
                contra los Delitos Cibernéticos de El Salvador, y las respectivas leyes en Guatemala, Honduras, Nicaragua,
                Costa Rica, República Dominicana, Panamá, México, y los Estados Unidos, establece las siguientes normativas
                para el uso de cuentas de PayPal vinculadas a la plataforma.
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

          </div>
        </div>
      </section>
    </>
  );

  // Funciones auxiliares para renderizar contenido dinámico
  function getSectionTitle(sectionNumber) {
    const titles = {
      1: "Definiciones",
      2: "Cuenta",
      3: "Seguridad",
      4: "Información",
      5: "Cookies",
      6: "Modificaciones",
      7: "Prohibiciones",
      8: "Derecho de propiedad",
      9: "Información Transmitida",
      10: "Pasarelas de pago",
      11: "Links de pagos",
      12: "Transacciones Fraudulentas",
      13: "Aceptación",
      14: "Jurisdicción y ley aplicable"
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
              Para los efectos de los presentes Términos y Condiciones se establecen las siguientes definiciones que pueden ser utilizadas
              en su uso singular o plural y la aplicación al género correspondiente.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>COMERCIO AFILIADO:</strong> Se refiere a la persona natural o jurídica que, como parte de sus actividades comerciales
                o profesionales, ofrece productos y/o servicios al público en general, a través de su sitio web, aplicación móvil, red social o comercio físico.
              </li>
              <li>
                <strong>USUARIO:</strong> Se refiere a usted, el consumidor final de los productos y/o servicios puestos a disposición por los
                COMERCIOS AFILIADOS y SERVICIOS pagados por medio de la PLATAFORMA DIGITAL.
              </li>
              <li>
                <strong>DATOS PERSONALES:</strong> Se refiere a toda información relacionada con una persona, individual o jurídica identificada
                o que pueda ser identificable a través de medios que puedan ser legal y razonablemente utilizados.
              </li>
              <li>
                <strong>FUERZA MAYOR:</strong> Se refiere a la producción de un hecho o circunstancia (caso de fuerza mayor o caso fortuito) que
                imposibilita o impide que una parte cumpla una o más de sus obligaciones contractuales y/o los presentes Términos y Condiciones,
                en la medida en que la parte afectada por el impedimento pruebe: (a) que dicho impedimento está fuera de su control razonable; y (b)
                que los efectos del impedimento no podrían haber sido razonablemente evitados o superados por la parte afectada.
              </li>
              <li>
                <strong>PLATAFORMA DIGITAL:</strong> Se refiere a la plataforma digital y/o aplicación móvil de TKIERO APP, mediante la cual el
                USUARIO puede ejecutar pagos de bienes y servicios, a través de pasarelas de pago integradas, links de pago, Códigos de Respuesta Rápida
                (Quick Response Code o “Código QR”), Tecnología de Campo Cercano (Near-Field-Communication o “NFC”), Wallet Virtual del USUARIO o una
                tarjeta de crédito, débito o prepago emitida por una entidad financiera, según estos sean habilitados por TKIERO APP; y por medio de la
                cual los COMERCIOS AFILIADOS muestran sus productos al público en general (storefront), en caso aplique, y/o procesan los pagos de la
                venta de sus productos y/o servicios.
              </li>
              <li>
                <strong>LEGISLACIÓN APLICABLE:</strong> Se refiere, para cada país en el que opera TKIERO APP y/o la PLATAFORMA DIGITAL o llegue a
                operar en el futuro, el cuerpo normativo que regule todo lo relativo a la materia.
              </li>
              <li>
                <strong>PASARELA DE PAGO:</strong> Se refiere al sistema electrónico que permite al USUARIO ingresar los números de su tarjeta de
                crédito o débito en la PLATAFORMA DIGITAL o bien DEPOSITAR FONDOS PROPIOS EN LA MISMA.
              </li>
              <li>
                <strong>POS VIRTUAL:</strong> Se refiere al sistema electrónico que permite al COMERCIO AFILIADO procesar los datos de la tarjeta
                de crédito o débito del USUARIO en la PLATAFORMA DIGITAL, consistente en la compra o adquisición de bienes y/o servicios.
              </li>
              <li>
                <strong>SERVICIOS:</strong> Se refiere a todos aquellos servicios que brinda TKIERO APP a través de su PLATAFORMA DIGITAL, tales
                como pero no limitados los servicios de pasarela de pagos, links de pago, Códigos de Respuesta Rápida (Quick Response Code o “Código QR”),
                Tecnología de Campo Cercano (Near-Field-Communication o “NFC”), Wallet Virtual o una tarjeta de crédito, débito o prepago emitida por una
                entidad financiera, según estos sean habilitados por TKIERO APP de tiempo en tiempo.
              </li>
              <li>
                <strong>LINKS DE PAGO:</strong> Se refiere al sistema electrónico que permite al COMERCIO AFILIADO solicitar un pago, debido a la compra
                o adquisición de productos y/o servicios, al USUARIO, a través de las plataformas de mensajería Facebook Messenger, WhatsApp, Instagram, Skype,
                Twitter, Telegram, SMS o cualquier otra similar y a través de correo electrónico que permitan el envío de un enlace que redirige al USUARIO a la
                PLATAFORMA DIGITAL en donde el USUARIO proporciona los datos de su tarjeta de crédito o débito, ó prepago, para que el pago sea procesado por
                el medio que este disponga.
              </li>
              <li>
                <strong>TRANSACCIONES:</strong> Se refiere a todas las transacciones realizadas por el USUARIO, consistentes en la compra o adquisición de
                servicios a través de medios electrónicos, en los que el USUARIO proporciona los datos de su tarjeta de crédito, débito o utilizando los fondos
                que tiene disponibles en la wallet de TKIERO APP prepago, para ser procesados en la PLATAFORMA DIGITAL y que por su naturaleza no implica la
                presentación física de la tarjeta y/o el deslizamiento de esta a través de un POS físico.
              </li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              Para utilizar los SERVICIOS de TKIERO APP a través de las distintas modalidades de la PLATAFORMA DIGITAL, el USUARIO deberá registrarse y crear
              una cuenta en la PLATAFORMA DIGITAL. La información proporcionada deberá ser exacta al crear su cuenta, la información brindada por el USUARIO
              se encontrará sujeta a nuestros avisos de privacidad. La cuenta le dará acceso a los SERVICIOS y funciones de la PLATAFORMA DIGITAL disponibles,
              los cuales podrán ser modificados, de tiempo en tiempo, a entera discreción de TKIERO APP, siempre que dichas modificaciones no alteren en esencia
              el Servicio prestado por TKIERO APP. <br /><br />

              TKIERO APP, se reserva el derecho de rechazar y/o cancelar el registro o afiliación de cualquier USUARIO a su sola discreción, así como a suspender,
              cancelar y/o eliminar cualquier cuenta registrada a nombre de cualquier USUARIO, según TKIERO APP lo considere conveniente. En el caso que existan
              fondos a favor del USUARIO a quien se suspende, cancela y/o elimina su cuenta, TKIERO APP indicará la forma en que estos fondos serán puestos a
              disposición de aquel. <br /><br />

              Es responsabilidad exclusiva del USUARIO proporcionar información verídica y precisa, por lo que TKIERO APP, no se responsabiliza de daños y perjuicios
              por la información que haya sido proporcionada de forma equivocada o falsa, con o sin dolo, por el USUARIO a TKIERO APP. En caso de errores o eventos
              posteriores, TKIERO APP pondrá a disposición y acceso del USUARIO métodos razonables que permitan la modificación, corrección y actualización de información
              ya proporcionada. Lo anterior con la finalidad de que toda la información proporcionada a TKIERO APP sea fiel y se mantenga actualizada hasta donde sea
              necesario para los propósitos de estos Términos y Condiciones.
              <br /><br />

            </p>
          </div>
        );
      case 3:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              TKIERO APP se compromete a velar por su seguridad, por la privacidad de su información y por el respeto de sus datos, de acuerdo con las limitaciones que
              la actual internet nos provee; siendo conscientes que estamos expuestos a diversos ataques, delincuencia informática y situaciones maliciosas fuera de
              nuestro control, lo cual usted acepta y entiende mediante el uso de la PLATAFORMA DIGITAL y/o los diversos servicios que TKIERO APP provee. El uso de la
              información proporcionada deberá ser legítima, necesaria y limitada a los fines específicos aquí previstos y en todo lo relacionado a lo contenido en los
              términos y condiciones de TKIERO APP.<br /><br />
              Usted es responsable de proteger y no revelar la contraseña que utiliza para acceder a la PLATAFORMA DIGITAL y para cualquier actividad o acciones que
              requieran de su contraseña. Por medio de los presentes Términos y Condiciones usted se compromete a no divulgar su contraseña a terceros. TKIERO APP no
              será responsable por el uso incorrecto o no autorizado de su cuenta, por lo que TKIERO APP considerará que todo acto realizado haciendo uso de su cuenta,
              se trata de un acto autorizado por usted, por lo que TKIERO APP nunca será responsable por los daños y/o perjuicios que se le pudieran causar por el
              incorrecto uso de su cuenta, lo cual acepta y ratifica en este acto.

            </p>
          </div>
        );
      case 4:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              Todos sus Datos Personales consignados en la PLATAFORMA DIGITAL son suministrados por usted mismo, haciendo uso entero de su libertad. La información
              almacenada por TKIERO APP solo comprende datos básicos ingresados mediante formularios de registro y contacto, comentarios y otros similares. <br /><br />

              Al proporcionarnos sus Datos Personales, comprendemos que ha revisado y está de acuerdo con nuestra Política de Privacidad y los Términos y Condiciones
              aquí consignados; autorizándonos para el siguiente uso de su información: a) para el fin mismo por lo cual se ha suministrado; b) para considerarlo dentro
              de nuestras estadísticas de tráfico; c) para orientar mejor los SERVICIOS ofrecidos a usted por TKIERO APP; d) para enviar mensajes SMS, e-mails y similares
              con nuestros boletines, responder inquietudes y/o comentarios; y e) para mantener informados a nuestros COMERCIOS AFILIADOS. <br /><br />

              La aceptación de la Política de Privacidad y los presentes Términos y Condiciones constituye un consentimiento expreso de su parte para el debido, legítimo
              y justo procesamiento de sus Datos Personales limitándose a los fines y propósitos específicos descritos en el presente documento.

            </p>
          </div>
        );
      case 5:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              El uso de cookies y su dirección IP, tomados por la PLATAFORMA DIGITAL, se realiza con la única finalidad de mantener la PLATAFORMA DIGITAL de acuerdo con
              sus preferencias locales (tales como navegador Web usado, sistema operativo, ISP, etc.). Las “cookies” permiten entregar un contenido ajustado a sus
              intereses y necesidades. También podrían usarse cookies de terceros que estén presentes en la PLATAFORMA DIGITAL, como anunciantes o publicidad de este,
              con el único fin de proveer información adicional o relevante para su navegación en la PLATAFORMA DIGITAL.
            </p>
          </div>
        );
      case 6:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              TKIERO APP. se reserva el derecho de modificar, rectificar, alterar, agregar o eliminar cualquier punto de los presentes Términos y Condiciones y/o de
              la Política de Privacidad en cualquier momento, siendo su responsabilidad estar atento a cualquier cambio o modificación. La utilización de los SERVICIOS
              TKIERO APP y/o de la PLATAFORMA DIGITAL en un momento posterior a la realización de estas modificaciones, implica que usted acepta las mismas. Es su
              bligación estar atento a cualquier cambio o modificación para estudiarlo previo a la nueva utilización de la PLATAFORMA DIGITAL y los respectivos SERVICIOS.
            </p>

          </div>
        );
      case 7:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              TKIERO APP, no aceptará que se realicen las siguientes actividades dentro de la PLATAFORMA DIGITAL o que los SERVICIOS se utilicen para los siguientes fines:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Venta de drogas, esteroides, y/o cualquier artículo o compuesto que sea ilegal y perjudicial para la salud de los consumidores o cuya distribución se
                encuentre limitada por disposiciones gubernamentales; </li>
              <li>Venta de productos y/o servicios que induzcan realizar actividades contrarias a las leyes o que incentiven la violencia, discriminación y lucro a
                través de un delito, tales como, pero no limitados a, terrorismo, asociación ilícita, lavado de dinero y demás relacionados; </li>
              <li>Venta de servicios y/o productos que violenten derechos de autor, o cualquier otro derecho de propiedad intelectual o industrial;</li>
              <li>Oferta de servicios de prostitución, acompañantes, traslado ilegal de personas, trabajo forzado, tráfico de personas o productos relativos a la
                pornografía y/o cualquier actividad relacionada; </li>
              <li>Venta de armas de fuego de cualquier tipo y/ o sus complementos y otras prohibidas o no por ley; </li>
              <li>Venta de cheques de viajero y/o giros postales; </li>
              <li>Cobros en nombres de otros vendedores a través de procesadores de pagos;</li>
              <li>Reparaciones de créditos y/o liquidaciones de deudas; </li>
              <li>Cambios de divisas o cobros de cheques, así como cualquier otro acto que pueda ser considerado como “intermediación financiera”, sin la debida
                autorización las entidades competentes; </li>
              <li>Promoción de esquemas en forma de pirámides o esquemas Ponzi; </li>
              <li>Oferta de loterías, rentas vitalicias, reservas de compras, y operaciones que costeen deudas con fondos provenientes de tarjeta de crédito o débito; </li>
              <li>Oferta de productos y/o servicios con alta probabilidad de ser fraudulentos, a criterio de TKIERO APP; </li>
              <li>Oferta de apuestas de cualquier clase, juegos, lotería, casinos, que requieren el pago de un precio de entrada y ofrezcan la posibilidad de ganar un sobreprecio,
                y otros análogos, salvo que se cuente con la autorización de las autoridades gubernamentales de su país. </li>
              <li>Venta de productos falsificados o venta de productos ilícitos o de contrabando; </li>
              <li>Utilizar la PLATAFORMA DIGITAL y/o SERVICIOS de TKIERO APP para llevar a cabo hurto o robo directo que podría involucrarse en el procesamiento de tarjetas de
                crédito o débito, así como estafas propias e impropias; </li>
              <li>Actividades comerciales de cualquier tipo que podrían facilitar el lavado de dinero y financiamiento del terrorismo; o </li>
              <li>Venta de cualquier producto y/o servicio que sea o pueda ser considerado como ilegal, incluyendo, pero sin limitarse a la venta de animales prohibidos o no. </li>
              <p className="mt-4">
                El usuario en caso de Infringir los lineamientos de TKIERO APP, en cuanto a la Política de Privacidad y/o estos Términos y Condiciones, llevará la cancelación inmediata
                de su cuenta y la posible notificación a las autoridades locales o internacionales a la brevedad y asume desde ya la responsabilidad las infracciones cometidas,
                liberando a TKIERO APP, pues ha sido advertido previamente de todas las prohibiciones de uso.
              </p>

            </ul>

          </div>
        );
      case 8:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              Todos los derechos, licencias, títulos e intereses sobre la PLATAFORMA DIGITAL son y seguirán siendo propiedad exclusiva de XERT, LLC. Los sistemas y los SERVICIOS están
              protegidos por derechos de propiedad intelectual y al aceptar estos Términos y Condiciones está aceptando el uso regulado que acá se establece de los mismos. De ninguna
              forma se entenderá que, a través de los presentes Términos y Condiciones, existe una cesión o autorización expresa para el uso de licencias y demás derechos relacionados
              a favor de usted, el USUARIO.
            </p>
          </div>
        );
      case 9:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              Toda la información y datos de usted, USUARIO, que se reciba a través de la PLATAFORMA DIGITAL, incluyendo información referente a pagos, Datos Personales y/o
              Datos Personales sensibles, pertenece a usted, USUARIO, por lo que TKIERO APP no será responsable por el contenido o uso de esa información ni garantiza la
              integridad, y confiabilidad de dichos datos y/o información creada, cargada o publicada a través de la PLATAFORMA DIGITAL, ni avala ninguna opinión expresada
              a través de dichos canales.<br /><br />
              En ninguna circunstancia TKIERO APP será responsable de los daños y/o perjuicios de cualquier tipo que se pudieran generar como resultado del mal uso o de la
              información falsa o inexacta proporcionada por los USUARIOS por medio de la PLATAFORMA DIGITAL.<br /><br />
              Usted acepta que es el único responsable por el uso que haga de la PLATAFORMA DIGITAL y/o SERVICIOS de TKIERO APP, así como de las consecuencias correspondientes.
              Usted declara y garantiza que tiene la capacidad, derechos, facultades y autoridad necesarios para conceder la información y demás derechos otorgados a TKIERO APP
              bajo los presentes Términos y Condiciones.

            </p>

          </div>
        );
      case 10:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              Los servicios de procesamiento y la pasarela de pago pueden contener enlaces a sitios web de terceros, anunciantes, servicios, ofertas especiales u
              otros eventos o actividades que no son de propiedad o controlados por TKIERO APP. TKIERO APP, no avala, promueve ni recomienda el uso de estos sitios
              web de terceros. TKIERO APP, no asume ninguna responsabilidad por los actos realizados por cualquiera de estos sitios de terceros, ni por el uso de la
              información proporcionada por los usuarios finales, incluyendo sin limitar los Datos Personales y/o Datos Personales sensibles, materiales, productos o
              servicios.<br /><br />
              Usted reconoce y acepta que, si accede a un sitio web de terceros desde los SERVICIOS o las distintas funciones de TKIERO APP y/o la PLATAFORMA DIGITAL,
              lo hace bajo su propia cuenta, riesgo, responsabilidad y entiende que estos Términos y Condiciones y nuestra Política de Privacidad no se aplicarán al
              uso de dichos sitios, siendo aplicables los términos y condiciones y políticas de privacidad que, en su caso, cada sitio web haya implementado. Usted
              libera expresamente a TKIERO APP de cualquier y toda responsabilidad de cualquier tipo, derivada del uso de cualquier sitio web, servicio o contenido
              de terceros y acepta que sus relaciones con cualquier sitio web de terceros, servicio o contenido es sólo entre usted y dichos terceros. Usted acepta
              que TKIERO APP no es ni será responsable por cualquier pérdida, daño o perjuicio de cualquier tipo que pueda sufrir en sus relaciones con tales terceros.

            </p>

          </div>
        );
      case 11:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              La captura de datos de tarjeta de crédito, débito , fondos en la wallet TKIERO APPo prepago se hará a través de un link o enlace seguro (HTTPS) que puede
              recibirse por medio de las plataformas de mensajería Facebook Messenger, WhatsApp, Instagram, Skype, Twitter, Telegram, SMS y a través de correo electrónico
              y cualquier otra similar, en donde el USUARIO deberá introducir la información de su tarjeta de crédito, débito o prepago, para realizar la compra de
              productos o adquisición de servicios del COMERCIO AFILIADO. En algunos casos se solicitarán los tres (3) o cuatro (4) dígitos, según corresponda, en la
              parte de atrás de la tarjeta de crédito o débito, conocido como “Card Verification Value” o “CVV”. Dicho CVV nunca se almacenará en ninguna de las
              plataformas ni sistemas de TKIERO, APP.<br /><br />
              La protección ante fraudes de la información de la tarjeta de crédito, débito o prepago del USUARIO está respaldada por los reglamentos de la PCI-DSS
              (Payment Card Industry) que avalan a TKIERO, APP para el procesamiento seguro de tarjetas de crédito, débito o prepago, en su caso.<br /><br />
              La única información que TKIERO APP comunica a los COMERCIOS AFILIADOS son los últimos cuatro (4) dígitos del número de la tarjeta de crédito o débito,
              numero de autorización, la dirección IP donde se realizó el pago y el monto de transacción, que le permite al COMERCIO AFILIADO saber quién realizo la
              transacción y si la transacción fue aceptada o rechazada.

            </p>
          </div>
        );
      case 12:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              TKIERO APP nunca será responsable por transacciones fraudulentas, en caso de que ocurran. Cualquier transacción fraudulenta ocurrida por el procesamiento
              de tarjetas que hayan sido robadas o clonadas será debitada o cobrada al COMERCIO AFILIADO.<br /><br />
              TKIERO APP, no se responsabiliza por la pérdida de datos de los USUARIOS, documentos legales y toda información sensible ocurrida por el acceso de
              USUARIOS y/o terceros mal intencionados a la plataforma de TKIERO APP.
            </p>
          </div>
        );
      case 13:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              Usted acepta no culpar directamente a TKIERO APP, (tanto XERT, LLC, sus relacionadas, afiliadas y/o subsidiarias), sus licenciatarias, distribuidores,
              vendedores, empleados, contratistas, agentes, representantes, funcionarios, gerentes, directores y socios contra todo y cualquier reclamo, daños, perjuicios,
              obligaciones, pérdidas, responsabilidades, costos o deudas y gastos (incluyendo sin limitar los honorarios de abogados) que surjan del uso o mal uso,
              errores del usuario y acceso a los SERVICIOS y/o la PLATAFORMA DIGITAL, prestados directamente a usted o por medio de los COMERCIOS AFILIADOS o terceras
              personas, para el procesamiento de tarjetas de crédito, débito o prepago dentro de la PLATAFORMA DIGITAL. También acepta no culpar a TKIERO APP ante cualquier
              reclamo originado por: (i) datos o información transmitidos o recibidos por usted; (ii) el acceso o utilización de los SERVICIOS y/o sistemas de terceros con
              su nombre de usuario y contraseña; y (iii) la violación de estos Términos y Condiciones y/o de cualquier ley, reglamento o relación contractual que resulte
              aplicable.
              <br /><br />
              En caso de requerir contactarse con TKIERO APP, a fin de realizar cualquier consulta con relación a los presentes Términos y Condiciones, podrá hacerlo
              escribiendo a <Link to="mailto:help@tkiero.app" className="tkiero-cookies-link">help@tkiero.app</Link>
              <br /><br />
              Asimismo, usted reconoce que, en el caso que uno de estos términos y/o condiciones no sea válido o ejecutable, el resto de los Términos y Condiciones no se
              verán afectados.
            </p>
          </div>
        );
      case 14:
        return (
          <div className="text-justify text-sm space-y-4">
            <p>
              El uso de la PLATAFORMA DIGITAL será regido e interpretado de conformidad con la legislación del país en el cual se utilizan los SERVICIOS y/o la
              PLATAFORMA DIGITAL. Cualquier conflicto, controversia o diferencia que pudiera relacionarse con, o derivarse de la relación entre TKIERO APP y el
              USUARIO o cualquier tercero será resuelto por los Tribunales de la ciudad capital del país en el cual se solicitan/utilizan los SERVICIOS a través de
              la PLATAFORMA DIGITAL.TKIERO APP y el USUARIO señalamos dichos tribunales como domicilio especial, a cuya jurisdicción nos sometemos expresamente
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