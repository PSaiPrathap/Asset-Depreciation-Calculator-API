const express = require("express");
const cors = require("cors");

const depreciationRoutes = require("./routes/depreciationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", depreciationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} You can access the API on Postman at http://localhost:${PORT}/api/calculate_asset_depreciation`);
});