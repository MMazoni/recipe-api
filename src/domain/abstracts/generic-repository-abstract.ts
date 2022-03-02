export abstract class IGenericRepository<T> {
  abstract setModel(model: string);

  abstract getAll(): Promise<T[]>;

  abstract get(id: string): Promise<T>;

  abstract create(item: T): Promise<T>;

  abstract update(id: string, item: T);
}
