import React from 'react'
import ReactIMG from '../assets/images/react.png'
import JSIMG from '../assets/images/javascript.png'
import CSSIMG from '../assets/images/css.png'
import HTMLIMG from '../assets/images/html.png'
import Memoji from '../assets/images/Memoji.png'
import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <div id="aboutme" className='flex justify-center'>
        <div>
            <div className='grid text-center px-4 py-4'>
                <h1 className='text-4xl font-bold text-sky-500 py-4'>Sobre mi</h1>
                <div className='flex'>
                <img className='w-32 h-32 sm:w-80 sm:h-80' src={Memoji}/>
                <div>
                <p className='text-xs text-white text-left sm:text-s w-60 py-4'>
                   Me llamo Lucas Franceschelli, naci el 3 de agosto de 2002 (19 años) estudio Ingenieria en sistemas en la UTN y
                   programo desde el 2021 hice varios cursos de Desarrollo web en Coder house y otros en Udemy.
                </p>
                <Link to={'/contact'}>
                <button class="bg-blue-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">Contactame</button>
                </Link>
                </div>
                </div>   
            </div>
            <div>
            <h1 className='font-base text-white text-center py-5'>Mis conocimientos</h1>
            </div>
            <div className='flex flex-wrap justify-center mb-10'>
            <img className='w-44' src={CSSIMG}/>
            <img className='w-44' src={HTMLIMG}/>
            <img className='w-44' src={JSIMG}/>
            <img className='w-44' src={ReactIMG}/>
            </div>
        </div>
    </div>
  )
}

export default AboutMe