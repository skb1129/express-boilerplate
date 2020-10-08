import mongoose from "mongoose";

const options: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

export function connect(): void {
  if (!process.env.MONGODB_URI) {
    console.error("No mongo connection string. Set MONGODB_URI environment.");
    process.exit(1);
  }

  mongoose.connect(process.env.MONGODB_URI, options).catch((e) => {
    console.error("MongoDB connection error. Please make sure MongoDB is running.", e);
    process.exit(1);
  });
}

export function disconnect(callback: () => void): void {
  mongoose.disconnect(callback);
}
