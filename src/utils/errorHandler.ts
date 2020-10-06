import { NextFunction, Request, Response } from "express";

import { APIError, HTTPStatus } from "../types";

export function errorHandler(err: APIError, req: Request, res: Response, _: NextFunction): void {
  const status = err.status || HTTPStatus.InternalServerError;
  const data = {
    status,
    message: err.message,
  };
  res.status(status).send(data);
}
