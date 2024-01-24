import path from "path";
import Debug from "debug";
import logger from "morgan";
import dotenv from "dotenv";
import express from "express";
import cors from "./conf/cors.conf";
import routes from "./conf/routes.conf";
import cookieParser from "cookie-parser";
dotenv.config();

const debug = Debug("app:server");
const PORT = process.env.PORT || 3333;
const app = express();

cors(app);
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
routes(app);

app.listen(PORT, () => debug(`Server running on port ${PORT}`));

export default app;
