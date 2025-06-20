import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies, getMovieDetails } from '../api/tmdbApi'

export const fetchMovies = createAsyncThunk('moives/fetchMovies', async ({ category, page }) => {
   // category = 'popular', page = 2
   const response = await getMovies(category, page)
   return response.data.results // 배열데이터
})

export const fetchMovieDetails = createAsyncThunk('moives/fetchMovieDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   return response.data
})

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [], // 현재상영 or 개봉예정 or 인기영화 목록
      movieDetails: null, // 영화 상세 정보
      loading: false, // 로딩여부
      error: null, // 에러메세지
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false

            // action.meta.arg에서는 fetch 함수에서 매개변수로 받아온 값을 가져올 수 있음
            // 페이지가 1페이지 일때는 새로운 state로 업데이트
            if (action.meta.arg.page === 1) {
               state.movies = action.payload
            } else {
               // 페이지가 2페이지 이상일때는 기존 데이터 + 새로운 데이터 state로 업데이트
               state.movies = [...state.movies, ...action.payload]
            }
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetails = action.payload
         })
         .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieSlice.reducer
