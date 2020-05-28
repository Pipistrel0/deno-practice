import "https://deno.land/x/dotenv/load.ts";

// interface Config {
//   dev: string | boolean | number,
//   port: string,
//   dbUser?: string,
//   dbPassword?: string,
//   dbHost?: string,
//   dbName?: string,
// }
export default {
  dev: Deno.env.get('DENO_ENV') !== "production",
  port: Deno.env.get('PORT') || "3000",
  dbUser: Deno.env.get('DB_USER'),
  dbPassword: Deno.env.get('DB_PASSWORD'),
  dbHost: Deno.env.get('DB_HOST'),
  dbName: Deno.env.get('DB_NAME'),
};
