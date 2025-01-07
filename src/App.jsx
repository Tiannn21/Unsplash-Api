import './App.css'
import { Header } from './components/Header'
import { Photos } from './components/Photos'
import { Home } from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PhotoPage } from './components/PhotoPage'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/photos/:search' element={<Photos/>}/>
        <Route path='/photos/:search/:id' element={<PhotoPage/>}/>
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App
