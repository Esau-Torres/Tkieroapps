<?php
// Mostrar errores para desarrollo (puedes quitar esto en producción)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Pago IBEX</title>
    <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
    <style>
        /* Todo el estilo original los tal cual */
        label{margin-bottom:6px!important}
        .transaction-wrapper{max-width: 1200px; margin:auto; padding:20px 15px}
        .amount {color:#2892e1}
        button{background:#2892e1; color:#fff}
        .paymentLink{
            clear:both;
            margin-top:20px;
            background: #0092e1;
            padding: 20px 80px;
            border-radius: 30px;
            color: #fff;
            font-weight:bold;
            margin-bottom:20px;
            text-transform:uppercase;
            font-size:16px;
        }
        #div-payment-link{text-align:center; margin:4rem 0}
        input{
            margin-bottom:16px; 
            background: #ccc;
            padding: 1.1em;
            max-width: 400px;
            width: 100%;
            border:none
        } 
        input:disabled {
            background: #ccc;
        }
        button:disabled {
            background:#ccc;
            color:#000;
        }
        #div-payment-not-found {
            text-align:center;
            padding:3rem 0 8rem
        }
    </style>
</head>
<body>
    <div class="transaction-wrapper">
        <div id="div-form-loading" style="display:block">
            <dotlottie-player src="https://lottie.host/aa454ed2-5fad-4511-92c9-ad281ad6f8bd/ZnXAhRs5Qq.json" background="transparent" speed="1" style="width: 300px; height: 300px; margin:auto" loop autoplay></dotlottie-player>
        </div>

        <div id="div-form-payment" style="display: none">
            <h1><span id="lbluser"></span> ha solicitado <span id="lblamount" class="amount"></span> <span class="amount" id="lblcurrency"></span></h1>
            <h2>Completa la siguiente información con tus datos</h2>
            <form id="payment-form">
                <label for="amount">Cantidad</label>
                <input type="number" min="0" disabled id="txtamount" name="amount" value="0.00" step=0.01 />

                <label for="currency">Moneda</label>
                <input type="text" id="txtcurrency" disabled name="currency" value="-" />

                <label for="fullname">Nombre Completo</label>
                <input type="text" id="txtfullname" name="fullname" value="" />

                <label for="email">Email</label>
                <input type="email" id="txtemail" name="email" value="" /><br>
                
                <button class="paymentLink" id="btnsubmit" type="submit">Continuar</button>
            </form>
        </div>

        <div id="div-payment-link" style="display: none">
            <a class="paymentLink" id="payment-link">PAGAR AHORA</a><br><br>
            <dotlottie-player src="https://lottie.host/ad1e1dbe-cfca-4456-81da-d1f71ceb1149/lWt7tbPuqr.json" background="transparent" speed="1" style="width: 300px; height: 300px; margin:auto" loop autoplay></dotlottie-player>
        </div>

        <div id="div-payment-not-found" style="display:none;">
            <dotlottie-player src="https://lottie.host/cb8bed71-3967-4079-ae96-a95887697ca9/8xCCirBKNz.json" background="transparent" speed="1" style="margin:auto; width: 300px; height: 300px; margin:auto" loop autoplay></dotlottie-player>
            <h1>Transacción no encontrada</h1>
        </div>
    </div>

    <script>
        let transaction_id = null;
        let divformloading = document.getElementById("div-form-loading");
        let divpaymentform = document.getElementById("div-form-payment");
        let divnotfound = document.getElementById("div-payment-not-found");
        let divpaymentlink = document.getElementById("div-payment-link");
        let btnsubmit = document.getElementById("btnsubmit");

        window.addEventListener("load", async () => {
            try {
                const form = document.getElementById("payment-form");

                form.addEventListener("submit", function (event) {
                    event.preventDefault();
                    let amount = document.getElementById("txtamount");
                    let fullname = document.getElementById("txtfullname");
                    let email = document.getElementById("txtemail");

                    if (Number(amount.value) <= 0) {
                        alert("El monto debe ser mayor a cero.");
                        return;
                    }
                    if (fullname.value.trim() === "") {
                        alert("Por favor, ingresa tu nombre.");
                        return;
                    }
                    if (email.value.trim() === "") {
                        alert("Por favor, ingresa tu correo electrónico.");
                        return;
                    }

                    btnsubmit.setAttribute("disabled", '');
                    submitForm(amount.value, fullname.value, email.value);
                });

                async function submitForm(amount, fullname, email) {
                    const url = "https://api.tkiero.app/api/v1/wallet/ibex/payment-link/transaction";
                    const data = {
                        transactionId: transaction_id,
                        amountToPay: Number(amount),
                        name: fullname,
                        email: email,
                    };

                    try {
                        const response = await fetch(url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data),
                        });

                        const result = await response.json();
                        btnsubmit.removeAttribute("disabled");

                        const myLink = document.getElementById("payment-link");
                        myLink.href = "lightning:" + result.info.data.bolt11;

                        divpaymentform.style.display = "none";
                        divpaymentlink.style.display = "block";
                    } catch (error) {
                        btnsubmit.removeAttribute("disabled");
                        alert("Hubo un problema al procesar la solicitud. Intenta nuevamente.");
                        console.error("Error:", error);
                    }
                }

                const url = window.location.href;
                const urlParts = url.split("/#");
                transaction_id = urlParts[urlParts.length - 1];

                const response = await fetch(`https://api.tkiero.app/api/v1/wallet/ibex/payment-link/${transaction_id}`);

                if (response.status === 200) {
                    const data = await response.json();
                    const user = document.getElementById("lbluser");
                    const amount = document.getElementById("txtamount");
                    const currency = document.getElementById("txtcurrency");
                    const lblamount = document.getElementById("lblamount");
                    const lblcurrency = document.getElementById("lblcurrency");

                    user.innerHTML = `${data.info.data.user.nombres} ${data.info.data.user.apellidos}`;
                    lblamount.innerHTML = data.info.data.transaction.requestedAmount;
                    lblcurrency.innerHTML = data.info.data.transaction.currency;
                    amount.value = data.info.data.transaction.requestedAmount;
                    currency.value = data.info.data.transaction.currency;

                    if (!data.info.data.transaction.isInvoice) {
                        amount.removeAttribute("disabled");
                    }

                    divpaymentform.style.display = "block";
                    divformloading.style.display = "none";
                    divnotfound.style.display = "none";
                } else {
                    divformloading.style.display = "none";
                    divpaymentform.style.display = "none";
                    divnotfound.style.display = "block";
                }

            } catch (e) {
                console.error(e);
                divpaymentform.style.display = "none";
                divformloading.style.display = "none";
                divnotfound.style.display = "block";
            }
        });
    </script>
</body>
</html>
