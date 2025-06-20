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

export const Input = styled.input`
   width: 100%;
   outline: white;
   border-radius: 5px;
   height: ${(props) => props.$height || '15px'};
   font-size: ${(props) => props.$fontSize || '1rem'};
`

export const Button = styled.button`
   color: white;
   border: none;
   padding: 10px 20px;
   font-weight: 600;
   font-size: 1rem;
   border-radius: 4px;
   cursor: pointer;
   background-color: ${(props) => props.$backgroundColor || '#3b82f6'};
   width: ${(props) => props.$width || '100%'};

   &:hover {
      background-color: #2563eb;
   }
`

export const Loading = styled.div`
   width: 100%;
   height: 400px;
   background-image: url(/images/loading.gif);
   background-repeat: no-repeat;
   background-position: center;
   background-size: 50px auto;
`

export const MarginDiv = styled.div`
   margin-top: ${(props) => props.$marginTop || '40px'};
   margin-bottom: ${(props) => props.$marginBottom || '40px'};
`
