import morgan from "morgan";
import logger from "./logger.js";

const morganFormat = `{
    "method": ":method",
    "url": ":url",
    "status": ":status",
    "responseTime": ":response-time ms"
}`;

function messageHandler(messasge) {
  logger.info("Request received", JSON.parse(messasge.trim()));
}

export const morganMiddleware = morgan(morganFormat, {
  stream: {
    write: messageHandler,
  },
});
