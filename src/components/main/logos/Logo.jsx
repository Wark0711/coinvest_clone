import React from 'react'

function Logo() {
  return (
    <div className='main-logo bg-light'>
      <div className="logo-set py-3 mx-3 d-flex align-items-center justify-content-around">
        <div className="mlogo1">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="15" fill="url(#paint0_radial_16_25)" />
            <path d="M15 21.5625C13.2595 21.5625 11.5903 20.8711 10.3596 19.6404C9.1289 18.4097 8.4375 16.7405 8.4375 15C8.4375 13.2595 9.1289 11.5903 10.3596 10.3596C11.5903 9.1289 13.2595 8.4375 15 8.4375C16.7405 8.4375 18.4097 9.1289 19.6404 10.3596C20.8711 11.5903 21.5625 13.2595 21.5625 15C21.5625 16.7405 20.8711 18.4097 19.6404 19.6404C18.4097 20.8711 16.7405 21.5625 15 21.5625ZM15 22.5C16.9891 22.5 18.8968 21.7098 20.3033 20.3033C21.7098 18.8968 22.5 16.9891 22.5 15C22.5 13.0109 21.7098 11.1032 20.3033 9.6967C18.8968 8.29018 16.9891 7.5 15 7.5C13.0109 7.5 11.1032 8.29018 9.6967 9.6967C8.29018 11.1032 7.5 13.0109 7.5 15C7.5 16.9891 8.29018 18.8968 9.6967 20.3033C11.1032 21.7098 13.0109 22.5 15 22.5Z" fill="#FDFCFC" />
            <path d="M10.7837 15.9804C10.914 15.9008 11.0688 15.8793 11.2142 15.9205C11.3595 15.9616 11.4834 16.0622 11.5587 16.2C11.9071 16.8388 12.4086 17.3692 13.0126 17.7379C13.6165 18.1066 14.3017 18.3004 14.9991 18.3C15.6964 18.3004 16.3816 18.1066 16.9855 17.7379C17.5895 17.3692 18.091 16.8388 18.4394 16.2C18.4764 16.1312 18.5259 16.0708 18.585 16.0224C18.6442 15.9739 18.7118 15.9382 18.784 15.9175C18.8562 15.8968 18.9316 15.8914 19.0058 15.9016C19.08 15.9118 19.1515 15.9374 19.2163 15.9769C19.2811 16.0165 19.3379 16.0692 19.3833 16.1321C19.4288 16.1949 19.462 16.2667 19.4812 16.3432C19.5003 16.4197 19.5049 16.4994 19.4948 16.5778C19.4846 16.6562 19.4599 16.7317 19.4221 16.8C18.974 17.6212 18.3293 18.3031 17.5529 18.7771C16.7764 19.2511 15.8956 19.5004 14.9991 19.5C14.1025 19.5004 13.2217 19.2511 12.4452 18.7771C11.6688 18.3031 11.0241 17.6212 10.576 16.8C10.5008 16.6622 10.4804 16.4984 10.5193 16.3447C10.5583 16.191 10.6534 16.06 10.7837 15.9804ZM13.8644 12.3C13.8644 13.2936 13.356 14.1 12.7297 14.1C12.1033 14.1 11.595 13.2936 11.595 12.3C11.595 11.3064 12.1033 10.5 12.7297 10.5C13.356 10.5 13.8644 11.3064 13.8644 12.3ZM18.4031 12.3C18.4031 13.2936 17.8948 14.1 17.2684 14.1C16.6421 14.1 16.1337 13.2936 16.1337 12.3C16.1337 11.3064 16.6421 10.5 17.2684 10.5C17.8948 10.5 18.4031 11.3064 18.4031 12.3Z" fill="white" />
            <defs>
              <radialGradient id="paint0_radial_16_25" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 15) rotate(90) scale(15)">
                <stop stopColor="#11AB3C" />
                <stop offset="0.833333" stopColor="#09382A" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="mlogo2">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="15" fill="url(#paint0_radial_16_33)" />
            <path d="M9.375 9.98085C9.12636 9.98085 8.8879 10.0842 8.71209 10.2681C8.53627 10.4521 8.4375 10.7016 8.4375 10.9617V18.8085C8.4375 19.0686 8.53627 19.3181 8.71209 19.502C8.8879 19.686 9.12636 19.7893 9.375 19.7893H18.3619C18.8591 19.7894 19.336 19.9962 19.6875 20.3641L21.5625 22.3258V10.9617C21.5625 10.7016 21.4637 10.4521 21.2879 10.2681C21.1121 10.0842 20.8736 9.98085 20.625 9.98085H9.375ZM20.625 9C21.1223 9 21.5992 9.20668 21.9508 9.57457C22.3025 9.94246 22.5 10.4414 22.5 10.9617V23.5097C22.5 23.6067 22.4724 23.7016 22.4209 23.7822C22.3693 23.8629 22.296 23.9257 22.2103 23.9628C22.1246 23.9999 22.0303 24.0095 21.9393 23.9905C21.8484 23.9715 21.7649 23.9246 21.6994 23.8559L19.0247 21.0576C18.8489 20.8736 18.6105 20.7702 18.3619 20.7702H9.375C8.87772 20.7702 8.40081 20.5635 8.04917 20.1956C7.69754 19.8277 7.5 19.3288 7.5 18.8085V10.9617C7.5 10.4414 7.69754 9.94246 8.04917 9.57457C8.40081 9.20668 8.87772 9 9.375 9H20.625Z" fill="white" />
            <path d="M11.8 15C11.8 15.2652 11.7052 15.5196 11.5364 15.7071C11.3676 15.8946 11.1387 16 10.9 16C10.6613 16 10.4324 15.8946 10.2636 15.7071C10.0948 15.5196 10 15.2652 10 15C10 14.7348 10.0948 14.4804 10.2636 14.2929C10.4324 14.1054 10.6613 14 10.9 14C11.1387 14 11.3676 14.1054 11.5364 14.2929C11.7052 14.4804 11.8 14.7348 11.8 15ZM15.4 15C15.4 15.2652 15.3052 15.5196 15.1364 15.7071C14.9676 15.8946 14.7387 16 14.5 16C14.2613 16 14.0324 15.8946 13.8636 15.7071C13.6948 15.5196 13.6 15.2652 13.6 15C13.6 14.7348 13.6948 14.4804 13.8636 14.2929C14.0324 14.1054 14.2613 14 14.5 14C14.7387 14 14.9676 14.1054 15.1364 14.2929C15.3052 14.4804 15.4 14.7348 15.4 15ZM19 15C19 15.2652 18.9052 15.5196 18.7364 15.7071C18.5676 15.8946 18.3387 16 18.1 16C17.8613 16 17.6324 15.8946 17.4636 15.7071C17.2948 15.5196 17.2 15.2652 17.2 15C17.2 14.7348 17.2948 14.4804 17.4636 14.2929C17.6324 14.1054 17.8613 14 18.1 14C18.3387 14 18.5676 14.1054 18.7364 14.2929C18.9052 14.4804 19 14.7348 19 15Z" fill="white" />
            <defs>
              <radialGradient id="paint0_radial_16_33" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 15) rotate(90) scale(15)">
                <stop stopColor="#11AB3C" />
                <stop offset="0.833333" stopColor="#09382A" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="mlogo3">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="15" transform="matrix(-1 0 0 1 30 0)" fill="url(#paint0_radial_16_47)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M22.2848 18.781C22.2848 18.9053 22.231 19.0245 22.1354 19.1124C22.0397 19.2003 21.91 19.2497 21.7747 19.2497H9.74252L12.9533 22.1988C13.0491 22.2869 13.1029 22.4062 13.1029 22.5307C13.1029 22.6552 13.0491 22.7745 12.9533 22.8625C12.8575 22.9506 12.7276 23 12.5922 23C12.4567 23 12.3268 22.9506 12.231 22.8625L8.14986 19.1128C8.10236 19.0693 8.06466 19.0176 8.03895 18.9606C8.01323 18.9037 7.99999 18.8426 7.99999 18.781C7.99999 18.7193 8.01323 18.6583 8.03895 18.6013C8.06466 18.5444 8.10236 18.4927 8.14986 18.4491L12.231 14.6994C12.3268 14.6114 12.4567 14.562 12.5922 14.562C12.7276 14.562 12.8575 14.6114 12.9533 14.6994C13.0491 14.7875 13.1029 14.9068 13.1029 15.0313C13.1029 15.1558 13.0491 15.2751 12.9533 15.3631L9.74252 18.3123H21.7747C21.91 18.3123 22.0397 18.3617 22.1354 18.4496C22.231 18.5375 22.2848 18.6567 22.2848 18.781ZM8.0009 12.219C8.0009 12.3433 8.05465 12.4625 8.15032 12.5504C8.24599 12.6383 8.37575 12.6877 8.51104 12.6877H20.5432L17.3324 15.6369C17.2849 15.6804 17.2473 15.7322 17.2216 15.7891C17.196 15.8461 17.1828 15.9071 17.1828 15.9687C17.1828 16.0303 17.196 16.0914 17.2216 16.1483C17.2473 16.2052 17.2849 16.257 17.3324 16.3006C17.3798 16.3441 17.4361 16.3787 17.4981 16.4023C17.56 16.4259 17.6265 16.438 17.6935 16.438C17.7606 16.438 17.827 16.4259 17.889 16.4023C17.951 16.3787 18.0073 16.3441 18.0547 16.3006L22.1358 12.5509C22.1833 12.5073 22.221 12.4556 22.2468 12.3987C22.2725 12.3417 22.2857 12.2807 22.2857 12.219C22.2857 12.1574 22.2725 12.0963 22.2468 12.0394C22.221 11.9824 22.1833 11.9307 22.1358 11.8872L18.0547 8.13746C17.9589 8.04944 17.829 8 17.6935 8C17.5581 8 17.4282 8.04944 17.3324 8.13746C17.2366 8.22547 17.1828 8.34484 17.1828 8.46931C17.1828 8.59377 17.2366 8.71314 17.3324 8.80115L20.5432 11.7503H8.51104C8.37575 11.7503 8.24599 11.7997 8.15032 11.8876C8.05465 11.9755 8.0009 12.0947 8.0009 12.219Z" fill="white" />
            <defs>
              <radialGradient id="paint0_radial_16_47" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 15) rotate(90) scale(15)">
                <stop stopColor="#11AB3C" />
                <stop offset="0.833333" stopColor="#09382A" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="mlogo4">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="15" fill="url(#paint0_radial_16_38)" />
            <path d="M18.7549 9.74733L19.5839 9.41579L19.2525 10.2445L18.9523 10.0465L18.7549 9.74733Z" fill="white" stroke="white" strokeWidth="2" />
            <defs>
              <radialGradient id="paint0_radial_16_38" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 15) rotate(90) scale(15)">
                <stop stopColor="#11AB3C" />
                <stop offset="0.833333" stopColor="#09382A" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="mlogo5">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="15" transform="matrix(-1 0 0 1 30 0)" fill="url(#paint0_radial_16_36)" />
            <path d="M16.8218 18.4797L22.0925 14.5433C22.2166 14.4669 22.3195 14.3583 22.3909 14.228C22.4624 14.0978 22.5 13.9504 22.5 13.8004C22.5 13.6504 22.4624 13.503 22.3909 13.3727C22.3195 13.2424 22.2166 13.1338 22.0925 13.0575L16.8218 9.11862C16.6961 9.04176 16.5532 9.00083 16.4074 9.00001C16.2616 8.99919 16.1183 9.0385 15.9918 9.11394C15.8654 9.18939 15.7604 9.29828 15.6875 9.42958C15.6146 9.56088 15.5764 9.70989 15.5768 9.86151V11.3989C13.8461 11.3989 8.65383 11.3989 7.5 21C10.3846 15.5994 15.5768 16.1994 15.5768 16.1994V17.7368C15.5768 18.4089 16.276 18.8145 16.8218 18.4809V18.4797Z" fill="white" />
            <defs>
              <radialGradient id="paint0_radial_16_36" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 15) rotate(90) scale(15)">
                <stop stopColor="#11AB3C" />
                <stop offset="0.833333" stopColor="#09382A" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Logo