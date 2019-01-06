import React, {Component} from 'react'
import { API_URL } from '../config'
import { toast } from 'react-toastify'

export default class Confirm extends Component {
  state = {
    confirming: true
  }

  componentDidMount() {
    const { id } = this.props.match.params

    fetch(`${API_URL}/email/confirm/${id}`)
      .then(res => res.json())
      // going to need to do a bit more here
      .then(data => toast(data.msg))
      .catch(err => console.log(err))
  }

  render() {
    return (
      this.state.confirming ? <div>Spinning</div> : <div>Confirmed</div>
    )
  }
}