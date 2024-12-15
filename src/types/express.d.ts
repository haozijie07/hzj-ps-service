// src/types/express.d.ts
import * as express from "express";

declare global {
  namespace Express {
    export interface Response {
      success<T>(data: T, message?: string, code?: number): void;
      error(code: number, message: string): void;
    }
    export interface Request {
      user: IUser;
    }
  }
}
