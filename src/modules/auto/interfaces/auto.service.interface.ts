import { UUID } from "crypto";

export default interface IAutoService<T, CreateDto, UpdateDto> {
  getAll: () => Promise<T[]>;
  getById: (id: UUID) => Promise<T | null>;
  create: (model: CreateDto) => Promise<T | null>;
  update: (id: UUID, model: UpdateDto) => Promise<T | null>;
  delete: (id: UUID) => Promise<T | null>;
  softDelete: (id: UUID) => Promise<T | null>;
  restore: (id: UUID) => Promise<T | null>;
}
