import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/api.ts";
import config  from "./config/config.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("http://localhost:3000");

const port = Number.parseInt(config.port) as number;
await app.listen({ port});
// deno run --allow-net --allow-read --unstable --allow-plugin --allow-env --allow-write ./index.ts