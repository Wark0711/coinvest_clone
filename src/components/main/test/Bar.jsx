import React from 'react'

function Bar(props) {
  return (
    <div className='test-bar'>
        <div className="bar-data text-start mx-auto ps-3 py-1">Test{props.index}</div>
        <div className="bar-boxes mx-auto"></div>
    </div>
  )
}

export default Bar