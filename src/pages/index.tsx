import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import AddPage from 'pages/add'
import GroupPage from 'pages/group/index'

const HomePage = () => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/add">add</Link>
          </li>
          <li>
            <Link to="/group">group</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/add">
            <AddPage />
          </Route>
          <Route exact path="/group">
            <GroupPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default HomePage
