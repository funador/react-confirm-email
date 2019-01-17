import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMediumM, faGithub  } from '@fortawesome/free-brands-svg-icons'
import { Footer, Button, Svg } from './Footer-Styles'

export default props => 
  <Footer>
    <Button 
      href={`https://medium.com/p/${props.mediumId}`}
      title='Medium Article'
      provider='medium'
    >
      <Svg>
        <FontAwesomeIcon icon={faMediumM} size='3x' color='#fff' />
      </Svg>
    </Button>
    <Button 
      href={`https://github.com/funador/${props.githubRepo}`}
      title='Github repo'
      provider='github'
    >
      <Svg>
        <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />
      </Svg>
    </Button>
  </Footer>