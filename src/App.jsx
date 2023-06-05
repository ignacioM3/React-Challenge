import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'


import './App.css'
import { PokemonProvider } from './context/PokemonProvider'
import Search from './pages/Search'


function App() {


  return (
    <BrowserRouter>
    <PokemonProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='search/:name' element={<Search />} />
        </Route>
      </Routes>
      </PokemonProvider>
    </BrowserRouter>
  )
}

export default App

