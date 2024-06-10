import React, { forwardRef } from 'react'
import withDimension from './HOC/withDimension'

const Comp1 = (props, ref) => {
  return (
    <div className='comp1' ref={ref}>
        <h1>Component 1</h1>
        <p>Width: {props.width}</p>
        <p>Height: {props.height}</p>
    </div>
  )
}

export default withDimension(forwardRef(Comp1)) 