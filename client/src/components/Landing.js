import React, { Component } from 'react'
import { notify } from 'react-notify-toast'
import { API_URL } from '../config'

const toastColor = { 
  background: '#505050', 
  text: '#fff' 
}

export default class Landing extends Component {

  onSubmit = event => {
    event.preventDefault()

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
      // extra arguments needed to notify here to pass an options object?
      notify.show(data.msg)
      // this.email.value = ''
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='app'>
        <header>
          <h1>Simple Email Confirmation</h1>
        </header>
        <main>
          <form onSubmit={this.onSubmit}>
            <label htmlFor='email'>email: </label>
            <input 
              type='email'
              name='email' 
              ref={input => this.email = input} 
              defaultValue='jesse.heaslip@gmail.com'
            />
            <button type='submit'>Confirm</button>
          </form>
        </main>
      </div>
    )
  }
}