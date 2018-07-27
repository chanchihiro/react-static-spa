import React from "react"
import { connect } from "react-redux"
import { Component } from "platform/redux-support"
import { Paper } from "material-ui"
import { styleUi } from "theme"

class Top extends Component {
  render() {
    return (
      <Paper style={styleUi.paper} zDepth={0}>
        <div>やるぞ〜〜〜！！！</div>
      </Paper>
    )
  }
}
export default connect(
  Top.mapStateToProps(),
  Top.mapDispatchToProps()
)(Top)