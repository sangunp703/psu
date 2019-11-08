import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Opening from './opening.js'
import Introduction from './introduction'
import History from './history'
import Work from './work'
import Contact from './contact'

const PSUApp = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/opening' component={Opening} />
        <Route path='/introduction' component={Introduction} />
        <Route path='/history' component={History} />
        <Route path='/work' component={Work} />
        <Route path='/contact' component={Contact} />
        <Route component={Opening} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  <PSUApp />,
  document.getElementById('root')
)