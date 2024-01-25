import { UUID } from "crypto";
import { buildService } from "./auto.service";
import express, { Request, Response } from "express";
import IAutoService from "./interfaces/auto.service.interface";
import IAutoController from "./interfaces/auto.controller.interface";
import { dtoValidation } from "../../middlewares/dto-validation";
import * as path from "path";

export const buildController = <T, CreateDto, UpdateDto>(
  name: string,
  service: IAutoService<T, CreateDto, UpdateDto>,
  createDto: any,
  updateDto: any
) => {
  class AutoController implements IAutoController {
    path: string;
    router: express.Router;
    autoService: IAutoService<T, CreateDto, UpdateDto>;

    constructor() {
      this.path = path.join("/", name);
      this.router = express.Router();
      this.autoService = service ?? buildService();
    }

    public getAll = async (req: Request, res: Response) => {
      try {
        const items = await this.autoService.getAll();
        res.status(200).json(items);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };

    public getById = async (req: Request, res: Response) => {
      try {
        const item = await this.autoService.getById(req.params.id as UUID);
        if (item) {
          res.status(200).json(item);
        } else {
          res.status(404).json({ message: "Item not found" });
        }
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };

    public create = async (req: Request, res: Response) => {
      try {
        const createDto: CreateDto = req.body;
        const newItem = await this.autoService.create(createDto);
        res.status(201).json(newItem);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };

    public update = async (req: Request, res: Response) => {
      try {
        const updateDto: UpdateDto = req.body;
        const updatedItem = await this.autoService.update(
          req.params.id as UUID,
          updateDto
        );
        res.status(200).json(updatedItem);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };

    public delete = async (req: Request, res: Response) => {
      try {
        const deletedItem = await this.autoService.delete(req.params.id as UUID);
        res.status(200).json(deletedItem);
      } catch (error: any) {
        res.status(500).json({ message: error?.message });
      }
    };

    public softDelete = async (req: Request, res: Response) => {
      try {
        await this.autoService.softDelete(req.params.id as UUID);
        res.status(200).json({
          message: `Item with id ${req.params.id} soft deleted successfully`,
        });
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };

    public restore = async (req: Request, res: Response) => {
      try {
        await this.autoService.restore(req.params.id as UUID);
        res.status(200).json({
          message: `Item with id ${req.params.id} restored successfully`,
        });
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    };

    initializeRoutes() {
      this.router.get(this.path, this.getAll);
      this.router.get(`${this.path}/:id`, this.getById);
      this.router.post(this.path, dtoValidation(createDto), this.create);
      this.router.put(`${this.path}/:id`, dtoValidation(updateDto), this.update);
      this.router.delete(`${this.path}/:id`, this.delete);
      this.router.patch(`${this.path}/:id/softDelete`, this.softDelete);
      this.router.patch(`${this.path}/:id/restore`, this.restore);
    }
  }

  return AutoController;
};
