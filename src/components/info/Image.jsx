import React from 'react'
import bg from '../../assets/pic1.jpg'

function Image() {
  return (
    <div className='back'>
        <div className="back-img">
            <img className='img-fluid h-100 w-100' src={bg} alt="" />
        </div>
    </div>
  )
}

export default Image