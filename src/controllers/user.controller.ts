import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import userService from "../services/user.service";

const prisma = new PrismaClient();

class UserController {
  async create(req: Request, res: Response) {
    try {
      const newUser = await userService.create(req, res);
      newUser && res.success("用户创建成功", newUser);
    } catch (error: any) {
      res.error(400, error.message);
    }
  }
}

export default new UserController();
