import { db } from "../lib/mongo.ts";

const Products = db.collection("products");

interface Product {
  _id: string;
  name: string;
  desc: string;
  price: number;
}

export default class ProductController {
  public getProductById = async (id: string): Promise<Product> => {
    const product = await Products.findOne(id);
    // console.log(product);
    return product;
  }
  public getProducts = async() => {
    const product = await Products.find();
  }
  public createProduct = async (body: Product) => {
    const product = await Products.insertOne(body);
  }
  public updateProductById = async (id: string) => {
    const product = await Products.findOne(id);
  }
  public deleteProductById = async (id: string) => {
    const product = await Products.deleteOne(id);
  }
}
