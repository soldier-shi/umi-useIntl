import React, { createRef, useEffect } from 'react'
import FancyButton from '../../components/FancyButton'


export default () => {
  const ref = createRef()
  useEffect(() => {
    console.log(ref.current)
  }, [ ref ])

  const click = () => {
    console.log('click event')
  }

  return (
    <FancyButton ref={ref} click={click}>click me!</FancyButton>
  )
}

