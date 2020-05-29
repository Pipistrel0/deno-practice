import ProductController from "../../controllers/ProductController.ts";
import { IProduct } from "./../../models/Product.ts";

const productController = new ProductController();

export const resolvers = {
  Query: {
    getProducts: async (): Promise<IProduct[]> => {
      const products: IProduct[] = await productController.getProducts();
      return products;
    },
    getProductById: async (
      parent: any,
      { _id }: { _id: string },
    ): Promise<IProduct> => {
      const product: IProduct = await productController.getProductById(_id);
      return product;
    },
  },
  Mutation: {
    createProduct: async (
      parent: any,
      { data }: { data: IProduct },
    ): Promise<IProduct> => {
      const productId: IProduct = await productController.createProduct(data);
      return productId;
    },
    updateProductById: async (
      parent: any,
      { _id, data }: { _id: string; data: IProduct },
    ): Promise<any> => {
      const upsertedId: string = await productController.updateProductById(
        _id,
        data,
      );
      return upsertedId;
    },
    deleteProductById: async (
      parent: any,
      { _id }: { _id: string },
    ): Promise<string | number> => {
      const deltedId: string | number = await productController
        .deleteProductById(_id);
      return deltedId;
    },
  },
};
