import styled from 'styled-components'

export const Wrap = styled.div`
   overflow: hidden;
   min-width: ${(props) => props.$minWidth || '1200px'};
`

export const Main = styled.main`
   width: ${(props) => props.$width || '1200px'};
   margin: 0 auto;
   overflow: hidden;
   padding: ${(props) => props.$padding || 0};
`

export const Input = styled.input``

export const Button = styled.button``

export const Loading = styled.div`
   width: 100%;
   height: 400px;
   background-image: url(/images/loading.gif);
   background-repeat: no-repeat;
   background-position: center;
   background-size: 50px auto;
`

export const MarginDiv = styled.div``
