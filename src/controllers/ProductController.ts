import { ILike, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Product } from "../entity/Product";

export class ProductController {
  private _repo: Repository<Product>;

  constructor() {
    this._repo = AppDataSource.getRepository(Product);
  }

  async save(product: Product) {
    const savedProduct = await this._repo.save(product);
    return savedProduct;
  }

  findById(id: number) {
    return this._repo.findOneBy({
      id,
    });
  }

  index(params: { description?: string } = { description: "" }) {
    return this._repo.find({
      where: {
        description: ILike(`%${params.description}%`),
      },
    });
  }
}
