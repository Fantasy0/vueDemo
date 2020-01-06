/**
 * 常规name正则
 * @type {RegExp}
 */
export const COMMON_NAME_REGEXP = /^[^&=~‘’！·|^/<>%!+*\\.'`]*$/;


/**
 * 常规URL
 * @type {RegExp}
 */
export const COMMON_URL_REGEXP = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/i;


/**
 * 邮箱地址
 * @type {RegExp}
 */
export const EMAIL_ADDRESS_REGEXP = /^([A-Za-z0-9]+[A-Za-z0-9_\-.]*[A-Za-z0-9]+|[A-Za-z0-9]+)@(?:[A-Za-z0-9_-]+\.)+[A-Za-z0-9_-]+$/;
