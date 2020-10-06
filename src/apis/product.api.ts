import { Router } from "express";

import { ProductService } from "../services";

const api = Router();

api.get("/", async (req, res) => {
  const products = await ProductService.getAll();
  res.send(products);
});

api.post("/", async (req, res, next) => {
  try {
    const product = await ProductService.create(req.body);
    res.send(product);
  } catch (e) {
    next(e);
  }
});

export { api };
