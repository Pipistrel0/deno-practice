import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './routes/api.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });

console.log('http://localhost:3000');