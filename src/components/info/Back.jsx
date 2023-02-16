import React from 'react'
import profile from '../../assets/acc.jpg'

function Back() {
    return (
        <div className='profile text-light position-relative'>
            <div className="profile-bars bar1 d-flex align-items-center fw-semibold justify-content-end fs-6 pe-5">
                <div className="profile-box justify-content-evenly d-flex">
                    <div className="profile-head">Profile</div>
                    <div className="profile-fr">Friends</div>
                    <div className="profile-albumn">Albumn</div>
                </div>
            </div>
            <div className="profile-bars bar2 d-flex align-items-center justify-content-end fs-4 fw-bold"><div className='text-md-center text-start'>Kgosto Matlhabe</div></div>
            <div className="profile-bars py-3 bar3 d-flex align-items-center fw-semibold justify-content-end fs-6 pe-5 bg-dark">
                <div className="bar-box d-flex justify-content-evenly">
                    <div className="bar">
                        <div className="bar-no">41</div>
                        <div className="bar-text">Profile View</div>
                    </div>
                    <div className="bar">
                        <div className="bar-no">15</div>
                        <div className="bar-text">Profile</div>
                    </div>
                    <div className="bar">
                        <div className="bar-no">online</div>
                        <div className="bar-text">Status</div>
                    </div>
                </div>
            </div>
            <div className="profile-img img-fluid position-absolute">
                <img className='img-fluid rounded-circle ' src={profile} alt="" />
            </div>
        </div>
    )
}

export default Back