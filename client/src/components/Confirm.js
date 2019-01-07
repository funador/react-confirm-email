import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import Loading from './Loading'
import { API_URL } from '../config'

export default class Confirm extends Component {
  
  state = {
    confirming: true,
  }

  componentDidMount() {
    const { id } = this.props.match.params

    fetch(`${API_URL}/email/confirm/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({confirming: false})
        notify.show(data.msg)
      })
      .catch(err => console.log(err))
  }

  render() {
    const spinning = this.state.confirming ? 'spinning' : ''
    
    return (
      <div className='flex-column'>
        <Loading size='6x' spinning={spinning} /> 
        <h1 className='link'>
          {this.state.confirming
            ? 'Confirming'
            : <Link to='/'>
                Start Over
              </Link>
          }
        </h1>
      </div>
    )
  }
  
}