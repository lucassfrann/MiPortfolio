import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'
import Curriculum from './components/Curriculum';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='bg-gray-900'>
      <NavBar/>
      <div className="body">
      <Routes>
       <Route
       path='/'
       element={<Home/>}
       />

       <Route
       path='/portfolio'
       element={<Portfolio/>}
       />

       <Route
       path='/Contact'
       element={<Contact/>}
       />

       <Route
       path='/Curriculum'
       element={<Curriculum/>}
       />

      </Routes>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
