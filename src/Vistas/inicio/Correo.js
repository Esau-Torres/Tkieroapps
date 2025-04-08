import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

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
                    alert('Mensaje enviado con éxito');
                },
                (error) => {
                    console.log(error.text);
                    alert('Hubo un error al enviar el mensaje');
                }
            );

        // Limpia el formulario después de enviar
        e.target.reset();
    };

    return (
        <div className="col-12 col-md-6">
            <div className="card shadow-sm card5">
                <div className="card-body5">
                    <h3 className="card-title5">Escríbenos</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" name='nombre' placeholder="Nombre" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="correo" className="form-label">Email</label>
                            <input type="email" className="form-control" id="correo" name="correo" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="asunto" className="form-label">Asunto</label>
                            <input type="text" className="form-control" id="asunto" name='asunto' placeholder="Asunto" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Escribe tu mensaje</label>
                            <textarea className="form-control" id="mensaje" name='mensaje' rows="4" placeholder="Deja tu mensaje"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;