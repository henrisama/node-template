export default interface IAutoRepository<T> {
  findAll(paginationDto: any): Promise<{ data: T[]; count: number }>;
  findOneById(id: string): Promise<T>;
  create(createDto: T): Promise<T>;
  update(id: string, updateDto: Partial<T>): Promise<T>;
  delete(id: string): Promise<T>;
  softDelete(id: string): Promise<void>;
  restore(id: string): Promise<void>;
}
