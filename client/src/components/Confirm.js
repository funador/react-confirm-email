import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import Loading from './Loading'
import { API_URL } from '../config'

export default class Confirm extends Component {
  
  state = {
    confirming: true
  }

  componentDidMount() {
    const { id } = this.props.match.params

    fetch(`${API_URL}/email/confirm/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ confirming: false })
        notify.show(data.msg)
      })
      .catch(err => console.log(err))
  }

  render() {
    
    return (
      <div className='flex-column'>
        <h1>
          {this.state.confirming
            ? <Loading size='4x' spinning={'spinning'} /> 
            : <Link to='/'>
                <Loading size='4x' spinning={''} /> 
              </Link>
          }
        </h1>
      </div>
    )
  }
  
}