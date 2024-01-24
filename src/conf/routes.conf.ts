import express, { Request, Response, NextFunction, Application } from "express";
const router = express.Router();

router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send({ message: "Hello World!" });
});

export default (app: Application) => app.use("/", router);
