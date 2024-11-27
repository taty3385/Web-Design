import React from 'react'
import Fondo from './assets/fondo.jpg'

export default function Footer() {
  return (
    <div style={{ backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '200px' }} className="d-flex justify-content-center align-items-center p-0">
    <p className="text-center text-white fw-bold fs-4 m-0">¿Empezamos ahora?</p>
  </div>
  )
}
