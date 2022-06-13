import styled from "styled-components"

const Texto = styled.div`
    background-color:#B7322C ;
    color: white;
    padding:15px ;
    font-size:22px ;
    text-transform:uppercase ;
    font-family: 'Lato' ;
    font-weight:700 ;
    text-align:center ;
`

const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error