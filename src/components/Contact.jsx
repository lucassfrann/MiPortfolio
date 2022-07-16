import React from 'react'
import IG from '../assets/images/instagram.png'
import PHONE from '../assets/images/telephone.png'
import GMAIL from '../assets/images/gmail.png'
import DS from '../assets/images/discord.png'
import LINK from '../assets/images/linkedin.png'


function Contact() {
  return (
    <div className='w-full '>
      <h1 className='text-4xl m-4 text-center text-white font-bold'>Contacto</h1>
      <div className='grid text-white justify-center m-5'>
        <div className='flex flex-wrap w-14 py-5'>
        <img src={GMAIL}/>
        <p>lucasfranceschelli@gmail.com</p>
        </div>

        <div className='flex flex-wrap w-14 py-5'>
        <img src={PHONE}/>
        <p>1138631314</p>
        </div>

        <div className='flex flex-wrap w-14 py-5'>
        <a src="https://www.linkedin.com/in/lucas-martin-franceschelli-217888209/">
        <img src={LINK}/>
        <p>Linkedin</p>
        </a>
        </div>

        <div className='flex flex-wrap w-14 py-5'>
        <a src="https://www.instagram.com/lucassfrann_/?hl=es-la">
        <img src={IG}/>
        <p>Instagram</p>
        </a>
        </div>

        <div className='flex flex-wrap w-14 py-5'>
        <img src={DS}/>
        <p>Luqque#0277</p>
        </div>

      </div>
    </div>
  )
}

export default Contact