import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from './components/history'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import { Mycontext } from './context'

const RouterComponent = () => {
  return (
    <Mycontext.Consumer>
      {({ user}) => (
        <Router history={history}>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/books' component={() => <p>Books</p>} />
              <Route exact path='/books/:id' component={() => <p>Book</p>} />
              <Route component={() => <p>404</p>} />
            </Switch>
            {user && <Chatbot />}
            <Footer />
          </div>
        </Router>
      )}
    </Mycontext.Consumer>
  )
} 

export default RouterComponent