import winston from "winston";
import LogstashTransport from "winston-logstash/lib/winston-logstash-latest.js";

const serviceName = "logstash-transport-example";

const logstashTransport = new LogstashTransport({
  host: "localhost",
  port: 5000,
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: {
    service: serviceName,
    buildInfo: {
      nodeVersion: process.version,
    },
  },
  transports: [logstashTransport],
});

logger.info("Info from the logstash");
logger.error("Error from the logstash");

setTimeout(() => {
  logger.close();
  console.log("Sent log from logstash");
}, 1000);
