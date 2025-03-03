const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config");
const resultRoutes = require("./routes/resultRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/result", resultRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
