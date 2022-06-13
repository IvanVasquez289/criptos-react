import {useState, useEffect } from "react"
import styled from "styled-components"
import Error from "./Error"
import useSelectMonedas from "../Hooks/useSelectMonedas"
import { monedas } from "../data/monedas"
const InputSubmit = styled.input`
    background-color:#9497ff ;
    border:none ;
    width:100% ;
    padding:10px ;
    color:white ;
    font-weight: 700; 
    font-size:20px ;
    text-transform:uppercase ;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color:#747dfe ;
        transition: background-color .3s ease ;
    }
`
const Formulario = ({setMonedas}) => {
  const [criptos,setCriptos] = useState([])
  const [error,setError] = useState(false)

// el nombre es un alias, decidimos ponerle el mismo, lo que importa es el orden
  const [SelectMonedas,moneda] = useSelectMonedas('Elige tu moneda',monedas)
  const [SelectCripto, criptoMoneda,] = useSelectMonedas('Elige tu criptomoneda',criptos)


  useEffect(() => {

    const consultarAPI = async ()=>{
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const arrayCriptos = resultado.Data.map( cripto =>{
        const objeto ={
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }

        return objeto
      })
      
      setCriptos(arrayCriptos)

    } 
    consultarAPI()
  }, [])
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(moneda === '' || criptoMoneda===''){
      setError(true)
      return
    }
 
    setError(false)
    setMonedas({
      moneda,
      criptoMoneda
    })

  }
  
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error> }
      <form
        onSubmit={handleSubmit}
      >
          <SelectMonedas/>
          {/* {moneda} */}

          <SelectCripto/>
          {/* {criptoMoneda} */}

          <InputSubmit 
              type="submit"
              value="Cotizar" 
          />
      </form>
    </>
  )
}

export default Formulario