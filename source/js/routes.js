import React from "react"
import {Route, Switch} from 'react-router-dom';

import Top from "container/top"

export default (
  <Switch>
    <Route exact path="/top" component={Top} />
    <Route path="/" component={Top} />
  </Switch>
)
