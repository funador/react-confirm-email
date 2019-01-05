import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Notifications from 'react-notify-toast'
import 'react-toastify/dist/ReactToastify.css'

import Landing from './components/Landing'
import Confirm from './components/Confirm'

export default () => 
  <>
    <Notifications />
    <Router>
      <Switch>
        <Route exact path='/confirm/:id' component={Confirm} />
        <Route exact path='/' component={Landing} />
        <Redirect from='*' to='/'/>
      </Switch>
    </Router>
  </>