import { Client } from "pg";
import "dotenv/config";

const { DB_USER, DB_HOST, DB, DB_PASSWORD, DB_PORT, NODE_ENV } = process.env;
const database = new Client(
    NODE_ENV === "test"
        ? {
              user: DB_USER,
              host: DB_HOST,
              database: "tests_products",
              password: DB_PASSWORD,
              port: 5432,
          }
        : {
              user: DB_USER,
              host: DB_HOST,
              database: DB,
              password: DB_PASSWORD,
              port: DB_PORT,
          }
);

const startDatabase = async () => {
    await database.connect();
    console.log("Database connected");
};

export { database, startDatabase };
