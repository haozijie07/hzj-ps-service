import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {
  async create(req: Request, res: Response) {
    try {
      const { username, password, name, email, createdById, createdByName, createdAt } = req.body;
      const newUser = await prisma.user.create({
        data: {
          username,
          password,
          name,
          email,
          createdById,
          createdByName,
          createdAt,
        },
      });
      return newUser;
    } catch (error: any) {
      res.error(500, error.message);
    }
  }
}

export default new UserService();
