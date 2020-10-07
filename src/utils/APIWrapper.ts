import { NextFunction, Request, Response } from "express";

export type APICallback = (req: Request, res: Response) => Promise<void>;

export function APIWrapper(callback: APICallback) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await callback(req, res);
      next();
    } catch (e) {
      next(e);
    }
  };
}
