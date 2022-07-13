import { getItem, setItem, removeItem } from './storage';

/**
 * @description 获取token
 * @returns {string|ActiveX.IXMLDOMNode|Promise<any>|any|IDBRequest<any>|MediaKeyStatus|FormDataEntryValue|Function|Promise<Credential | null>}
 */
export function getToken() {
  return getItem('user_token');
}

/**
 * @description 存储token
 * @param token
 * @returns {void|*}
 */
export function setToken(token: string) {
  return setItem('user_token', token);
}

/**
 * @description 移除token
 * @returns {void|Promise<void>}
 */
export function removeToken() {
  return removeItem('user_token');
}
