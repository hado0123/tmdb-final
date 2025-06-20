// 검색결과 페이지
import { Wrap, Main, Loading } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Button from '@mui/material/Button'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchSearchResults } from '../features/movieSlice'
import MovieCard from '../components/MovieCard'

function SearchResults() {
   const [page, setPage] = useState(1) // 페이지 번호
   const dispath = useDispatch()
   const { searchResults, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispath(fetchSearchResults({ query: '안녕', page }))
   }, [dispath, page])

   // 더보기 누르면 page 1씩 증가
   const loadMore = () => {
      setPage((prevState) => prevState + 1)
   }

   if (loading && page === 1) {
      return (
         <Wrap>
            <Menu />
            <Main $padding="30px 0">
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
            <Main $padding="30px 0">
               <h2>오류발생: {error}</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieCard movies={searchResults} />
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

export default SearchResults
