import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './login'
import Home from './home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App