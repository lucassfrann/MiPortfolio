import React from 'react'
import CV from '../assets/images/CV.png'
import './Curriculum.css'

function Curriculum() {
  return (
    <div className='grid justify-center mt-5 text-center'>
        <div className='text-white sm:text-4xl py-5 font-[Archivo Black] font-bold'>
            <h1>MI CURRICULUM VITAE</h1>
        </div>
        <div className='m-2 sm:divIMG'>
        <img src={CV} />
        </div>
        <div className='pb-5'>
            <a href={CV} download='LUCAS FRANCESCHELLI CV'><button className="bg-blue-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">Descargar CV</button></a>
        </div>
    </div>
  )
}

export default Curriculum