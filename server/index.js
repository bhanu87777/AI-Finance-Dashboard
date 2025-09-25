import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

/* SETUP STATIC FILES FOR PRODUCTION (React build) */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  // Serve frontend build
  app.use(express.static(path.join(__dirname, "../client/build")));

  // Serve React index.html for unknown routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(async () => {
    app.listen(PORT, () => console.log(`✅ Server running on Port: ${PORT}`));

    // Optional: Seed data once
    // await mongoose.connection.db.dropDatabase();
    // await KPI.insertMany(kpis);
    // await Product.insertMany(products);
    // await Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} ❌ did not connect`));
