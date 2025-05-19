import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const form = useRef();
    const mostrarAlerta = (title, texto, icon) => {
        Swal.fire({
            title: title,
            text: texto,
            icon: icon,
            showCancelButton: false,
            color: '#007bff',
            background: ' #e0f2ff',
            confirmButtonColor: '#007bff',
            confirmButtonText: 'Aceptar',
            timer: 5000,
            timerProgressBar: true,
        });
    };
    //validacion de correo
    const esCorreoValido = (correo) => {
        const regex =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const cleanEmail = correo.trim().toLowerCase();

        if (cleanEmail !== correo) {
            return false;
        }
        return regex.test(correo);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const nombre = form.current['nombre'].value.trim();
        const correo = form.current['correo'].value.trim();
        const asunto = form.current['asunto'].value.trim();
        const mensaje = form.current['mensaje'].value.trim();

        // Validaciones
        if (nombre === '') {
            mostrarAlerta('Nombre requerido', 'Por favor ingresa tu nombre.', 'warning');
            form.current['nombre'].focus();
            return;
        }

        if (!esCorreoValido(correo)) {
            mostrarAlerta('Correo inválido', 'Por favor ingresa un correo electrónico válido.', 'warning');
            form.current['correo'].focus();
            return;
        }

        if (asunto === '') {
            mostrarAlerta('Asunto requerido', 'Por favor ingresa el asunto.', 'warning');
            form.current['asunto'].focus();
            return;
        }

        if (mensaje === '') {
            mostrarAlerta('Mensaje requerido', 'Por favor escribe tu mensaje.', 'warning');
            form.current['mensaje'].focus();
            return;
        }

        // Envía el formulario usando EmailJS
        emailjs
            .sendForm(
                'service_qkfvuiq',
                'template_kyjvixr',
                form.current,
                'HuJZPBqvwxc75KCXF'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    mostrarAlerta('!Éxito¡', 'Mensaje enviado con éxito', 'success');
                },
                (error) => {
                    console.log(error.text);
                    mostrarAlerta('Error', 'Hubo un error al enviar el mensaje', 'error');
                }
            );

        // Limpia el formulario después de enviar
        e.target.reset();
    };

    const { t } = useTranslation();
    return (
        <div className="col-12 col-md-6">
            <div className="card shadow-sm card5">
                <div className="card-body5">
                    <h3 className="card-title5 text-center">{t('caracteristicas.bloque1.text3')}</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">{t('caracteristicas.bloque1.text4')}</label>
                            <input type="text" className="form-control" id="nombre" name='nombre' placeholder={t('caracteristicas.bloque1.text4')} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="correo" className="form-label">Email</label>
                            <input type="email" className="form-control" id="correo" name="correo" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="asunto" className="form-label">{t('caracteristicas.bloque1.text5')}</label>
                            <input type="text" className="form-control" id="asunto" name='asunto' placeholder={t('caracteristicas.bloque1.text5')} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">{t('caracteristicas.bloque1.text6')}</label>
                            <textarea className="form-control" id="mensaje" name='mensaje' rows="4" placeholder={t('caracteristicas.bloque1.text6')}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">{t('caracteristicas.bloque1.text7')}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;