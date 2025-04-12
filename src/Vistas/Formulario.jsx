import React from "react";
import BotonPago from "../componentes/BotonPago";

const Formulario = () => {
  
  const transactionId = "652adf9d9bfbdd001db87971";

  return (
    <div className="container mt-5">
      <h2>Formulario de pago</h2>
      <BotonPago transactionId={transactionId} />
    </div>
  );
};

export default Formulario;
