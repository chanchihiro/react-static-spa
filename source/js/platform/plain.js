/*----------------------------------
 - plain.js -
 JS全般で利用されるグローバル処理定義
----------------------------------*/

import dateFormat from 'dateformat'

// ## フォーマットユーティリティ
export class Formatter {
  static format(type, value) {
    switch (type) {
      case "day":
        return value ? dateFormat(value, "yyyy/mm/dd") : ""
      case "amount":
        return (value || value === 0) ? value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') : ""
      default:
        return value.toString()
    }
  }
}


// array to object[key: key]
export function keyMirror(arrays) {
  return arrays.reduce((obj, key) => {obj[key] = key; return obj}, {})
}
