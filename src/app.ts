import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import Debug from "debug";
import dotenv from "dotenv";
dotenv.config();

const debug = Debug("app:server");

const PORT = process.env.PORT || 3000;

import indexRouter from "./routes/index";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(PORT, () => debug(`Server running on port ${PORT}`));

export default app;
