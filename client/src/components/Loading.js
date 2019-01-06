import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

export default props =>
  <main className='spinner'>
    <FontAwesomeIcon icon={faSync} size={props.size} />
  </main>