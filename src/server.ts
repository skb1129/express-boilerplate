// Initially parse and load environment file
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { mongoDB } from "./database";

mongoDB.connect();

app.listen(process.env.PORT, () => {
  console.log("Server running on port:", process.env.PORT);
});
