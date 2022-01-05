import { ProductsDetails } from "../interfaces/product.interface";
import axios from "axios";

export class ProductService {
  productsList(): Promise<Array<ProductsDetails| void>> {
    return axios
      .get("https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e")
      .then((res) => {
        const prods = res.data.products.map((item: ProductsDetails) => {
          const { id, title, price, currencyId, image } = item;

          return { id, title, price, currencyId, image };
        });

        return prods;
      });
  }
}
