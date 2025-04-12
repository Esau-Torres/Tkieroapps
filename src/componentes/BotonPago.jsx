import React from "react";

const BotonPago = ({ transactionId }) => {
  const handlePago = () => {
    // Redirige al formulario PHP con el transactionId
    window.location.href = `http://localhost:8000/form-ibex.php#${transactionId}`;
  };

  return (
    <button className="btn btn-primary" onClick={handlePago}>
      Ir al formulario de pago
    </button>
  );
};

export default BotonPago;
