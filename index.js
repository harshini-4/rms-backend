import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import adminRoutes from "./routes/admin.js";
import menuRoutes from "./routes/menu.js";
import orderRoutes from "./routes/order.js";
import paymentRoutes from "./routes/payment.js";
import feedbackRoutes from "./routes/feedback.js";
import employeeRoutes from "./routes/employee.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));


// Default Route
app.get("/", (req, res) => {
    res.send("Restaurant Management System Backend is running");
});

// Use Admin Routes
app.use("/admin", adminRoutes);
// Use Menu Routes
app.use("/menu", menuRoutes);
// Use Order Routes
app.use("/order", orderRoutes);
// Use Payment Routes
app.use("/payment", paymentRoutes);
// Use Feedback Routes
app.use("/feedback", feedbackRoutes);
app.use("/employee", employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
