// 인기영화, 현재 상영중, 개봉예정 페이지
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function MovieCategory() {
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">인기영화, 현재상영중, 개봉예정</Main>
         <Footer />
      </Wrap>
   )
}

export default MovieCategory
