import clsx from 'clsx'
import styles from './styles.module.scss'

export const USDCIcon = ({ className }) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(styles.usdc, className)}
    >
      <path
        d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z'
        fill='#2775CA'
      />
      <path
        d='M13.0667 27.0667C13.0667 27.4667 12.8 27.6 12.4 27.6C7.46667 26 4 21.4667 4 16.1333C4 10.8 7.46667 6.26667 12.4 4.66667C12.8 4.53334 13.0667 4.80001 13.0667 5.20001V6.13334C13.0667 6.40001 12.9333 6.66667 12.6667 6.80001C8.8 8.26667 6.13333 11.8667 6.13333 16.1333C6.13333 20.4 8.93333 24.1333 12.6667 25.4667C12.9333 25.6 13.0667 25.8667 13.0667 26.1333V27.0667Z'
        fill='white'
      />
      <path
        d='M17.0667 23.7333C17.0667 24 16.8 24.2667 16.5333 24.2667H15.4667C15.2 24.2667 14.9333 24 14.9333 23.7333V22.1333C12.8 21.8667 11.7333 20.6667 11.3333 18.9333C11.3333 18.6667 11.4667 18.4 11.7333 18.4H12.9333C13.2 18.4 13.3333 18.5333 13.4667 18.8C13.7333 19.7333 14.2667 20.5333 16 20.5333C17.3333 20.5333 18.2667 19.8667 18.2667 18.8C18.2667 17.7333 17.7333 17.3333 15.8667 17.0667C13.0667 16.6667 11.7333 15.8667 11.7333 13.6C11.7333 11.8667 13.0667 10.5333 14.9333 10.2667V8.66666C14.9333 8.4 15.2 8.13333 15.4667 8.13333H16.5333C16.8 8.13333 17.0667 8.4 17.0667 8.66666V10.2667C18.6667 10.5333 19.7333 11.4667 20 12.9333C20 13.2 19.8667 13.4667 19.6 13.4667H18.5333C18.2667 13.4667 18.1333 13.3333 18 13.0667C17.7333 12.1333 17.0667 11.7333 15.8667 11.7333C14.5333 11.7333 13.8667 12.4 13.8667 13.3333C13.8667 14.2667 14.2667 14.8 16.2667 15.0667C19.0667 15.4667 20.4 16.2667 20.4 18.5333C20.4 20.2667 19.0667 21.7333 17.0667 22.1333V23.7333Z'
        fill='white'
      />
      <path
        d='M19.6 27.6C19.2 27.7333 18.9333 27.4667 18.9333 27.0667V26.1333C18.9333 25.8667 19.0667 25.6 19.3333 25.4667C23.2 24 25.8667 20.4 25.8667 16.1333C25.8667 11.8667 23.0667 8.13334 19.3333 6.8C19.0667 6.66667 18.9333 6.4 18.9333 6.13334V5.20001C18.9333 4.80001 19.2 4.66667 19.6 4.66667C24.4 6.26667 28 10.8 28 16.1333C28 21.4667 24.5333 26 19.6 27.6Z'
        fill='white'
      />
      <circle
        cx='16'
        cy='16'
        r='16'
        fill='url(#paint0_linear_5_16276)'
        fillOpacity='0.2'
      />
      <defs>
        <linearGradient
          id='paint0_linear_5_16276'
          x1='16'
          y1='0'
          x2='16'
          y2='32'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const QRCodeIcon = ({ className }) => {
  return (
    <svg
      className={clsx(styles.qrCode, className)}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.66663 7.33334H3.33329C2.93329 7.33334 2.66663 7.06667 2.66663 6.66667V3.33334C2.66663 2.93334 2.93329 2.66667 3.33329 2.66667H6.66663C7.06663 2.66667 7.33329 2.93334 7.33329 3.33334V6.66667C7.33329 7.06667 7.06663 7.33334 6.66663 7.33334ZM3.99996 6.00001H5.99996V4.00001H3.99996V6.00001Z'
        fill='#F76C1B'
      ></path>
      <path
        d='M6.66663 13.3333H3.33329C2.93329 13.3333 2.66663 13.0667 2.66663 12.6667V9.33334C2.66663 8.93334 2.93329 8.66667 3.33329 8.66667H6.66663C7.06663 8.66667 7.33329 8.93334 7.33329 9.33334V12.6667C7.33329 13.0667 7.06663 13.3333 6.66663 13.3333ZM3.99996 12H5.99996V10H3.99996V12Z'
        fill='#F76C1B'
      ></path>
      <path
        d='M12.6666 7.33334H9.33329C8.93329 7.33334 8.66663 7.06667 8.66663 6.66667V3.33334C8.66663 2.93334 8.93329 2.66667 9.33329 2.66667H12.6666C13.0666 2.66667 13.3333 2.93334 13.3333 3.33334V6.66667C13.3333 7.06667 13.0666 7.33334 12.6666 7.33334ZM9.99996 6.00001H12V4.00001H9.99996V6.00001Z'
        fill='#F76C1B'
      ></path>
      <path
        d='M9.33329 10C9.13329 10 8.99996 9.93334 8.86663 9.8C8.79996 9.73334 8.73329 9.66667 8.73329 9.6C8.73329 9.53334 8.66663 9.4 8.66663 9.33334C8.66663 9.13334 8.73329 9.00001 8.86663 8.86667C8.99996 8.73334 9.26663 8.66667 9.46663 8.66667C9.53329 8.66667 9.53329 8.66667 9.59996 8.73334C9.66663 8.73334 9.66663 8.73334 9.73329 8.8C9.79996 8.8 9.79996 8.86667 9.86663 8.86667C9.93329 8.93334 9.99996 9.00001 9.99996 9.06667C9.99996 9.13334 10.0666 9.26667 10.0666 9.33334C10.0666 9.4 10.0666 9.53334 9.99996 9.6C9.93329 9.66667 9.93329 9.73334 9.86663 9.8C9.79996 9.86667 9.73329 9.93334 9.66663 9.93334C9.59996 9.93334 9.39996 10 9.33329 10Z'
        fill='#F76C1B'
      ></path>
      <path
        d='M10.6666 12C10.4666 12 10.3333 11.9333 10.1999 11.8C10.1333 11.7333 10.0666 11.6667 10.0666 11.6C10.0666 11.5333 9.99994 11.4 9.99994 11.3333C9.99994 11.1333 10.0666 11 10.1999 10.8667C10.3999 10.6667 10.6666 10.6 10.9333 10.7333C10.9999 10.7333 11.0666 10.8 11.1333 10.8667C11.1999 10.9333 11.2666 11 11.2666 11.0667C11.2666 11.1333 11.3333 11.2667 11.3333 11.3333C11.3333 11.4 11.3333 11.5333 11.2666 11.6C11.1999 11.6667 11.1999 11.7333 11.1333 11.8C10.9999 11.9333 10.8666 12 10.6666 12Z'
        fill='#F76C1B'
      ></path>
      <path
        d='M12.6666 10C12.5999 10 12.4666 10 12.3999 9.93334C12.3333 9.86668 12.2666 9.86668 12.1999 9.80001C12.1333 9.73334 12.0666 9.66668 12.0666 9.60001C12.0666 9.53334 11.9999 9.40001 11.9999 9.33334C11.9999 9.26668 11.9999 9.13334 12.0666 9.06668C12.0666 9.00001 12.1333 8.93334 12.1999 8.86668L12.2666 8.80001C12.3333 8.80001 12.3333 8.73334 12.3999 8.73334C12.4666 8.73334 12.4666 8.66668 12.5333 8.66668C12.7333 8.60001 12.9999 8.66668 13.1333 8.86668C13.1999 8.93334 13.2666 9.00001 13.2666 9.06668C13.3333 9.13334 13.3333 9.26668 13.3333 9.33334C13.3333 9.40001 13.3333 9.53334 13.2666 9.60001C13.2666 9.66668 13.1999 9.73334 13.1333 9.80001C12.9999 9.93334 12.8666 10 12.6666 10Z'
        fill='#F76C1B'
      ></path>
      <path
        d='M12.6666 12H12C11.6 12 11.3333 11.7333 11.3333 11.3333C11.3333 10.9333 11.6 10.6667 12 10.6667H12.6666C13.0666 10.6667 13.3333 10.9333 13.3333 11.3333C13.3333 11.7333 13.0666 12 12.6666 12Z'
        fill='#F76C1B'
      ></path>
      <path
        d='M9.33329 13.3333C9.13329 13.3333 8.99996 13.2667 8.86663 13.1333C8.79996 13.0667 8.73329 13 8.73329 12.9333C8.73329 12.8667 8.66663 12.7333 8.66663 12.6667C8.66663 12.4667 8.73329 12.3333 8.86663 12.2C8.99996 12.0667 9.26663 12 9.46663 12C9.53329 12 9.53329 12 9.59996 12.0667C9.66663 12.0667 9.66663 12.0667 9.73329 12.1333C9.79996 12.1333 9.79996 12.2 9.86663 12.2C9.93329 12.2667 9.99996 12.3333 9.99996 12.4C9.99996 12.4667 10.0666 12.6 10.0666 12.6667C10.0666 12.7333 10.0666 12.8667 9.99996 12.9333C9.93329 13 9.93329 13.0667 9.86663 13.1333C9.79996 13.2 9.73329 13.2667 9.66663 13.2667C9.59996 13.2667 9.39996 13.3333 9.33329 13.3333Z'
        fill='#F76C1B'
      ></path>
      <path
        d='M11.3333 10H10.6666C10.2666 10 9.99994 9.73334 9.99994 9.33334C9.99994 8.93334 10.2666 8.66667 10.6666 8.66667H11.3333C11.7333 8.66667 11.9999 8.93334 11.9999 9.33334C11.9999 9.73334 11.7333 10 11.3333 10Z'
        fill='#F76C1B'
      ></path>
      <path
        d='M1.99998 3.33334C1.59998 3.33334 1.33331 3.06667 1.33331 2.66667V1.33334C1.33331 0.933338 1.59998 0.666672 1.99998 0.666672H3.33331C3.73331 0.666672 3.99998 0.933338 3.99998 1.33334C3.99998 1.73334 3.73331 2.00001 3.33331 2.00001H2.66665V2.66667C2.66665 3.06667 2.39998 3.33334 1.99998 3.33334Z'
        fill='#F76C1B'
      ></path>
      <path
        d='M14 3.33334C13.6 3.33334 13.3333 3.06667 13.3333 2.66667V2.00001H12.6667C12.2667 2.00001 12 1.73334 12 1.33334C12 0.933338 12.2667 0.666672 12.6667 0.666672H14C14.4 0.666672 14.6667 0.933338 14.6667 1.33334V2.66667C14.6667 3.06667 14.4 3.33334 14 3.33334Z'
        fill='#F76C1B'
      ></path>
      <path
        d='M14 15.3333H12.6667C12.2667 15.3333 12 15.0667 12 14.6667C12 14.2667 12.2667 14 12.6667 14H13.3333V13.3333C13.3333 12.9333 13.6 12.6667 14 12.6667C14.4 12.6667 14.6667 12.9333 14.6667 13.3333V14.6667C14.6667 15.0667 14.4 15.3333 14 15.3333Z'
        fill='#F76C1B'
      ></path>
      <path
        d='M3.33331 15.3333H1.99998C1.59998 15.3333 1.33331 15.0667 1.33331 14.6667V13.3333C1.33331 12.9333 1.59998 12.6667 1.99998 12.6667C2.39998 12.6667 2.66665 12.9333 2.66665 13.3333V14H3.33331C3.73331 14 3.99998 14.2667 3.99998 14.6667C3.99998 15.0667 3.73331 15.3333 3.33331 15.3333Z'
        fill='#F76C1B'
      ></path>
    </svg>
  )
}

export const QuestionIcon = ({ className }) => {
  return (
    <svg
      className={clsx(styles.questionIcon, className)}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM7.59998 7.00001C7.59998 5.86203 8.87846 4.69494 10.5677 5.07275C11.46 5.29956 12.138 5.95772 12.3324 6.65303C12.5743 7.64393 11.9857 8.61815 10.9061 9.08087C10.0464 9.44929 8.99998 10.3141 8.99998 11.6V13.1C8.99998 13.6523 9.44769 14.1 9.99998 14.1C10.5523 14.1 11 13.6523 11 13.1V11.6C11 11.5474 11.0216 11.4457 11.1443 11.3036C11.2686 11.1597 11.4624 11.0184 11.6939 10.9192C13.4104 10.1835 14.8215 8.36297 14.2701 6.15747L14.2647 6.13689C13.8561 4.63858 12.5408 3.50445 11.0425 3.12988L11.0216 3.12489C8.31611 2.51 5.59998 4.34039 5.59998 7.00001C5.59998 7.5523 6.04769 8.00001 6.59998 8.00001C7.15226 8.00001 7.59998 7.5523 7.59998 7.00001ZM11 16.1C11 16.4 10.8 16.6 10.5 16.6H9.49998C9.19998 16.6 8.99998 16.4 8.99998 16.1V15.1C8.99998 14.8 9.19998 14.6 9.49998 14.6H10.5C10.8 14.6 11 14.8 11 15.1V16.1Z'
        fill='#9CA3AF'
      ></path>
    </svg>
  )
}

export const ShareIcon = ({ className }) => {
  return (
    <svg
      className={clsx(styles.share, className)}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM18.3655 9.6664C18.3655 9.52422 18.3655 9.38201 18.3554 9.23983C18.995 8.77262 19.5534 8.19373 20 7.54376C19.4112 7.79764 18.7716 7.98049 18.1117 8.05155C18.7919 7.64533 19.3096 7.00549 19.5533 6.24375C18.9238 6.61952 18.2132 6.89376 17.4721 7.03594C16.8731 6.39609 16.0203 6 15.0761 6C13.2589 6 11.7969 7.47264 11.7969 9.28047C11.7969 9.53438 11.8274 9.78827 11.8782 10.032C9.15736 9.8898 6.73095 8.58983 5.11672 6.5992C4.83244 7.08671 4.67003 7.6453 4.67003 8.25466C4.67003 9.39217 5.24869 10.3976 6.13195 10.9867C5.59391 10.9664 5.08625 10.8141 4.64972 10.5703V10.6109C4.64972 12.2055 5.77666 13.5258 7.2792 13.8305C7.00511 13.9015 6.71067 13.9422 6.41626 13.9422C6.20304 13.9422 6.00001 13.9219 5.79694 13.8914C6.2132 15.1914 7.42133 16.1359 8.86296 16.1664C7.73605 17.05 6.32485 17.568 4.79188 17.568C4.51775 17.568 4.26397 17.5578 4 17.5274C5.45179 18.4617 7.17767 19 9.03555 19C15.066 19 18.3655 14.0031 18.3655 9.6664Z'
      ></path>
    </svg>
  )
}

export const SOLIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM6.98778 6.14629C7.08403 6.0539 7.21107 6 7.34197 6H19.5614C19.7847 6 19.8963 6.26949 19.7385 6.42733L17.3246 8.84119C17.2322 8.93359 17.1052 8.98749 16.9705 8.98749H4.75102C4.52773 8.98749 4.41608 8.718 4.57392 8.56015L6.98778 6.14629ZM6.98778 15.1588C7.08018 15.0664 7.20722 15.0125 7.34197 15.0125H19.5614C19.7847 15.0125 19.8963 15.282 19.7385 15.4398L17.3246 17.8537C17.2322 17.9461 17.1052 18 16.9705 18H4.75102C4.52773 18 4.41608 17.7305 4.57392 17.5727L6.98778 15.1588ZM16.9705 10.4774C17.1052 10.4774 17.2322 10.5313 17.3246 10.6237L19.7385 13.0375C19.8963 13.1954 19.7847 13.4649 19.5614 13.4649H7.34197C7.20722 13.4649 7.08018 13.411 6.98778 13.3186L4.57392 10.9047C4.41608 10.7469 4.52773 10.4774 4.75102 10.4774H16.9705Z'
        fill='#5A6578'
      />
      <circle
        cx='12'
        cy='12'
        r='12'
        fill='url(#paint0_linear_178_6191)'
        fillOpacity='0.2'
      />
      <defs>
        <linearGradient
          id='paint0_linear_178_6191'
          x1='12'
          y1='0'
          x2='12'
          y2='24'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const CopyIcon = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 9C3 8.44772 3.44772 8 4 8H16C16.5523 8 17 8.44772 17 9V21C17 21.5523 16.5523 22 16 22H4C3.44772 22 3 21.5523 3 21V9ZM5 10V20H15V10H5Z'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7 4C7 3.44772 7.44772 3 8 3H20C20.5523 3 21 3.44772 21 4V16C21 16.5523 20.5523 17 20 17H17C16.4477 17 16 16.5523 16 16C16 15.4477 16.4477 15 17 15H19V5H9V8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8V4Z'
      ></path>
    </svg>
  )
}

export const DisconnectWalletIcon = ({ className }) => {
  return (
    <svg
      viewBox='0 0 16 16'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.33331 5.33335C1.33331 4.96516 1.63179 4.66669 1.99998 4.66669H12.6666C13.0348 4.66669 13.3333 4.96516 13.3333 5.33335V8.00002C13.3333 8.36821 13.0348 8.66669 12.6666 8.66669C12.2985 8.66669 12 8.36821 12 8.00002V6.00002H2.66665V12.6667H12V10.6667C12 10.2985 12.2985 10 12.6666 10C13.0348 10 13.3333 10.2985 13.3333 10.6667V13.3334C13.3333 13.7015 13.0348 14 12.6666 14H1.99998C1.63179 14 1.33331 13.7015 1.33331 13.3334V5.33335Z'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 9.33331C8 8.23179 8.89848 7.33331 10 7.33331H14C14.3682 7.33331 14.6667 7.63179 14.6667 7.99998V10.6666C14.6667 11.0348 14.3682 11.3333 14 11.3333H10C8.89848 11.3333 8 10.4348 8 9.33331ZM10 8.66665C9.63486 8.66665 9.33333 8.96817 9.33333 9.33331C9.33333 9.69846 9.63486 9.99998 10 9.99998H13.3333V8.66665H10Z'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.04039 2.11462C9.22358 2.23865 9.33331 2.44545 9.33331 2.66667V5.33334C9.33331 5.70153 9.03483 6 8.66664 6C8.29845 6 7.99997 5.70153 7.99997 5.33334V3.65136L2.24757 5.95232C1.90571 6.08906 1.51773 5.92279 1.38099 5.58093C1.24425 5.23907 1.41052 4.85109 1.75238 4.71435L8.41905 2.04769C8.62444 1.96553 8.85721 1.9906 9.04039 2.11462Z'
      ></path>
    </svg>
  )
}

export const SunIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      width='20px'
      height='20px'
    >
      <path d='M 23.976562 3.9785156 A 1.50015 1.50015 0 0 0 22.5 5.5 L 22.5 8.5 A 1.50015 1.50015 0 1 0 25.5 8.5 L 25.5 5.5 A 1.50015 1.50015 0 0 0 23.976562 3.9785156 z M 10.902344 9.4042969 A 1.50015 1.50015 0 0 0 9.8574219 11.980469 L 11.978516 14.101562 A 1.5012202 1.5012202 0 0 0 14.101562 11.978516 L 11.980469 9.8574219 A 1.50015 1.50015 0 0 0 10.902344 9.4042969 z M 37.050781 9.4042969 A 1.50015 1.50015 0 0 0 36.019531 9.8574219 L 33.898438 11.978516 A 1.5012202 1.5012202 0 0 0 36.021484 14.101562 L 38.142578 11.980469 A 1.50015 1.50015 0 0 0 37.050781 9.4042969 z M 24 13 C 17.942632 13 13 17.942636 13 24 C 13 30.057364 17.942632 35 24 35 C 30.057368 35 35 30.057364 35 24 C 35 17.942636 30.057368 13 24 13 z M 24 16 C 28.436049 16 32 19.563954 32 24 C 32 28.436046 28.436049 32 24 32 C 19.563951 32 16 28.436046 16 24 C 16 19.563954 19.563951 16 24 16 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 8.5 25.5 A 1.50015 1.50015 0 1 0 8.5 22.5 L 5.5 22.5 z M 39.5 22.5 A 1.50015 1.50015 0 1 0 39.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 39.5 22.5 z M 13.009766 33.445312 A 1.50015 1.50015 0 0 0 11.978516 33.898438 L 9.8574219 36.019531 A 1.501221 1.501221 0 1 0 11.980469 38.142578 L 14.101562 36.021484 A 1.50015 1.50015 0 0 0 13.009766 33.445312 z M 34.943359 33.445312 A 1.50015 1.50015 0 0 0 33.898438 36.021484 L 36.019531 38.142578 A 1.5012209 1.5012209 0 1 0 38.142578 36.019531 L 36.021484 33.898438 A 1.50015 1.50015 0 0 0 34.943359 33.445312 z M 23.976562 37.978516 A 1.50015 1.50015 0 0 0 22.5 39.5 L 22.5 42.5 A 1.50015 1.50015 0 1 0 25.5 42.5 L 25.5 39.5 A 1.50015 1.50015 0 0 0 23.976562 37.978516 z' />
    </svg>
  )
}

export const CloseIcon = ({ className }) => {
  return (
    <svg className={className} width='14' height='14'>
      <path d='M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z'></path>
    </svg>
  )
}
