import { push } from 'react-router-redux'
import types from "constants/master"

// Actions の基底クラスです。
// 共通処理の他、各 Action 処理から dispatch への簡易なアクセス手段を提供します。
export class ActionsSupport {
  constructor(dispatch) {
    this.dispatch = dispatch
  }
  dispatch(v) {
    this.dispatch(v)
  }
  push(path) {
    this.dispatch(push(path))
  }
}
