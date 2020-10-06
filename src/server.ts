// Initially parse and load environment file
import dotenv from "dotenv";
dotenv.config();

import app from "./app";

app.listen(process.env.PORT, () => {
  console.log("Server running on port:", process.env.PORT);
});
