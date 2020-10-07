import { NextFunction, Request, Response } from "express";
import { APIError, HTTPStatus } from "../types";

export function handle404(req: Request, res: Response, next: NextFunction): void {
  if (res.headersSent) {
    next();
    return;
  }
  next(new APIError(HTTPStatus.NotFound, "Route not found or method not supported"));
}
