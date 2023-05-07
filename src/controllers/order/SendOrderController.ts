import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";
import { io } from "../../server";

class SendOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const sendOrder = new SendOrderService();
    const order = await sendOrder.execute({ order_id });
    io.emit("new-order", order);

    return res.json(order);
  }
}

export { SendOrderController };
