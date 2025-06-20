// 영화상세페이지
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieDetail from '../components/MovieDetail'

function Detail() {
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieDetail />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Detail
