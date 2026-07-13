import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

interface SpinnerProps {
  size: SizeProp
  spinning: string
}

const Spinner = (props: SpinnerProps) =>
  <div className={`fadeIn ${props.spinning}`}>
    <FontAwesomeIcon icon={faSync} size={props.size} />
  </div>

export default Spinner