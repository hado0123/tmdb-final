import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieDetails } from '../features/movieSlice'
import { useEffect } from 'react'

import { MarginDiv, Loading } from '../styles/StyledComponent'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'

function MovieDetail() {
   const { movieId } = useParams()
   const dispatch = useDispatch()
   const { movieDetails, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      if (movieId) {
         dispatch(fetchMovieDetails(movieId))
      }
   }, [dispatch, movieId])

   if (loading) return <Loading />
   if (error) return <p>Error: {error}</p>

   return (
      <MarginDiv $marginTop="10px">
         {movieDetails && (
            <Grid container spacing={2}>
               <Grid size={3}>
                  <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt={movieDetails.title} width="270" />
               </Grid>
               <Grid size={9}>
                  <h2 style={{ marginBottom: 10 }}>{movieDetails.title}</h2>

                  <h3 style={{ marginTop: 10 }}>줄거리</h3>
                  <p>{movieDetails.overview}</p>

                  <h3 style={{ marginTop: 10 }}>장르</h3>
                  <p>{movieDetails.genres.map((genre) => `${genre.name}`).join(', ')}</p>

                  <h3 style={{ marginTop: 10 }}>개봉일</h3>
                  <p>{movieDetails.release_date}</p>

                  <h3 style={{ marginTop: 10 }}>평점</h3>
                  <p>
                     <Rating name="read-only" value={movieDetails.vote_average / 2} readOnly />
                  </p>
               </Grid>
            </Grid>
         )}
      </MarginDiv>
   )
}

export default MovieDetail
