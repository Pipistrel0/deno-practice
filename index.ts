import { Application } from "https://deno.land/x/oak/mod.ts";
import { applyGraphQL } from "https://deno.land/x/oak_graphql/mod.ts";
import { types } from "./src/lib/graphql/types.ts";
import { resolvers } from "./src/lib/graphql/resolvers.ts";
import router from "./src/routes/Product.ts";
import config from "./src/config/config.ts";

const app = new Application();

const GraphQLService = applyGraphQL({
  typeDefs: types,
  resolvers: resolvers,
});

app.use(router.routes(), router.allowedMethods());
app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log("http://localhost:3000/graphql");

const port = Number.parseInt(config.port) as number;

await app.listen({ port });
