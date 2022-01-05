import { ProductService } from "../services/product.service";
import { ProductsDetails } from "../interfaces/product.interface";

export class ProductController {
  constructor(private readonly productService: ProductService) {}

  getProducts(): Promise<Array<ProductsDetails | void>> {
    return this.productService.productsList();
  }
}
