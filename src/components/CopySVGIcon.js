import React from 'react'
import Tooltip from 'react-bootstrap/Tooltip'

import styles from './CopySVGIcon.module.css'

export const CopySVGIcon = ({ onClick }) => (
  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" onClick={onClick}>
    <g>
      <path d="M35,270h45v45c0,8.284,6.716,15,15,15h200c8.284,0,15-6.716,15-15V75c0-8.284-6.716-15-15-15h-45V15
        c0-8.284-6.716-15-15-15H35c-8.284,0-15,6.716-15,15v240C20,263.284,26.716,270,35,270z M280,300H110V90h170V300z M50,30h170v30H95
        c-8.284,0-15,6.716-15,15v165H50V30z"/>
      <path d="M155,120c-8.284,0-15,6.716-15,15s6.716,15,15,15h80c8.284,0,15-6.716,15-15s-6.716-15-15-15H155z"/>
      <path d="M235,180h-80c-8.284,0-15,6.716-15,15s6.716,15,15,15h80c8.284,0,15-6.716,15-15S243.284,180,235,180z"/>
      <path d="M235,240h-80c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h80c8.284,0,15-6.716,15-15C250,246.716,243.284,240,235,240z"/>
    </g>
  </svg>
)