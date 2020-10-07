import { Router } from "express";

import { ProductService } from "../services";
import { HTTPStatus } from "../types";
import { APIWrapper } from "../utils";

const api = Router();

api.get(
  "/",
  APIWrapper(async (req, res) => {
    const id = req.query.id as string;
    const product = await ProductService.get(id);
    if (!product) res.status(HTTPStatus.NoContent);
    res.send(product);
  })
);

api.get(
  "/all/",
  APIWrapper(async (req, res) => {
    const products = await ProductService.getAll();
    res.send(products);
  })
);

api.post(
  "/",
  APIWrapper(async (req, res) => {
    const product = await ProductService.create(req.body);
    res.status(HTTPStatus.Created);
    res.send(product);
  })
);

api.put(
  "/",
  APIWrapper(async (req, res) => {
    const product = await ProductService.update(req.body);
    res.send(product);
  })
);

api.delete(
  "/",
  APIWrapper(async (req, res) => {
    const id = req.query.id as string;
    const product = await ProductService.remove(id);
    res.status(HTTPStatus.Accepted);
    res.send(product);
  })
);

export { api };
