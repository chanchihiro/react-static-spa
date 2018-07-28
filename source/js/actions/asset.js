import { Level } from "constants/plain"
import { ActionsSupport } from "platform/redux-action-support"
import { handleFailure } from "actions/master.js"

export default class AssetActions extends ActionsSupport {
  constructor(dispatch) {
    super(dispatch)
  }

}
