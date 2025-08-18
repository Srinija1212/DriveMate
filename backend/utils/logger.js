const { createLogger, format, transports } = require("winston");
const config = require("../config/config");

const logger = createLogger({
  level: config.LOG_LEVEL,
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: config.LOG_FILE_PATH }),
  ],
});

module.exports = logger;
