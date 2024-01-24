import { UUID } from "crypto";
import IAutoService from "./interfaces/auto.service.interface";

export const buildService = <T, CreateDto, UpdateDto>() => {
  class AutoService implements IAutoService<T, CreateDto, UpdateDto> {
    constructor() {}

    async getAll() {
      return [];
    }

    async getById(id: UUID) {
      return null;
    }

    async create(model: CreateDto) {
      return null;
    }

    async update(id: UUID, model: UpdateDto) {
      return null;
    }

    async delete(id: UUID) {
      return null;
    }

    async softDelete(id: UUID) {
      return null;
    }

    async restore(id: UUID) {
      return null;
    }
  }

  return AutoService;
};
