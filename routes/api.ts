import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getProduct,
  getProducts,
  createProduct,
  updateProductById,
  deleteProductById,
} from "../controllers/api.ts";

const router = new Router();

export default router
  .get("/product/:id", getProduct)
  .get("products/", getProducts)
  .post("/product", createProduct)
  .put("/product/:id", updateProductById)
  .delete("/product/:id", deleteProductById);
