import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/DetailUserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);
userRoutes.post("/session", new AuthUserController().handle);
userRoutes.get("/me", isAuthenticated, new DetailUserController().handle);

export { userRoutes };
