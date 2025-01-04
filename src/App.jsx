import './App.css'
import {Header} from './components/Header'
import { Photos } from './components/Photos'
import { Search } from './components/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Search/>} />
        <Route path='/photos/:search' element={<Photos/>}/>
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App
