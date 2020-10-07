import { Router } from "express";

import { ProductService } from "../services";
import { HTTPStatus } from "../types";

const api = Router();

api.get("/", async (req, res, next) => {
  try {
    const id = req.query.id as string;
    const product = await ProductService.get(id);
    if (!product) res.status(HTTPStatus.NoContent);
    res.send(product);
  } catch (e) {
    next(e);
  }
});

api.get("/all/", async (req, res, next) => {
  try {
    const products = await ProductService.getAll();
    res.send(products);
  } catch (e) {
    next(e);
  }
});

api.post("/", async (req, res, next) => {
  try {
    const product = await ProductService.create(req.body);
    res.status(HTTPStatus.Created);
    res.send(product);
  } catch (e) {
    next(e);
  }
});

api.put("/", async (req, res, next) => {
  try {
    const product = await ProductService.update(req.body);
    res.send(product);
  } catch (e) {
    next(e);
  }
});

api.delete("/", async (req, res, next) => {
  try {
    const id = req.query.id as string;
    const product = await ProductService.remove(id);
    res.status(HTTPStatus.Accepted);
    res.send(product);
  } catch (e) {
    next(e);
  }
});

export { api };
