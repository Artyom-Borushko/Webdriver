const winston = require('winston');

const logger = winston.createLogger({
	level: 'debug',
	transports: [
		new winston.transports.File({ filename: 'loggerOutput.log', level: 'debug' }),
	],
	format: winston.format.simple(),
});

module.exports = {
	logger,
};