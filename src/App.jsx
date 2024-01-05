import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Speaking from './Pages/Speaking/index';
import Social from './Pages/Social/index';
import Playlist from './Pages/Playlist/index';
import Home from './Pages/Home/index';

const App = () => {
  return (
    <div className="main">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/speaking' element={<Speaking/>} />
        <Route path='/social' element={<Social/>} />
        <Route path='/playlists' element={<Playlist/>} />
      </Routes>
    </div>
  )
}

export default App