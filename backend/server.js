const express = require("express");
const cors = require("cors");
const app = express();
const candidateRoutes = require("./routes/candidates");

app.use(cors());
app.use(express.json());
app.use("/api/candidates", candidateRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
