import { NextFunction, Request, Response } from "express";

import { logger } from "../utils";
import { HTTPStatus } from "../types";

export function requestLogger(req: Request, res: Response, next: NextFunction): void {
  const LOG = `METHOD=${req.method} API=${req.originalUrl} STATUS=${res.statusCode}`;
  if (res.statusCode === HTTPStatus.InternalServerError) {
    logger.error(LOG);
  } else if (res.statusCode >= HTTPStatus.BadRequest) {
    logger.warn(LOG);
  } else {
    logger.info(LOG);
  }
  next();
}
