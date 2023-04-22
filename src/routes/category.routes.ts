import { Router } from "express";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { ListCategoriesController } from "../controllers/category/ListCategoriesController";

const categoryRoutes = Router();

categoryRoutes.post(
  "/",
  isAuthenticated,
  new CreateCategoryController().handle,
);

categoryRoutes.get("/", isAuthenticated, new ListCategoriesController().handle);

export { categoryRoutes };
