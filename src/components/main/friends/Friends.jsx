import React from 'react'
import Friend from './Friend'
import './Friends.css'
import pic1 from '../../../assets/pers1.jpg'
import pic2 from '../../../assets/pers2.jpg'
import pic3 from '../../../assets/pers3.jpg'
import pic4 from '../../../assets/pers4.jpg'
import pic5 from '../../../assets/pers5.jpg'

function Friends() {
    return (
        <div className='main-friends mt-5'>
            <div className="info-bar-head d-flex align-items-center justify-content-start text-light fw-bold fs-5">
                <div className="info-bar-logo px-1 d-flex align-items-center">
                    <svg width="30" height="41" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_16_155)">
                            <path d="M15 10.2358C13.6193 10.2358 12.5 8.70819 12.5 6.82384C12.5 4.93949 13.6193 3.41193 15 3.41193C16.3807 3.41193 17.5 4.93949 17.5 6.82384C17.5 8.70819 16.3807 10.2358 15 10.2358Z" fill="white" />
                            <path d="M10.1375 13.8353C10.625 13.17 11.4625 11.9417 13.0875 11.9417C13.35 11.9417 14.8625 11.9417 16.2625 11.9417C19.7 11.9247 22.5 8.10332 22.5 3.41193H25C25 8.80276 22.3625 13.3747 18.75 14.8589V37.5311H16.25V27.2954H13.75V37.5311H11.25V17.1449L6.3125 23.8834L4.55 21.478L10.1375 13.8353Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_16_155">
                                <rect width="30" height="40.9431" fill="white" transform="matrix(-1 0 0 1 30 0)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg className='position-relative boy' width="30" height="41" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_16_148)">
                            <path d="M15 10.2358C16.3807 10.2358 17.5 8.70819 17.5 6.82384C17.5 4.93949 16.3807 3.41193 15 3.41193C13.6193 3.41193 12.5 4.93949 12.5 6.82384C12.5 8.70819 13.6193 10.2358 15 10.2358Z" fill="white" />
                            <path d="M19.8625 13.8353C19.375 13.17 18.5375 11.9417 16.9125 11.9417C16.65 11.9417 15.1375 11.9417 13.7375 11.9417C10.3 11.9247 7.5 8.10332 7.5 3.41193H5C5 8.80276 7.6375 13.3747 11.25 14.8589V37.5311H13.75V27.2954H16.25V37.5311H18.75V17.1449L23.6875 23.8834L25.45 21.478L19.8625 13.8353Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_16_148">
                                <rect width="30" height="40.9431" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="info-bar-text py-2 px-1"><div>FRIENDS</div></div>
            </div>
            <div className="main-friends-data pb-4">
                <Friend src={pic1} />
                <Friend src={pic2} />
                <Friend src={pic3} />
                <Friend src={pic4} />
                <Friend src={pic5} />
            </div>
        </div>
    )
}

export default Friends