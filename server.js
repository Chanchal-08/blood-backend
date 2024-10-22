const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const donorRoutes = require("./routes/donorRoutes");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/api", donorRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
