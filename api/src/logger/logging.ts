// eslint-disable-next-line @typescript-eslint/no-var-requires

const { createLogger, transports ,format} = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.json(),
    format.timestamp()
),
  transports: [
    new transports.File({ filename: 'logs/application.log', level: 'debug' })
  ]
});
module.exports = logger
