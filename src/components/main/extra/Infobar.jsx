import React from 'react'

function Infobar() {
    return (
        <div className='main-info-bar'>
            <div className="info-bar-head d-flex align-items-center justify-content-start text-light fw-bold fs-5">
                <div className="info-bar-logo px-1">
                    <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6.33674C13.6193 6.33674 12.5 5.44588 12.5 4.34694C12.5 3.24801 13.6193 2.35715 15 2.35715C16.3807 2.35715 17.5 3.24801 17.5 4.34694C17.5 5.44588 16.3807 6.33674 15 6.33674Z" fill="white" />
                        <path d="M10.1375 8.43597C10.625 8.04796 11.4625 7.33164 13.0875 7.33164C13.35 7.33164 14.8625 7.33164 16.2625 7.33164C19.7 7.32169 22.5 5.09312 22.5 2.35715H25C25 5.50102 22.3625 8.16735 18.75 9.03291V22.2551H16.25V16.2857H13.75V22.2551H11.25V10.3661L6.3125 14.2959L4.55 12.8931L10.1375 8.43597Z" fill="white" />
                    </svg>
                    <svg className='position-relative boy' width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6.33674C16.3807 6.33674 17.5 5.44588 17.5 4.34694C17.5 3.24801 16.3807 2.35715 15 2.35715C13.6193 2.35715 12.5 3.24801 12.5 4.34694C12.5 5.44588 13.6193 6.33674 15 6.33674Z" fill="white" />
                        <path d="M19.8625 8.43597C19.375 8.04796 18.5375 7.33164 16.9125 7.33164C16.65 7.33164 15.1375 7.33164 13.7375 7.33164C10.3 7.32169 7.5 5.09312 7.5 2.35715H5C5 5.50102 7.6375 8.16735 11.25 9.03291V22.2551H13.75V16.2857H16.25V22.2551H18.75V10.3661L23.6875 14.2959L25.45 12.8931L19.8625 8.43597Z" fill="white" />
                    </svg>
                </div>
                <div className="info-bar-text py-1"><div>Info</div></div>
            </div>
            <div className="info-bar-cont text-start fw-semibold">
                <p className='m-0 py-2 px-4'>Web, Game & App Developer
                    | Server Technician | Founder of
                    @bondgodigitalagency
                    & @onehosting</p>
            </div>
        </div>
    )
}

export default Infobar