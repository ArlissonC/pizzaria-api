import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import uploadConfig from "../config/multer";
import multer from "multer";
import { CreateProductController } from "../controllers/product/CreateProductController";
import { ListProductsByCategoryController } from "../controllers/product/ListCategoriesController";

const productRoutes = Router();
const upload = multer(uploadConfig.upload("./tmp"));

productRoutes.post(
  "/",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle,
);

productRoutes.get(
  "/categories",
  isAuthenticated,
  new ListProductsByCategoryController().handle,
);

export { productRoutes };
