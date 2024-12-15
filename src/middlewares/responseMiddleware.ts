import { Response, Request, NextFunction } from "express";

// 中间件：封装响应方法
const responseMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.success = function <T>(message: string, data: T) {
    this.status(200).json({
      code: 200,
      data,
      message,
    });
  };

  res.error = function (code: number, message: string) {
    this.status(200).json({
      code,
      data: {},
      message,
    });
  };

  next();
};

export default responseMiddleware;
