import { Router } from "express";
import { userRoutes } from "./user.routes";
import { categoryRoutes } from "./category.routes";
import { productRoutes } from "./product.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);

export { router };
