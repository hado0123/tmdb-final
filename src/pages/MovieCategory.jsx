// 인기영화, 현재 상영중, 개봉예정 페이지
import { Wrap, Main, Loading } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'
import Button from '@mui/material/Button'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchMovies } from '../features/movieSlice'

function MovieCategory({ category }) {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   // 카테고리 별 페이지번호
   const [page, setPage] = useState({
      popular: 1,
      now_playing: 1,
      upcoming: 1,
   })

   // category가 바뀔때(메뉴 누를때) 또는 page가 바뀔때(더 보기 버튼 누를때) 동작
   useEffect(() => {
      // category를 props로 받아와서 다른 category 전달
      dispatch(fetchMovies({ category, page: page[category] }))
   }, [dispatch, category, page])

   // 더보기 버튼 클릭시
   const loadMore = () => {
      // 내가 현재 들어와있는 카테고리의 page번호를 1씩 증가시킴
      setPage()
   }

   if (loading) {
      return (
         <Wrap>
            <Menu />
            <Main>
               <Loading />
            </Main>
            <Footer />
         </Wrap>
      )
   }

   if (error) {
      return (
         <Wrap>
            <Menu />
            <Main>
               <h2>Error: {error}</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieCard movies={movies} />
            <Button
               variant="outlined"
               sx={{
                  margin: '20px auto',
                  display: 'block',
                  width: '500px',
               }}
               onClick={loadMore}
            >
               더 보기
            </Button>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default MovieCategory
