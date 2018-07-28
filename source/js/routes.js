import React from "react"
import {Route, Switch} from 'react-router-dom';

import Top from "container/top"
import Trade from "container/trade"
import Asset from "container/asset"

export default (
  <Switch>
    <Route exact path="/top" component={Top} />
    <Route exact path="/trade" component={Trade} />
    <Route exact path="/asset" component={Asset} />
    <Route path="/" component={Top} />
  </Switch>
)
