import './App.css'
import {HashRouter, Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import LoadingScreen from './components/LoadingScreen'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


function App() {
  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      {isLoading && <LoadingScreen /> }
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<ContactMe/>} /> 
      </Routes>
    </HashRouter>
  )
}

export default App
