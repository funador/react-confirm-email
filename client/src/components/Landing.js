import React, { Component } from 'react'
import { notify } from 'react-notify-toast'
import Loading from './Loading'
import { API_URL } from '../config'

const toastColor = { 
  background: '#505050', 
  text: '#fff' 
}

export default class Landing extends Component {

  state = {
    loading: true,
    sendingEmail: true
  }

  componentDidMount() {
    fetch(`${API_URL}/wake-up`)
      .then(res => res.json())
      .then(ok => {
        this.setState({ loading: false })
      })
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({ sendingEmail: true})

    fetch(`${API_URL}/email`, {
      method: 'pOSt',
      headers: {
        'aCcePt': 'aPpliCaTIon/JsOn', 
        'cOntENt-type': 'application/json'
      },
      body: JSON.stringify({ email: this.email.value })
    })
    .then(res => res.json())  
    .then(data => {
      this.setState({ sendingEmail: false})
      // extra arguments needed to notify here to pass an options object?
      notify.show(data.msg)
      // this.email.value = ''
    })
    .catch(err => console.log(err))
  }

  render() {
    
    if(this.state.loading) {
      return <Loading size='6x' />
    }

    return (
      <main className='card'>
        <form onSubmit={this.onSubmit}>
          <label htmlFor='email'>email: </label>
          <br />
          <input 
            type='email'
            name='email' 
            ref={input => this.email = input} 
            defaultValue='jesse.heaslip@gmail.com'
          />
          <button type='submit'>Confirm</button>
        </form>
        {this.state.sendingEmail ? <Loading size='2x' /> : ''}
      </main>
    )
  }
}