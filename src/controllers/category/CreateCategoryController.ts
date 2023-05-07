import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const createCategoryService = new CreateCategoryService();
    const { name } = req.body;

    const category = await createCategoryService.execute({ name });

    return res.json({ message: "Categoria cadastrada com sucesso!" });
  }
}

export { CreateCategoryController };
