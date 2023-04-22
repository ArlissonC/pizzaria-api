import { Router } from "express";
import { userRoutes } from "./user.routes";
import { categoryRoutes } from "./category.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/category", categoryRoutes);

export { router };
