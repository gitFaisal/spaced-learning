import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const app: Express = express();

  app.get("/", (_req, res) => res.send("hello worlda"));

  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () =>
    console.log(`The server has started on port: ${PORT}`)
  );
};

main().catch((err) => console.log(err));
