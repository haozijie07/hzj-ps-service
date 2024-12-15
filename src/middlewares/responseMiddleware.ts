import { Response, Request, NextFunction } from "express";

// 中间件：封装响应方法
const responseMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.success = function <T>(data: T, message: string, code: number = 200) {
    this.status(200).json({
      code,
      data,
      message,
    });
  };

  res.error = function (code: number, message: string) {
    this.status(500).json({
      code,
      data: {},
      message,
    });
  };

  next();
};

export default responseMiddleware;
