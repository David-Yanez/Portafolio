import React from 'react'
import { createPortal } from 'react-dom'
import './index.css'

export const Modal = ({ children, setOpenModal }) => {
  return createPortal(
    <div className='modal w-screen' onClick={() => setOpenModal(false)}>
      {children}
    </div>,
    document.getElementById('contact')
  )
}
