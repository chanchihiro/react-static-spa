import React from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { Component } from "platform/redux-support"
import { Log } from "platform/plain"
import { Level } from "constants/plain"

import { AppBar, Drawer, IconMenu, IconButton, MenuItem, Tabs, Tab, Snackbar } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { color, styleUiHeader } from "theme"

// ヘッダー
class Header extends Component {
  initState() {
    return {
      globalMenu: false,
    }
  }
  render() {
    const { master } = this.props
    return (
      <div>
        <AppBar title="juken7" showMenuIconButton={false} />
      </div>
    )
  }
}

export default connect(
  Header.mapStateToProps(),
  Header.mapDispatchToProps()
)(Header)
