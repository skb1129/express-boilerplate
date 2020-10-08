import express from "express";
import bodyParser from "body-parser";

import { product } from "./apis";
import { errorHandler, handle404, requestLogger } from "./middlewares";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/product", product);

app.use("*", handle404);

app.use(errorHandler);
app.use(requestLogger);

export default app;
