import React, { forwardRef } from 'react'

const FancyButton  = forwardRef((props:any, ref:any) => {
  return (
    <div style={{ width: '900px', margin: '20px auto 0 auto' }}>
      <button ref={ref}  className="FancyButton" onClick={props.click}>
        {props.children}
      </button>
    </div>
  )
})

export default FancyButton
