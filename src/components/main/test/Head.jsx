import React from 'react'

function Head(props) {
  return (
    <div className='main-head'>
      <div className='main-heading pt-5 text-light'>
        <div className="heading-head2 d-flex align-items-center justify-content-between mt-3 py-2">
          <div className="head-logo d-flex align-items-center">
            <img className='img-fluid rounded-circle border border-3 mx-2' src={props.src} alt="" />
            <div className="head-name fw-semibold">Kgosto Matlhabe</div>
          </div>
          <div className="head-time me-4">2 DAYS</div>
        </div>
      </div>
    </div>
  )
}

export default Head