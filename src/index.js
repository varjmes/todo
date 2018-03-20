import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./css/index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
)

registerServiceWorker()
