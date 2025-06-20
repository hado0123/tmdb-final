import { Button, Input } from '../styles/StyledComponent'
import './css/Banner.css'

function Banner() {
   return (
      <div className="banner">
         <div className="search">
            <h1 className="header_msg">환영합니다! 수백만 개의 영화를 지금 살펴보세요.</h1>

            <form className="search_form">
               <Input $height="40px" $fontSize="1.1rem" />
               <Button $width="100px" type="submit">
                  검색
               </Button>
            </form>
         </div>
      </div>
   )
}

export default Banner
