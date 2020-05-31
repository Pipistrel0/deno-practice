import ProductController from "../../controllers/ProductController.ts";
import { IProduct } from "./../../models/Product.ts";

const productController = new ProductController();

export const resolvers = {
  Query: {
    getProducts: async (): Promise<IProduct[]> => {
      const queriedProducts: any[] = await productController.getProducts();
      let products: IProduct[] = [];
      queriedProducts.forEach((p) => {
        let product: IProduct = {
          _id: p._id.$oid,
          name: p.value.name,
          desc: p.value.desc,
          price: p.value.price,
        };
        products.push(product);
      });
      return products;
    },
    getProductById: async (
      parent: any,
      { _id }: { _id: string },
    ): Promise<IProduct> => {
      const queriedProduct: any = await productController.getProductById(_id);
      let product: IProduct = {
        _id: queriedProduct._id.$oid,
        name: queriedProduct.value.name,
        desc: queriedProduct.value.desc,
        price: queriedProduct.value.price,
      };
      return product;
    },
  },
  Mutation: {
    createProduct: async (
      parent: any,
      { input }: { input: IProduct },
    ): Promise<any> => {
      // console.log(input);
      const productId: any = await productController.createProduct(input);
      return productId.$oid;
    },
    updateProductById: async (
      parent: any,
      { _id, input }: { _id: string; input: IProduct },
    ): Promise<boolean> => {
      const upsertedId: any = await productController.updateProductById(
        _id,
        input,
      );
      if (upsertedId) {
        return upsertedId.matchedCount >= 1 && upsertedId.modifiedCount >= 1
          ? true
          : false;
      }
      return false;
    },
    deleteProductById: async (
      parent: any,
      { _id }: { _id: string },
    ): Promise<boolean> => {
      const deletedId: any = await productController
        .deleteProductById(_id);
      if (deletedId) {
        return true;
      }
      return false;
    },
  },
};
