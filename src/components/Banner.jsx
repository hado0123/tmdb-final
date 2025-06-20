import { useState } from 'react'
import { Button, Input } from '../styles/StyledComponent'
import './css/Banner.css'
import { useNavigate } from 'react-router-dom'

function Banner() {
   const [query, setQuery] = useState('')
   const navigate = useNavigate()

   const handleInputChange = (e) => {
      setQuery(e.target.value)
   }

   // 검색 버튼 눌렀을때 검색어를 /search 경로(SearchResults.jsx)로 전달
   const handleSearch = (e) => {
      e.preventDefault() //기본 sumbit 버튼의 성질 방지

      // navigate(이동할 경로)
      navigate(`/search?query=${query.trim()}`) // 공백을 제거한 검색어를 query 파라미터로 전달
   }

   return (
      <div className="banner">
         <div className="search">
            <h1 className="header_msg">환영합니다! 수백만 개의 영화를 지금 살펴보세요.</h1>

            <form className="search_form" onSubmit={handleSearch}>
               <Input $height="40px" $fontSize="1.1rem" value={query} onChange={handleInputChange} />
               <Button $width="100px" type="submit">
                  검색
               </Button>
            </form>
         </div>
      </div>
   )
}

export default Banner
