import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "../Estilos/ibex-form.css";

const IbexForm = () => {
    const [transactionId, setTransactionId] = useState(null);
    const [formVisible, setFormVisible] = useState(false);
    const [linkVisible, setLinkVisible] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [isAmountDisabled, setIsAmountDisabled] = useState(true);


    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState("-");
    const [userName, setUserName] = useState("");
    const [boltLink, setBoltLink] = useState("");

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
    });

    useEffect(() => {
        const hash = window.location.hash;
        const id = hash ? hash.replace("#", "") : null;
        if (id) {
            setTransactionId(id);
            fetchTransaction(id);
        } else {
            setLoading(false);
            setNotFound(true);
        }
    }, []);

    const fetchTransaction = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/payment-link/${id}`);
            if (!res.ok) throw new Error("Transaction not found");
            const data = await res.json();
            const info = data.info.data;

            setAmount(info.transaction.requestedAmount);
            setCurrency(info.transaction.currency);
            setUserName(`${info.user.nombres} ${info.user.apellidos}`);
            
            if (!info.transaction.isInvoice || info.transaction.isInvoice === 0) {
                setIsAmountDisabled(false);
                
              }

            setFormVisible(true);
        } catch (err) {
            setNotFound(true);
        } finally {
            setLoading(false);
        }
    };

    const validateEmail = (email) => {
        // Validación básica de correo electrónico
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Number(amount) <= 0) {
            alert("La cantidad debe ser mayor que cero.");
            return;
        }

        if (formData.fullname.trim() === "") {
            alert("Por favor, ingresa tu nombre completo.");
            return;
        }

        if (formData.email.trim() === "") {
            alert("Por favor, ingresa tu dirección de correo electrónico.");
            return;
        }

        if (!validateEmail(formData.email)) {
            alert("Por favor, ingresa un correo válido.");
            return;
        }

        setButtonDisabled(true);

        try {
            const res = await fetch("http://localhost:5000/api/payment-link/transaction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    transactionId,
                    amountToPay: Number(amount),
                    name: formData.fullname,
                    email: formData.email
                })
            });

            const data = await res.json();
            if (res.ok) {
                const boltUri = "lightning:" + data.info.data.bolt11;
                setBoltLink(boltUri);
                setFormVisible(false);
                setLinkVisible(true);
            } else {
                alert("Error generando el enlace de pago.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un error al procesar la solicitud, por favor intenta nuevamente.");
        } finally {
            setButtonDisabled(false);
        }
    };

    return (
        <div className="transaction-wrapper">
            {loading && (
                <div>
                    <dotlottie-player
                        src="https://lottie.host/aa454ed2-5fad-4511-92c9-ad281ad6f8bd/ZnXAhRs5Qq.json"
                        background="transparent"
                        speed="1"
                        className="lottie-animation"
                        loop
                        autoPlay
                    ></dotlottie-player>
                    <p className="loading-text">Cargando transacción...</p>
                </div>
            )}

            {formVisible && (
                <div className="form-container">
                    <div className="transaction-header">
                        <h1>
                            <span className="highlight-name">{userName}</span> ha solicitado &nbsp;
                            <span className="amount me-3">${amount}</span>
                            <span className="amount">{currency}</span>
                        </h1>
                        <h2 className="transaction-subtitle">Completa la siguiente información con tus datos</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="transaction-form">
                        <div className="form-group">
                            <label>Cantidad</label>
                            <input
                                id="txtamount"
                                type="number"
                                min="0"
                                step="0.01"
                                disabled={isAmountDisabled}
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Moneda</label>
                            <input type="text" disabled value={currency} />
                        </div>
                        <div className="form-group">
                            <label>Nombre Completo</label>
                            <input
                                type="text"
                                value={formData.fullname}
                                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <button className="paymentLink" type="submit" disabled={buttonDisabled}>
                            Continuar
                        </button>
                    </form>
                </div>
            )}

            {linkVisible && (
                <div className="payment-section">
                    <h2 className="payment-title">¡Listo para pagar!</h2>
                    <p className="payment-instruction"> Haz clic en el botón o escanea el código QR para completar tu pago </p>

                    <div id="div-payment-link">
                        <a href={boltLink} className="paymentLink">PAGAR AHORA </a>
                    </div>

                    <p className="qr-instruction">O escanea el código QR:</p>

                    <div className="qr-container">
                        <QRCodeSVG value={boltLink} size={window.innerWidth < 768 ? 200 : 256} className="qr-code" />
                    </div>

                    <dotlottie-player
                        src="https://lottie.host/ad1e1dbe-cfca-4456-81da-d1f71ceb1149/lWt7tbPuqr.json"
                        background="transparent" speed="1" className="lottie-animation success-animation" loop autoPlay ></dotlottie-player>
                </div>
            )}

            {notFound && (
                <div id="div-payment-not-found" className="not-found-section">
                    <dotlottie-player
                        src="https://lottie.host/cb8bed71-3967-4079-ae96-a95887697ca9/8xCCirBKNz.json" background="transparent" speed="1" className="lottie-animation error-animation" loop autoPlay ></dotlottie-player>
                    <h2>Transacción no encontrada</h2>
                    <p>Por favor, verifica el enlace o contacta al solicitante</p>
                </div>
            )}
        </div>
    );
};

export default IbexForm;
