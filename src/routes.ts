import { Router, Request, Response } from "express";

const router = Router();

router.get("/teste", (req, res) => {
  throw new Error("Erro ao fazer essa requisição");
});

export { router };
