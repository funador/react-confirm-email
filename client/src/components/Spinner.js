import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

// 9 lines of awesome Reactiness!!!
export default props =>
  <div className={`fadeIn ${props.spinning}`}>
    <FontAwesomeIcon icon={faSync} size={props.size} />
  </div>  