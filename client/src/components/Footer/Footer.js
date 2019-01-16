import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMediumM, faGithub  } from '@fortawesome/free-brands-svg-icons'
import { Footer, SmallButton } from './Footer-Styles'

export default props => 
  <Footer>
    <SmallButton 
      href={`https://medium.com/p/${props.mediumId}`}
      title='Medium Article'
      provider='medium'
    >
      <FontAwesomeIcon icon={faMediumM} size='3x' color='#fff' />
    </SmallButton>
    <SmallButton 
      href={`https://github.com/funador/${props.githubRepo}`}
      title='Github repo'
      provider='github'
    >
      <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />
    </SmallButton>
  </Footer>