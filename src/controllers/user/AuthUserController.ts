import { AuthUserService } from "../../services/user/AuthUserService";
import { Request, Response } from "express";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserService = new AuthUserService();

    const user = await authUserService.execute({ email, password });

    return res.json(user);
  }
}

export { AuthUserController };
