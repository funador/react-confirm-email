import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Notifications from 'react-notify-toast'
import 'react-toastify/dist/ReactToastify.css'

import Landing from './components/Landing'
import Confirm from './components/Confirm'
import Spinner from './components/Spinner'
import Footer from './components/Footer/Footer'
import { API_URL } from './config'
import './App.css'

export default class App extends Component {
  
  // A bit of state to make sure the server is up and running
  // before we start allowing the user to interact with the app
  state = {
    loading: true
  }

  // When the component mounts, we make a simple GET request
  // to 'wake up' the server (if it needs it). A lot of free 
  // services like Heroku and Now.sh will put your server to 
  // sleep if no one has used it recently. Using uptimerobot.com
  // to ping your server periodically can help to mitigate this.
  componentDidMount = () => {
    fetch(`${API_URL}/wake-up`)
      .then(res => res.json())
      .then(() => {
        this.setState({ loading: false })
      })
      .catch(err => console.log(err))
  }

  render = () => {
    
    // The 'content' function determines what to show the user 
    // based on whether the server is awake or not.
    const content = () => {
      
      // The server is still asleep, so provide a visual cue
      // with the <Spinner > component to give the user feedback
      if (this.state.loading) {
        return <Spinner size='8x' spinning='spinning' />
      }

      // The server is awake! React Router is used to either show the <Landing > 
      // component where the emails are collected or the <Confirm > component 
      // where the emails are confirmed
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
      // The 'container' class uses flexbox to position and center 
      // its three children <Notifications />, <main> and <Footer /> 
      <div className='container fadein'>
        {/* 
          <Notifications > component from 'react-notify-toast'
          This is the placeholder on the dom that will hold all 
          the feedback toast messages whenever notify.show('My Message!')
          is called
        */}
        <Notifications />
        <main>
          {content()}
        </main>
        {/* 
          Every medium post I write has the same footer. So I have 
          abstracted it out here to use on future posts
        */}
        <Footer
          mediumId={'257e5d9de725'}
          githubRepo={'react-confirm-email'}
        />
      </div>
    )
  }
}