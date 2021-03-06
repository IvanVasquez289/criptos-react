// import styled from "@emotion/styled"
import styled from "styled-components"
import Formulario from "./Components/Formulario"
import Resultado from "./Components/Resultado"
import Spinner from "./Components/Spinner"
import ImagenCripto  from './img/imagen-criptos.png'
import { useState, useEffect } from "react"
const Contenedor = styled.div`
  max-width:900px ;
  margin: 0 auto ;
  width:90% ;

  @media (min-width: 992px) {
    /* minimo requiero ocupar 992px para aplicar los siguientes estilos */
    /* si es max-width ocupamos menos de los pixeles dados para aplicar los estilos */
    /* background-color:red ; */
    display:grid ;
    grid-template-columns:repeat(2,1fr) ;
  }
`

const Imagen = styled.img`
  max-width:400px ;
  width:80% ;
  margin:100px auto 0 auto ;
  display:block ;
`

const Heading = styled.h1`
  font-family: 'lato';
  color: #fff;
  text-align:center ;
  font-weight:700 ;
  margin-top:100px ;
  font-size:34px ;
  margin-bottom:50px ;

  /* esto crea un pseudo elemento desoues del h1, no tiene etiqueta */
  &::after{
    content:'' ;
    width: 100px;
    height:6px ;
    background-color:#66A2FE ;
    display:block ;
    margin:10px auto 0 auto ;
  }
`

function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {

    if(Object.keys(monedas).length>0){
      const cotizar = async () =>{
        setCargando(true)
        setResultado({})
        const {moneda,criptoMoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado.DISPLAY[criptoMoneda][moneda])
        setCargando(false)
      }

      cotizar()
    }

  }, [monedas])
  
  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt= 'Imagenes Criptomonedas'
      />

      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario
          setMonedas= {setMonedas}
        />
        {cargando && <Spinner/> }
        {resultado.PRICE && <Resultado resultado={resultado} />} 
      </div>
    </Contenedor>
  )
}

export default App
