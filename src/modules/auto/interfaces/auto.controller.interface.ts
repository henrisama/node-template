import { Request, Response } from "express";

export default interface IAutoController {
  getAll(req: Request, res: Response): Promise<void>;
  getById(req: Request, res: Response): Promise<void>;
  create(req: Request, res: Response): Promise<void>;
  update(req: Request, res: Response): Promise<void>;
  delete(req: Request, res: Response): Promise<void>;
  softDelete(req: Request, res: Response): Promise<void>;
  restore(req: Request, res: Response): Promise<void>;
}
