import { Router } from "https://deno.land/x/oak/mod.ts";
import ProductController  from "../controllers/api.ts";
const productController = new ProductController();

const router = new Router();

interface Product {
  _id: string;
  name: string;
  desc: string;
  price: number;
}

export default router
  .get("/product/:id", async ({params, response}: {params: {id: string}, response: any}) => {
    if(params && params.id){
      try {
        const product: Product | undefined = await productController.getProductById(params.id);
        response.status = 200;
        response.body = {
          success: true,
          data: product
        }
      } catch (err) {
        response.status = 404;
        response.body = {
          success: false,
          data: "Product not found"
        }
      }
    }
  });
  // .get("/products", getProducts)
  // .post("/product", createProduct)
  // .put("/product/:id", updateProductById)
  // .delete("/product/:id", deleteProductById);
