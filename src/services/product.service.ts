import { Product, ProductDocument } from "../models";
import { APIError, HTTPStatus } from "../types";

export function create({ name, details }: ProductDocument): Promise<ProductDocument> {
  if (!name || !details)
    throw new APIError(HTTPStatus.BadRequest, 'Required body parameters "name" or "details" not found.');
  const product = new Product({ name, details });
  return product.save();
}

export async function getAll(): Promise<ProductDocument[]> {
  const products = await Product.find();
  return products;
}
