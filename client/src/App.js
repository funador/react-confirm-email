import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Notifications from 'react-notify-toast'
import 'react-toastify/dist/ReactToastify.css'

import Landing from './components/Landing'
import Confirm from './components/Confirm'
import Footer from './components/Footer'
import './App.css'

export default () => 
  <div className='container'>
    <Notifications />
    <BrowserRouter>
      <Switch>
        <Route exact path='/confirm/:id' component={Confirm} />
        <Route exact path='/' component={Landing} />
        <Redirect from='*' to='/'/>
      </Switch>
    </BrowserRouter>
    <Footer />
  </div>