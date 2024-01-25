import { AppDataSource } from "../../infra/db/source.db";
import IAutoRepository from "./interfaces/auto.repository.interface";
import { FindOptionsWhere, ObjectLiteral, Repository } from "typeorm";

export function buildRepository<T extends ObjectLiteral>(entity: any): any {
  class AutoRepository implements IAutoRepository<T> {
    private repository: Repository<T>;
    constructor() {
      this.repository = AppDataSource.getRepository(entity);
    }

    async findAll(take = 100, skip = 0): Promise<{ data: T[]; count: number }> {
      const [data, count] = await this.repository.findAndCount({ take, skip });
      return { data, count };
    }

    async findOneById(id: string): Promise<T> {
      const entity = await this.repository.findOneBy(<any>{ id });

      if (!entity) {
        throw new Error(`Record with ID ${id} not found`);
      }

      return entity;
    }

    async findOneBy(entity: Partial<T>) {
      return await this.repository.findOne({
        where: <FindOptionsWhere<T>>entity,
      });
    }

    async findBy(entity: Partial<T>) {
      return await this.repository.findBy(<FindOptionsWhere<T>>entity);
    }

    async create(model: T): Promise<T> {
      return await this.repository.save(model);
    }

    async update(id: string, updateDto: Partial<T>): Promise<T> {
      const entity = await this.findOneById(id);
      await this.repository.save({ ...entity, ...updateDto });
      return entity;
    }

    async delete(id: string): Promise<T> {
      const entity = await this.findOneById(id);
      return await this.repository.remove(entity);
    }

    async softDelete(id: string): Promise<void> {
      await this.repository.softDelete(id);
    }

    async restore(id: string): Promise<void> {
      await this.repository.restore(id);
    }
  }

  return AutoRepository;
}
