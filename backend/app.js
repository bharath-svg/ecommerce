import express from "express";
import product from "./routes/productRoute.js";
import user from "./routes/userRoute.js";
import order from "./routes/orderRoute.js";
import cookieParser from "cookie-parser";
import payment from "./routes/paymentRoute.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";

import errorMiddleware from "./middleware/error.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(errorMiddleware);

export default app;
