import React from 'react'

function Images() {
    return (
        <div className='main-images mt-5'>
            <div className="main-images-head d-flex align-items-center justify-content-start text-light fw-bold fs-5 py-2 px-2">
                <div className="images-head-logo d-flex align-items-center ps-2">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_16_51)">
                            <path d="M0 0H30V30H0V0Z" fill="black" />
                            <path d="M22.2227 11.666L22.5 11.8509L22.7773 11.666L25.75 9.68426V9.73241L22.5 11.8991L19.25 9.73241V9.68426L22.2227 11.666ZM29.4875 23.7496V23.75C29.4875 24.8521 28.5956 25.75 27.5 25.75H2.5C1.40114 25.75 0.5 24.8489 0.5 23.75V6.25C0.5 5.15114 1.40114 4.25 2.5 4.25H27.5C28.5987 4.25 29.4998 5.15095 29.5 6.24964C29.5 6.24976 29.5 6.24988 29.5 6.25L29.4875 23.7496ZM17.5 23H18V22.5V21.25C18 20.4432 17.5934 19.766 17.0233 19.2266C16.4558 18.6896 15.693 18.255 14.8811 17.914C13.2593 17.2328 11.3186 16.875 10 16.875C8.68138 16.875 6.74069 17.2328 5.11888 17.914C4.30701 18.255 3.54424 18.6896 2.97667 19.2266C2.40664 19.766 2 20.4432 2 21.25V22.5V23H2.5H17.5ZM27.5 15.5H28V15V7.5V7H27.5H17.5H17V7.5V15V15.5H17.5H27.5ZM14.25 11.25C14.25 8.89886 12.3511 7 10 7C7.64886 7 5.75 8.89886 5.75 11.25C5.75 13.6011 7.64886 15.5 10 15.5C12.3511 15.5 14.25 13.6011 14.25 11.25Z" fill="black" stroke="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_16_51">
                                <rect width="30" height="30" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="images-head-text text-light mx-3">IMAGES</div>
            </div>
            <div className="images-cont"></div>
        </div>
    )
}

export default Images