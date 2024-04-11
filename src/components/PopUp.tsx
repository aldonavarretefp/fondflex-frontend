import React from 'react'
import { usePopUp } from '../hooks'

const PopUp = () => {

  const { message, hidePopUp, isOpen } = usePopUp();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-40">
      <div className="bg-white p-4 rounded flex justify-center flex-col items-center">
        <p
          className='text-center pb-5'
        >{message}</p>
        <button 
          onClick={hidePopUp}
          className='bg-transparent hover:bg-accent text-accent font-semibold hover:text-white py-2 px-4 border border-accent hover:border-transparent rounded transition-colors'
        >Cerrar</button>
      </div>
    </div>
  )
}

export default PopUp