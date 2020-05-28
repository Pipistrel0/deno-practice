const USER = encodeURIComponent(config.dbUser as string);
const PASSWORD = encodeURIComponent(config.dbPassword as string);
const mongoUri =
  `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;
import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import config  from "../config/config.ts";

const mongo = new MongoClient();
mongo.connectWithUri(mongoUri);

export const db = mongo.database("test");
