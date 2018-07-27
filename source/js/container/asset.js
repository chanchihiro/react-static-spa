import React from "react"
import { connect } from "react-redux"
import { Component } from "platform/redux-support"
import AssetActions from "actions/asset"
import {
  Paper, TextField, RaisedButton,
  Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn,
} from "material-ui"
import { styleUi, styleUiAsset } from "theme"

class Asset extends Component {
  initState() {
  }
  render() {
    return (
      <div>
        <Paper style={styleUiAsset.main} zDepth={1}>
          <p>うんこ</p>
        </Paper>
      </div>
    )
  }
}
export default connect(
  Asset.mapStateToProps(),
  Asset.mapDispatchToProps()
)(Asset)
