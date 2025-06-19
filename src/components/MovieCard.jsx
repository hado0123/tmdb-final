import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom'

function MovieCard({ movies }) {
   // movies = [{..}, {..}, {..}...] 영화 목록 배열데이터
   return (
      //  spacing: 1 = 8px
      // 20px 간격
      <Grid container spacing={2.5}>
         {/* 12/5 = 2.4 => 한 행에 5개의 grid 정렬 */}
         {movies.map((movie) => (
            <Grid size={2.4} key={movie.id}>
               <Link to={`/detail/${movie.id}`} style={{ textDecoration: 'none' }}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardMedia sx={{ height: 400 }} image={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} title={movie.title} />
                     <CardContent>
                        <Typography
                           gutterBottom
                           variant="h5"
                           component="div"
                           sx={{
                              fontSize: 17,
                              whiteSpace: 'nowrap', // 한 줄로 설정
                              overflow: 'hidden', // 넘치는 텍스트 숨김
                              textOverflow: 'ellipsis', // 말줄임표 적용
                              width: '200px', // 최대 너비 설정
                           }}
                        >
                           {movie.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                           {movie.release_date}
                        </Typography>
                     </CardContent>
                  </Card>
               </Link>
            </Grid>
         ))}
      </Grid>
   )
}

export default MovieCard
