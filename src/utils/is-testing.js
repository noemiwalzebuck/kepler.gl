

const isNode =
typeof process === 'object' &&
String(process) === '[object process]' &&
!process.browser;

const isTesting = isNode && process.env && process.env.NODE_ENV === 'test';

export default isTesting
