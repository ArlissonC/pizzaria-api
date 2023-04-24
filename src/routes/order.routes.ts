import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateOrderController } from "../controllers/order/CreateOrderController";
import { RemoverOrderController } from "../controllers/order/RemoverOrderController";
import { AddItemController } from "../controllers/order/AddItemController";

const orderRoutes = Router();

orderRoutes.post("/", isAuthenticated, new CreateOrderController().handle);
orderRoutes.delete("/", isAuthenticated, new RemoverOrderController().handle);
orderRoutes.post("/add", isAuthenticated, new AddItemController().handle);

export { orderRoutes };
