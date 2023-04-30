import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes";
import path from "path";
import http from "http";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
});

const server = http.createServer(app);

server.listen(3333, () => console.log("Server rodando na porta 3333"));

export { server };
