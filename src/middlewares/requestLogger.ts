import { NextFunction, Request, Response } from "express";

import { logger } from "../utils";

export function requestLogger(req: Request, res: Response, next: NextFunction): void {
  logger.info(`METHOD=${req.method} API=${req.originalUrl} STATUS=${res.statusCode}`);
  next();
}
