import styled from "styled-components"

const Contenido = styled.div`
    color:white ;
    font-family: 'Lato',sans-serif ;
    display:flex ;
    align-items:center ;
    gap:3rem ;
    margin-top:30px ;
`
const Precio = styled.p`
    font-size:24px ;
    span {
        font-weight:700 ;
    }
`

const Texto = styled.p`
    font-size:18px ;
    span {
        font-weight:700 ;
    }
`
const Imagen = styled.img`
   display:block ;
   width:120px ;

`

const Resultado = ({resultado}) => {
//   console.log(resultado)
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenido>
        <Imagen 
            src={`http://cryptocompare.com/${IMAGEURL}`} 
            alt="imagen cripto" 
        />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion ultimas 24hrs: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenido>
  )
}

export default Resultado