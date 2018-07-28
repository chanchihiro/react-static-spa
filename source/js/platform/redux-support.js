import { push } from 'react-router-redux'
import { Log } from "platform/plain"
import { Component as ReactSupportComponent } from "platform/react-support"
import MasterActions from "actions/master"

// Redux 向けのコンポーネント拡張です。
// Redux 関連の拡張機能を提供します。
export class Component extends ReactSupportComponent {
  initialize() {
  }
  componentWillMount() {

  }
  dispatch(v) {
    if (this.props.dispatch) {
      this.props.dispatch(v)
    } else {
      Log.warn("props に dispatch の登録がおこなわれていません")
    }
  }
  push(path) {
    this.dispatch(push(path))
  }
  static mapStateToProps(mapper = state => ({})) {
    return state => {
      return Object.assign({
        master: state.reducer.master,
        router: state.router,
      }, mapper(state))
    }
  }
  static mapDispatchToProps(mapper = dispatch => ({})) {
    return dispatch => {
      return Object.assign({
        dispatch: dispatch,
        actionsMaster: new MasterActions(dispatch),
      }, mapper(dispatch))
    }
  }
}