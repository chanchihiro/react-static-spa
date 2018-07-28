import { Log } from "platform/plain"
import { Level } from "constants/plain.js"
import { ActionsSupport } from "platform/redux-action-support"
import types from "constants/master"

export default class MasterActions extends ActionsSupport {
  constructor(dispatch) {
    super(dispatch)}

  practice() {
  	this.dispatch({type: types.PRACTICE, payload: {}})
  }
}
