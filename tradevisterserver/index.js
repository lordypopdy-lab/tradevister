const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const cors = require("cors");

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://tradevister.vercel.app",
  "https://tradevister-kyc.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

router.use(cors(corsOptions));
router.options("*", cors(corsOptions));

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected successfuly!"))
  .catch((error) => console.log("Database not connected", error));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/authRoute"));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`TradeVister is Running at Port: ${PORT}`);
});
