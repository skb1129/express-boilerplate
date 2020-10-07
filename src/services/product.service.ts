import { Product, ProductDocument } from "../models";
import { APIError, HTTPStatus } from "../types";

export function create({ name, details }: ProductDocument): Promise<ProductDocument> {
  if (!name || !details)
    throw new APIError(HTTPStatus.BadRequest, 'Required parameters "name" or "details" not found.');
  const product = new Product({ name, details });
  return product.save();
}

export async function get(id: string): Promise<ProductDocument | null> {
  if (!id) throw new APIError(HTTPStatus.BadRequest, 'Required parameter "id" not found.');
  return Product.findById(id);
}

export async function getAll(): Promise<ProductDocument[]> {
  return Product.find();
}

export async function update({ id, ...data }: ProductDocument): Promise<ProductDocument> {
  if (!id) throw new APIError(HTTPStatus.BadRequest, 'Required parameter "id" not found.');
  const product = await Product.findByIdAndUpdate(id, data, { new: true, upsert: false });
  if (!product) throw new APIError(HTTPStatus.NotFound, 'The given "id" does not exist in the database');
  return product;
}

export async function remove(id: string): Promise<ProductDocument> {
  if (!id) throw new APIError(HTTPStatus.BadRequest, 'Required parameter "id" not found.');
  const product = await Product.findByIdAndDelete(id);
  if (!product) throw new APIError(HTTPStatus.NotFound, 'The given "id" does not exist in the database');
  return product;
}
