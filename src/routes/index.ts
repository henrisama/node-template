import express, { Express, Request, Response, NextFunction } from "express";
var router = express.Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send({ message: "Welcome to the API" });
});

export default router;
