import React from 'react'

function Friend(props) {
  return (
    <div className='friend d-flex pt-2 pb-2'>
        <div className="friend-pic mx-2">
            <img src={props.src} alt="" />
        </div>
        <div className="friend-cont">
            <div className="friend-name fw-semibold text-start">Sazokhule Milpha</div>
            <div className="friend-design text-start">Graphic Designer</div>
            <div className="friend-btn text-light fw-semibold p-1 rounded px-2">Add to friends</div>
        </div>
    </div>
  )
}

export default Friend