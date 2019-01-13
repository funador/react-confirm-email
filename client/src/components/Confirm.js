import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import Spinner from './Spinner'
import { API_URL } from '../config'

export default class Confirm extends Component {
  
  // A bit of state to give the user feedback while their email
  // address is being confirmed to the User model on the server
  state = {
    confirming: true
  }

  // When the component mounts the mongo id for the user is pulled 
  // from the params in React Router. This id is then sent to the server 
  // to confirm that the user has clicked on the link in the email.
  // The link in the email will look something like this: 
  // http://localhost:3000/confirm/111111111111111111111
  componentDidMount = () => {
    const { id } = this.props.match.params

    fetch(`${API_URL}/email/confirm/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ confirming: false })
        notify.show(data.msg)
      })
      .catch(err => console.log(err))
  }

  // While the email address is being confirm on the server show a spinner that 
  // gives visual feedback that something is happening. Once the email has been 
  // confirmed the spinner is stopped and made into a button that takes the user
  // back to the <Landing > component so they can enter another email if they want
  render = () =>
    <div className='confirm'>
      {this.state.confirming
        ? <Spinner size='8x' spinning={'spinning'} /> 
        : <Link to='/'>
            <Spinner size='8x' spinning={''} /> 
          </Link>
      }
    </div>
}