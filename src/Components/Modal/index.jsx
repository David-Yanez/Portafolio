import React from 'react'
import { createPortal } from 'react-dom'
import './index.css'

export const Modal = ({ children }) => {
  return createPortal(
    <div className='modal'>
      {children}
    </div>,
    document.getElementById('contact')
  )
}
