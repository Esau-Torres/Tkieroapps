const express = require("express");
const cors = require("cors");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.get("/api/payment-link/:transactionId", async (req, res) => {
  const { transactionId } = req.params;
  
  try {
    const response = await fetch(`https://api.tkiero.app/api/v1/wallet/ibex/payment-link/${transactionId}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: "Transaction not found" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/api/payment-link/transaction", async (req, res) => {
  try {
    const response = await fetch("https://api.tkiero.app/api/v1/wallet/ibex/payment-link/transaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error submitting transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
