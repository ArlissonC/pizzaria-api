import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoverOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;
    const removeOrderService = new RemoveOrderService();

    const deletedOrder = await removeOrderService.execute({ order_id });

    return res.json(deletedOrder);
  }
}

export { RemoverOrderController };
