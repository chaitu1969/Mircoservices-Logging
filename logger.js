import winston from "winston";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL | "info",
  defaultMeta: {
    service: path.basename(__filename, path.extname(__filename)),
    buildInfo: {
      version: "1.0.0",
      nodeVersion: process.version,
    },
  },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp()
      ),
      filename: "combined.log",
    }),
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp()
      ),
      filename: "Error.log",
      level: "error",
    }),
  ],
});

export default logger;
