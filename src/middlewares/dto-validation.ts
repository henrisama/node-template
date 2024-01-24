import { validate } from "class-validator";
import { Request, Response, NextFunction, RequestHandler } from "express";

export function dtoValidation(dto: any): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    validate(dto).then((errors: any) => {
      if (errors.length > 0) {
        res.status(400).send(errors);
      } else {
        next();
      }
    });
  };
}
