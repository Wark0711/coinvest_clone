import React from 'react'
import Bar from './Bar'

function Test() {
    return (
        <div className='main-test py-4'>
            <div className="test-head mx-auto d-flex align-items-center text-light fw-semibold gap-3 px-2 py-2">
                <div className="test-head-logo">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_16_80)">
                            <path d="M25 0H0V25H25V0Z" fill="#20C2CC" />
                            <path d="M16.8403 11.1065H17.5104V17.5104H12.857V16.8403V15.9242H13.2234H14.7234V14.4242V13.5153H15.0897H16.5897V12.0153V11.1065H16.8403ZM7.48956 7.48958H12.1429V8.15972V9.06858H11.7766H10.2766V10.5686V11.4847H9.91028H8.41028V12.9847V13.8935H8.1597H7.48956V7.48958Z" fill="#20C2CC" stroke="white" strokeWidth="3" />
                        </g>
                        <defs>
                            <clipPath id="clip0_16_80">
                                <rect width="25" height="25" rx="12.5" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div className="test-head-cont">Test</div>
            </div>
            <div className="test-bars pb-5">
              <Bar index={1}/>
              <Bar index={2}/>
              <Bar index={3}/>
              <Bar index={4}/>
              <Bar index={5}/>
            </div>
        </div>
    )
}

export default Test