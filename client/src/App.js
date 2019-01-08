import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Notifications from 'react-notify-toast'
import 'react-toastify/dist/ReactToastify.css'

import Landing from './components/Landing'
import Confirm from './components/Confirm'
import Loading from './components/Loading'
import Footer from './components/Footer'
import { API_URL } from './config'
import './App.css'

export default class App extends Component {
  
  state = {
    loading: true
  }

  componentDidMount = () => {
    fetch(`${API_URL}/wake-up`)
      .then(res => res.json())
      .then(() => {
        this.setState({ loading: false })
      })
  }

  render = () => {
    
    const content = () => {
      
      if (this.state.loading) {
        return <Loading size='6x' spinning='spinning' />
      }

      return (
        <BrowserRouter>  
          <Switch>
            <Route exact path='/confirm/:id' component={Confirm} />
            <Route exact path='/' component={Landing} />
            <Redirect from='*' to='/'/>
          </Switch>
        </BrowserRouter>
      )
    }

    return (
      <div className='container fadein'>
        <Notifications />
        <main>
          {content()}
        </main>
        <Footer />
      </div>
    )
  }
}