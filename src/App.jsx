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

         {/* 
           ★ 여러 경로에서 같은 컴포넌트를 사용시 주의점
           
           최초로 메뉴를 클릭시 MovieCategory 컴포넌트를 렌더링(마운트)
           이후 다른 메뉴 클릭시 MovieCategory 컴포넌트를 새로 마운트 하지 않고 재렌더링한다.
           문제는 page state값이 초기화 되지 않고 유지된다. 그러면 새로운 메뉴를 클릭 했을때
           해당 페이지 번호가 1이 되지 못하므로 문제가 발생한다.

           => 따라서 기존 MovieCategory를 언마운트 하고 새로 마운트가 일어나도록 하기 위해서 
           key props사용(page state가 모두 1로 초기화 된다)

           category props 상관없이 key props만 지정해도 언마운트 후 마운트 됨
           key는 라우터가 컴포넌트를 구분하기 위한 props
           MovieCategory를 하나의 컴포넌트로 보지 않고 각각 다른 컴포넌트로 인식해 마운트를 
           발생시킨다.

          <Route path="/popular" element={<MovieCategory key="popular" />} />
          <Route path="/now_playing" element={<MovieCategory key="now_playing" />} />
          <Route path="/upcoming" element={<MovieCategory key="upcoming" />} />
         */}
         <Route path="/popular" element={<MovieCategory key="popular" category="popular" />} />
         <Route path="/now_playing" element={<MovieCategory key="now_playing" category="now_playing" />} />
         <Route path="/upcoming" element={<MovieCategory key="upcoming" category="upcoming" />} />

         <Route path="/search" element={<SearchResults />} />
         <Route path="/detail/:movieId" element={<Detail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
