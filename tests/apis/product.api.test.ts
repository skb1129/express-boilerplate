import supertest from "supertest";

import app from "../../src/app";
import { mongoDB } from "../../src/database";
import { ProductDocument } from "../../src/models";
import { HTTPStatus } from "../../src/types";

describe("Test API: Product", () => {
  beforeAll(mongoDB.connect);
  afterAll(mongoDB.disconnect);

  const request = supertest(app);
  let product = {
    name: "test name",
    details: "test details",
  } as ProductDocument;

  test("POST /product", async () => {
    const res = await request.post("/product").send(product);
    expect(res.status).toBe(HTTPStatus.Created);
    expect(res.body).toHaveProperty("_id");
    product = res.body;
  });

  test("GET /product", async () => {
    const res = await request.get("/product").query({ id: product._id });
    expect(res.status).toBe(HTTPStatus.OK);
    expect(res.body).toMatchObject(product);
  });

  test("GET /product/all", async () => {
    const res = await request.get("/product/all");
    expect(res.status).toBe(HTTPStatus.OK);
    expect(res.body).toBeInstanceOf(Array);
  });

  test("PUT /product", async () => {
    const name = "new test name";
    const res = await request.put("/product").send({ id: product._id, name });
    expect(res.status).toBe(HTTPStatus.OK);
    expect(res.body.name).toBe(name);
    product = res.body;
  });

  test("DELETE /product", async () => {
    const res = await request.delete("/product").query({ id: product._id });
    expect(res.status).toBe(HTTPStatus.Accepted);
    expect(res.body).toMatchObject(product);
  });
});
