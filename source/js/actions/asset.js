import { Level } from "constants/plain"
import { ActionsSupport } from "platform/redux-action-support"
import api from "api/asset.js"
import { handleFailure } from "actions/master.js"
import types from "constants/asset"

export default class AssetActions extends ActionsSupport {
  constructor(dispatch) {
    super(dispatch)
  }

}
