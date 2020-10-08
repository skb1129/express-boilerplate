import { createLogger, format, LoggerOptions, transports } from "winston";

const { combine, timestamp, printf } = format;

const formatter = printf(({ level, message, timestamp, ...args }) => {
  const LOG = `${timestamp} | ${level.toUpperCase()} | ${message}`;
  const data = Object.keys(args)
    .map((key) => `${key}: ${args[key]}`)
    .join(" | ");
  if (data) return `${LOG} | ${data}`;
  return LOG;
});

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
