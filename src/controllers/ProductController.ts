import { db } from "../lib/mongo.ts";
import { IProduct } from "../models/Product.ts";

const Products = db.collection("products");

export default class ProductController {
  public getProductById = async (id: string): Promise<any> => {
    const product: IProduct = await Products.findOne(
      { _id: { $oid: id } }, 
    );
    return product;
  };
  public getProducts = async (): Promise<IProduct[]> => {
    const products: IProduct[] = await Products.find();
    return products || [];
  };
  public createProduct = async (body: IProduct): Promise<IProduct> => {
    const product: IProduct = await Products.insertOne(body);
    return product;
  };
  public updateProductById = async (
    id: string,
    body: IProduct,
  ): Promise<any> => {
    const upsertedId: any = await Products.updateOne(
      ({ _id: { $oid: id } }),
      { $set: {value: body} },
    );
    return upsertedId;
  };
  public deleteProductById = async (id: string): Promise<string | number> => {
    const deletedId: string | number = await Products.deleteOne(
      { _id: { $oid: id } },
    );
    return deletedId;
  };
}
