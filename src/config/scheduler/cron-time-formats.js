exports.AT_MIDNIGHT = '00 00 00 * * *';
exports.AT_10_MIN = '* 10 * * * *';
exports.YEARLY = '0 0 0 1 0 *';
exports.MONTHLY = '0 0 0 1 * *';
exports.WEEKLY = '0 0 0 * * 0';
exports.DAILY = '0 0 0 * * *';
exports.HOURLY = '0 0 * * * *';
exports.MINUTELY = '0 * * * * *';
exports.SECONDLY = '* * * * * *';
exports.WEEKDAYS = '0 0 0 * * 1-5';
exports.WEEKENDS = '0 0 0 * * 0,6';
exports.EVERY_10_MINUTES = '0 */10 * * * *';
exports.EVERY_30_MINUTES_BTW_9_AND_17 = '0 */30 9-17 * * *';
exports.WORKDAYS_AT_11_30 = '00 30 11 * * 1-5';