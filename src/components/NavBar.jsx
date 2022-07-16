import {useState} from 'react'
import { Link } from 'react-router-dom'
import menu from '../assets/images/menu.png'

const NavBar = () => {

  let [open, setOpen] = useState(false)

  return (
    <nav  className='flex items-center justify-between flex-wrap border-b-2 border-blue-900 bg-sky-600 sm:bg-[url("https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")] h-80 w-full bg-cover bg-center' >
        <div className='text-m font-bold sm:text-3xl ml-4 cursor-pointer flex items-center text-white '>
         <Link to={'/'}>
         <ion-icon  name="logo-react"></ion-icon>
          L.F FRONTEND DEVELOPER 
         </Link>
        </div>
        <div className='block text-3xl cursor-pointer lg:hidden'>
          <button className="m-4" onClick={()=>setOpen(!open)}>
          <img className='w-7' src={menu}/>
          </button>
        </div>

        <div id='menu' className={`w-full block flex-grow font-[Roboto] md:my-0 my-7 md:text-center lg:flex lg:items-center lg:w-auto lg:text-right ${open ? '' : 'hidden'}`}>
          <div className='text-xl lg:flex-grow justify-center'>
            <Link to={'/'}>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 hover:border-b-2 border-sky-600 cursor-pointer'>Inicio</a>
            </Link>
            <Link to={'/'}>
            <a href="#aboutme" className='block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 hover:border-b-2 border-sky-600 cursor-pointer'>Sobre mi</a>
            </Link>
            <Link to={'/portfolio'}>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 hover:border-b-2 border-sky-600 cursor-pointer'>Portfolio</a>
            </Link>
            <Link to={'/curriculum'}>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 hover:border-b-2 border-sky-600 cursor-pointer'>Curriculum</a>
            </Link>
            <Link to={'/contact'}>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 hover:border-b-2 border-sky-600 cursor-pointer'>Contacto</a>
            </Link>
          </div>
        </div>
    </nav>
  )
}

export default NavBar