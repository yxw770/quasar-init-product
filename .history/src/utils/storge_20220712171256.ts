import { storage, tokenTableName } from '@/config.ts';
import { Cookies, LocalStorage, SessionStorage } from 'quasar';
/**
 * @description 移除記錄
 * @returns {void|Promise<void>}
 */
export function removeItem(tableName: string) {
  if (storage) {
    if ('LocalStorage' === storage) {
      return LocalStorage.remove(tokenTableName + '_' + tableName);
    } else if ('SessionStorage ' === storage) {
      return SessionStorage.remove(tokenTableName + '_' + tableName);
    } else if ('cookie' === storage) {
      return Cookies.remove(tokenTableName + '_' + tableName);
    } else {
      return LocalStorage.remove(tokenTableName + '_' + tableName);
    }
  } else {
    return LocalStorage.remove(tokenTableName + '_' + tableName);
  }
}
/**
 * @description 获取項目
 * @returns {string|ActiveX.IXMLDOMNode|Promise<any>|any|IDBRequest<any>|MediaKeyStatus|FormDataEntryValue|Function|Promise<Credential | null>}
 */
export function getItem(tableName: string) {
  // console.log(LocalStorage.getItem(tokenTableName), "storage");
  if (storage) {
    if ('LocalStorage' === storage) {
      return LocalStorage.getItem(tokenTableName + '_' + tableName);
    } else if ('SessionStorage ' === storage) {
      return SessionStorage.getItem(tokenTableName + '_' + tableName);
    } else if ('cookie' === storage) {
      return Cookies.get(tokenTableName + '_' + tableName);
    } else {
      return LocalStorage.getItem(tokenTableName + '_' + tableName);
    }
  } else {
    return LocalStorage.getItem(tokenTableName + '_' + tableName);
  }
}

/**
 * @description 存储項目
 * @param value
 * @returns {void|*}
 */
export function setItem(tableName: string, value: any) {
  if (storage) {
    if ('LocalStorage' === storage) {
      return LocalStorage.set(tokenTableName + '_' + tableName, value);
    } else if ('SessionStorage ' === storage) {
      return SessionStorage.set(tokenTableName + '_' + tableName, value);
    } else if ('cookie' === storage) {
      return Cookies.set(tokenTableName + '_' + tableName, value);
    } else {
      return LocalStorage.set(tokenTableName + '_' + tableName, value);
    }
  } else {
    return LocalStorage.set(tokenTableName + '_' + tableName, value);
  }
}
