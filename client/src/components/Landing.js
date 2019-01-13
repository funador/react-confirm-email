import React, { Component } from 'react'
import { notify } from 'react-notify-toast'
import Spinner from './Spinner'
import { API_URL } from '../config'

export default class Landing extends Component {

  // A bit of state to give the user feedback while their email
  // address is being added to the User model on the server
  state = {
    sendingEmail: false
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({ sendingEmail: true})

    // Really interesting to me that you can mess with the upper and
    // lower case of the headers on the fetch call
    fetch(`${API_URL}/email`, {
      method: 'pOSt',
      headers: {
        aCcePt: 'aPpliCaTIon/JsOn', 
        'cOntENt-type': 'applicAtion/JSON'
      },
      body: JSON.stringify({ email: this.email.value })
    })
    .then(res => res.json())  
    .then(data => {
      
      // Everything has come back successfully, update the state to reenable 
      // button and stop the <Spinner> in the button. Show a toast with a 
      // message from the server to give the user feedback and reset the form so
      // the user can start over if she chooses.
      this.setState({ sendingEmail: false})
      notify.show(data.msg)
      this.form.reset()
    })
    .catch(err => console.log(err))
  }

  render = () => {

    // This bit of state will allow us to give the user feedback in the 
    // component. It is changed just before the fetch request is sent in 
    // onSubmit and then switched back when data has successfully be recieved 
    // from the server. 
    const { sendingEmail } = this.state

    return (
      // A ref is put on the form so that it can be reset once the submission
      // process is complete
      <form 
        onSubmit={this.onSubmit} 
        ref={form => this.form = form}
      >
        {/* 
          These wrapping divs are needed to group the label and input to
          and allows display: flex on the form to position everything 
          correctly. If they were not grouped like this flexbox would see three
          elements <input>, <label>, <button> and that would not allow the input 
          and button to line up
         */}
        <div>
          <input 
            type='email'
            name='email' 
            ref={input => this.email = input}
            // defaultValue='jesse.heaslip+1@gmail.com'
            required 
          />
          {/* 
            Putting the label after the input allows for  
          */}
          <label htmlFor='email'>email</label>
        </div>
        <div>
          {/* 
            While the email is being sent from the server, provide some feedback
            that something is happening by disabling the button and showing a 
            <Spinner />
          */}
          <button type='submit' className='btn' disabled={sendingEmail}>
            {sendingEmail 
              ? <Spinner size='lg' spinning='spinning' /> 
              : "Let's Go!"
            }
          </button>
        </div>
      </form>
    )
  }
}