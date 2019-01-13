import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMediumM, faGithub  } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export default props => 
  <footer>
    <a 
      href={`https://medium.com/p/${props.mediumId}`}
      title='Medium Article'
      className={'small-button medium'}
    >
      <FontAwesomeIcon icon={faMediumM} size='3x' color='#fff' />
    </a>
    <a 
      href={`https://github.com/funador/${props.githubRepo}`}
      title='Github repo'
      className={'small-button github'}
    >
      <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />
    </a>
  </footer>