import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateOrderController } from "../controllers/order/CreateOrderController";
import { RemoverOrderController } from "../controllers/order/RemoverOrderController";

const orderRoutes = Router();

orderRoutes.post("/", isAuthenticated, new CreateOrderController().handle);
orderRoutes.delete("/", isAuthenticated, new RemoverOrderController().handle);

export { orderRoutes };
