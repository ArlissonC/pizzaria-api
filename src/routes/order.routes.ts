import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateOrderController } from "../controllers/order/CreateOrderController";
import { RemoverOrderController } from "../controllers/order/RemoverOrderController";
import { AddItemController } from "../controllers/order/AddItemController";
import { RemoveItemController } from "../controllers/order/RemoveItemController";
import { SendOrderController } from "../controllers/order/SendOrderController";
import { ListOrdersController } from "../controllers/order/ListOrdersController";
import { DetailsOrderController } from "../controllers/order/DetailsOrderController";
import { FinishOrderController } from "../controllers/order/FinishOrderController";

const orderRoutes = Router();

orderRoutes.post("/", isAuthenticated, new CreateOrderController().handle);
orderRoutes.delete("/", isAuthenticated, new RemoverOrderController().handle);
orderRoutes.post("/add", isAuthenticated, new AddItemController().handle);
orderRoutes.delete(
  "/remove",
  isAuthenticated,
  new RemoveItemController().handle,
);
orderRoutes.put("/send", isAuthenticated, new SendOrderController().handle);
orderRoutes.get("/orders", isAuthenticated, new ListOrdersController().handle);
orderRoutes.get(
  "/details",
  isAuthenticated,
  new DetailsOrderController().handle,
);
orderRoutes.put("/finish", isAuthenticated, new FinishOrderController().handle);

export { orderRoutes };
