import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieCategory from './pages/MovieCategory'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />

         <Route path="/popular" element={<MovieCategory />} />
         <Route path="/now_playing" element={<MovieCategory />} />
         <Route path="/upcoming" element={<MovieCategory />} />

         <Route path="/search" element={<SearchResults />} />
         <Route path="/detail/:movieId" element={<Detail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
