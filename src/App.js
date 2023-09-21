
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Appcontext } from './context/context'
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from "./components/SearchResult"
import VideoDetails from "./components/VideoDetails"
function App() {
 

  return ( 
    <>
   
    <Appcontext>

      <BrowserRouter>
      <div className="flex flex-col h-full">
      <Header/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
        <Route path='/video/:id' element={<VideoDetails/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </Appcontext>
    </>
  )
}

export default App
