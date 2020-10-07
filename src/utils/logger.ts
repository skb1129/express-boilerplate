import { createLogger, format, LoggerOptions, transports } from "winston";

const { combine, timestamp, printf } = format;

const formatter = printf(({ level, message, timestamp }) => `${timestamp} ${level.toUpperCase()}: ${message}`);

const options: LoggerOptions = {
  level: process.env.NODE_ENV === "production" ? "error" : "debug",
  format: combine(timestamp(), formatter),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/application.log" }),
  ],
};

const logger = createLogger(options);

export { logger };
