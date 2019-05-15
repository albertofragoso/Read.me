import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from './components/history'
import Home from './components/Home'
import Navbar from './components/Navbar';


const RouterComponent = () => (
  <Router history={history}>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user' component={() => <p>User</p>} />
        <Route exact path='/books' component={() => <p>Books</p>} />
        <Route exact path='/books/:id' component={() => <p>Book</p>} />
        <Route component={() => <p>404</p>} />
      </Switch>
    </div>
  </Router>
)

export default RouterComponent