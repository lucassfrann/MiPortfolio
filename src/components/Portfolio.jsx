import React from 'react'
import Card from './Card'
import work from '../assets/images/work.png'

function Portfolio() {
  return (
    <div className='w-full h-full'>
      <h1 className='text-white text-5xl text-center text-[Archivo Black] font-bold py-6'>MIS TRABAJOS</h1>
      <div className='flex justify-center'>
      <img className='h-64 w-64' src={work}/>
      </div>
      <div className='grid m-2 grid-rows-3 sm:grid-cols-3 py-6 justify-center'>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}

export default Portfolio