import { Document, Schema, model } from "mongoose";

export type ProductDocument = Document & {
  name?: string;
  details?: string;
};

export const ProductSchema = new Schema(
  {
    name: String,
    details: String,
  },
  { versionKey: false }
);

export const Product = model<ProductDocument>("Product", ProductSchema);
