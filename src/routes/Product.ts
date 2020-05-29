import { Router } from "https://deno.land/x/oak/mod.ts";
import ProductController from "../controllers/ProductController.ts";
import { IProduct } from "../models/Product.ts";
const productController = new ProductController();

const router = new Router();

export default router
  .get(
    "/product/:id",
    async ({ params, response }: { params: { id: string }; response: any }) => {
      if (params && params.id) {
        try {
          const product: IProduct | undefined = await productController
            .getProductById(params.id);
          response.status = 200;
          response.body = {
            success: true,
            data: product,
          };
        } catch (err) {
          response.status = 404;
          response.body = {
            success: false,
            data: "Product not found",
          };
        }
      }
    },
  )
  .get("/products", async ({ response }: { response: any }) => {
    try {
      const products: IProduct[] = await productController.getProducts();
      response.status = 200;
      response.body = {
        success: true,
        data: products,
      };
    } catch (err) {
      response.status = 404;
      response.body = {
        success: false,
        data: "Products not found",
      };
    }
  })
  .post(
    "/product",
    async ({ response, request }: { response: any; request: any }) => {
      try {
        const body: IProduct = await request.body();
        const product: IProduct = await productController.createProduct(
          body,
        );
        response.status = 201;
        response.body = {
          success: true,
          data: product,
        };
      } catch (err) {
        response.status = 404;
        response.body = {
          success: false,
          data: "Products not found",
        };
      }
    },
  )
  .put(
    "/product/:id",
    async (
      { response, params, request }: {
        response: any;
        params: { id: string };
        request: any;
      },
    ) => {
      if (params && params.id) {
        try {
          const body: IProduct = await request.body();
          const upsertedId: string = await productController
            .updateProductById(params.id, body);
          response.status = 201;
          response.body = {
            success: true,
            data: upsertedId,
          };
        } catch (err) {
          response.status = 404;
          response.body = {
            success: false,
            data: "Product not found",
          };
        }
      }
    },
  )
  .delete(
    "/product/:id",
    async ({ params, response }: { params: { id: string }; response: any }) => {
      if (params && params.id) {
        try {
          const deletedId: string | number = await productController
            .deleteProductById(params.id);
          response.status = 200;
          response.body = {
            success: true,
            data: deletedId,
          };
        } catch (err) {
          response.status = 404;
          response.body = {
            success: false,
            data: "Product not found",
          };
        }
      }
    },
  );
