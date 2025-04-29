import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { QRCodeSVG } from "qrcode.react";
import "../Estilos/ibex-form.css";

const BASE_URL = window.location.hostname.includes('github.io') ? 'https://api.tkiero.app' : '';

const FormIbex = () => {

    const [transactionId, setTransactionId] = useState(null);
    const [formLoading, setFormLoading] = useState(true);
    const [formNotFound, setFormNotFound] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [paymentLinkVisible, setPaymentLinkVisible] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [amount, setAmount] = useState('0.00');
    const [currency, setCurrency] = useState('-');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [isAmountEditable, setIsAmountEditable] = useState(false);
    const [link, setLink] = useState('');

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

    useEffect(() => {
        const url = window.location.href;
        const parts = url.split('/#');
        const id = parts[parts.length - 1];
        setTransactionId(id);

        fetch(`${BASE_URL}/api/v1/wallet/ibex/payment-link/${id}`)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw new Error('Transacción no encontrada');
                }
            })
            .then(data => {
                const d = data.info.data;
                setUserName(`${d.user.nombres} ${d.user.apellidos}`);
                setAmount(d.transaction.requestedAmount);
                setCurrency(d.transaction.currency);
                setIsAmountEditable(!d.transaction.isInvoice);
                setFormVisible(true);
            })
            .catch(() => {
                setFormNotFound(true);
            })
            .finally(() => {
                setFormLoading(false);
            });
    }, []);

    const isValidEmail = (email) => {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const cleanEmail = email.trim().toLowerCase();

        if (cleanEmail !== email) {
            return false;
        }

        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Number(amount) <= 0) {
            mostrarAlerta('Warning', 'Amount must be greater than zero', 'warning');
            return;
        }
        if (name.trim() === '') {
            mostrarAlerta('Warning', 'Please, enter your name', 'warning');
            return;
        }
        if (email.trim() === '') {
            mostrarAlerta('Warning', 'Please, enter your email address', 'warning');
            return;
        }

        setDisabled(true);
        try {
            const response = await fetch(
                `${BASE_URL}/api/v1/wallet/ibex/payment-link/transaction`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        transactionId,
                        amountToPay: Number(amount),
                        name,
                        email,
                    }),
                }
            );

            const data = await response.json();
            setLink(`${data.info.data.bolt11}`);
            setFormVisible(false);
            setPaymentLinkVisible(true);
        } catch (err) {
            alert('There was a problem processing the request, please try again');
        } finally {
            setDisabled(false);
        }
    };

    // validaciones del formulario para habilidar el boton
    const isFormValid = () => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };
        return name.trim() !== '' && isValidEmail(email) && Number(amount) > 0;
    };

    return (

        <div className="transaction-wrapper">
            {formLoading && (
                <div id="div-form-loading">
                    <dotlottie-player
                        src="https://lottie.host/aa454ed2-5fad-4511-92c9-ad281ad6f8bd/ZnXAhRs5Qq.json"
                        background="transparent" speed="1" className="lottie-animation" loop autoPlay></dotlottie-player>
                    <p className="loading-text">Cargando transacción...</p>
                </div>
            )}

            {formNotFound && (
                <div id="div-payment-not-found" className="not-found-section">
                    <dotlottie-player
                        src="https://lottie.host/cb8bed71-3967-4079-ae96-a95887697ca9/8xCCirBKNz.json" background="transparent" speed="1" className="lottie-animation error-animation" loop autoPlay ></dotlottie-player>
                    <h2>Transacción no encontrada</h2>
                    <p>Por favor, verifica el enlace o contacta al solicitante</p>
                </div>
            )}

            {formVisible && (
                <div id="div-form-payment" className="form-container">
                    <div className="transaction-header">
                        <h1>
                            <span id="lbluser" className="highlight-name">{userName}</span> ha solicitado{' '}
                            <span id="lblamount" className="amount">{amount <= 0 ? 0 : amount}</span>{' '}
                            <span className="amount" id="lblcurrency">{currency}</span>
                        </h1>
                        <h2 className="transaction-subtitle">Completa la siguiente información con tus datos</h2>
                    </div>

                    <form id="payment-form" onSubmit={handleSubmit} className="transaction-form">
                        <div className="form-group">
                            <label>Cantidad</label>
                            <input type="number" min="0" step="0.01" id="txtamount" value={amount} disabled={!isAmountEditable} onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Moneda</label>
                            <input type="text" id="txtcurrency" value={currency} disabled />
                        </div>
                        <div className="form-group">
                            <label>Nombre Completo</label>
                            <input type="text" id="txtfullname" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" id="txtemail" value={email} onChange={(e) => setEmail(e.target.value.trim().toLowerCase())} required />
                            {email && !isValidEmail(email) && (
                                <p style={{ color: 'red', fontSize: '12px' }}>Correo electrónico no válido</p>
                            )}
                        </div>

                        <button className="paymentLink" id="btnsubmit" type="submit" disabled={disabled || !isFormValid()}>
                            Continuar
                        </button>
                    </form>
                </div>
            )}

            {paymentLinkVisible && (
                <div className="payment-section">
                    <h2 className="payment-title">¡Listo para pagar!</h2>
                    <p className="payment-instruction"> Haz clic en el botón o escanea el código QR para completar tu pago </p>
                    <div id="div-payment-link">
                        <a href={link} className="paymentLink">PAGAR AHORA </a>
                    </div>
                    <p className="qr-instruction">O escanea el código QR:</p>
                    <div className="qr-container">
                        <QRCodeSVG value={link} size={window.innerWidth < 768 ? 200 : 256} className="qr-code" />
                    </div>
                    <dotlottie-player
                        src="https://lottie.host/ad1e1dbe-cfca-4456-81da-d1f71ceb1149/lWt7tbPuqr.json"
                        background="transparent" speed="1" className="lottie-animation success-animation" loop autoPlay >
                    </dotlottie-player>
                </div>
            )}
        </div>
    );
};

export default FormIbex;