import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./src/routes/Product.ts";
import config from "./src/config/config.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("http://localhost:3000");

const port = Number.parseInt(config.port) as number;

await app.listen({ port });
