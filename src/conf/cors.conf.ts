import cors from "cors";
import { Application } from "express";

const corsOptions = {
  origin: "*",
  methods: "GET,PUT,PATCH,POST,DELETE",
  maxAge: 86400,
};

export default (app: Application) => app.use(cors(corsOptions));
