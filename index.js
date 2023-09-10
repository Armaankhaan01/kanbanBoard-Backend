// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const Card = require("./models/Card");
const cardRoutes = require("./routes/cards");
const categoriesRoutes = require("./routes/categories");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Define routes for your API here
app.use("/api", cardRoutes);
app.use("/api", categoriesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
