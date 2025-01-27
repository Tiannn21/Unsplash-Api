import './App.css'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PhotoPage } from './components/PhotoPage'
import { Collections } from './components/Collections'
import { SearchPhotos } from './components/SearchPhotos'
import { CollectionPhotos } from './components/CollectionPhotos'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/photos/:search' element={<SearchPhotos/>}/>
        <Route path='/photos/:search/:id' element={<PhotoPage/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='/collections/:collectionTitle/:collectionId' element={<CollectionPhotos/>}/>
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App
