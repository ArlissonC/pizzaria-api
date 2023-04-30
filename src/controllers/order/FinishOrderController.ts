import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";
import { io } from "../../websocket";

class FinishOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const finishOrderService = new FinishOrderService();

    const order = await finishOrderService.execute({ order_id });
    io.emit("new-order", "new order");

    res.json(order);
  }
}

export { FinishOrderController };
