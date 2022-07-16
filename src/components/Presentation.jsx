import React from 'react'
import meIMG from '../assets/images/yo.png'

const Presentation = () => {
  return (
    <div className='grid grid-cols-2 sm:text-center py-40 border-b-2 border-blue-900'>
        <div>
        <div className='flex sm:justify-end'>
            <img className="w-32 sm:w-96" src={meIMG}/>
        </div>
        </div>
        <div className='flex flex-col justify-end flex-wrap mb-3 mr-3 sm:justify-center text-justify'>
            <p className='text-white'>Hola, mi nombre es </p>
            <h1 className='text-white font-bold sm:text-4xl font-[Archivo Black]'>LUCAS</h1>
            <h1 className='text-white font-bold sm:text-4xl font-[Archivo Black]'>FRANCESCHELLI</h1>
            <p className='text-white text-xs'>Soy <span className='text-sky-600 font-bold'>Frontend Developer</span> y proximo Ingeniero en Sistemas.</p>
        </div>
    </div>
  )
}

export default Presentation