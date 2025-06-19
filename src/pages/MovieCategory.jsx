// 인기영화, 현재 상영중, 개봉예정 페이지
import { Wrap, Main, Loading } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchMovies } from '../features/movieSlice'

function MovieCategory() {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchMovies({ category: 'upcoming', page: 1 }))
   }, [dispatch])

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
         </Main>
         <Footer />
      </Wrap>
   )
}

export default MovieCategory
