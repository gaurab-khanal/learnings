import React, { forwardRef } from 'react'
import withDimension from './HOC/withDimension'

const Com2 = (props, ref) => {
  return (
    <div ref={ref} className='comp2'>
        <h1>Component 2</h1>
        <p>Width: {props.width}</p>
        <p>Height: {props.height}</p>
    </div>
  )
}

export default withDimension(forwardRef(Com2))