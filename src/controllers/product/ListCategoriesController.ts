import { Request, Response } from "express";
import { ListProductsByCategoryService } from "../../services/product/ListProductsByCategoryService";

class ListProductsByCategoryController {
  async handle(req: Request, res: Response) {
    const listProductsByCategory = new ListProductsByCategoryService();

    const category_id = req.query.category_id as string;

    const products = await listProductsByCategory.execute({ category_id });

    return res.json(products);
  }
}

export { ListProductsByCategoryController };
