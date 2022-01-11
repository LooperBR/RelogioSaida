import "./App.css"
import { useEffect, useRef, useState } from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import Main from "./pages/Main";
import End from "./pages/End"

function App() {

  const[data_final] = useState(new Date(2022, 0, 14, 17, 0, 0, 0))

  const[data_inicial] = useState(new Date(2022, 0, 7, 0, 0, 0, 0))

  const [tempo,setTempo] = useState(
    {
      segundo:1,
      minuto:'',
      hora:'',
      dia:'',
    }
  )

  const[porcentagem,setPorcentagem] = useState()

  const relogioID = useRef()

  function verificaTempo(){
    console.log(tempo.segundo)
    if(tempo.segundo==0 && tempo.minuto==0 && tempo.hora==0 && tempo.dia==0){
      clearInterval(relogioID.current)
    }
  }
  
  useEffect(()=>{
    relogioID.current = setInterval(function () {
      
      const agora = new Date()
      
      const diferenca = data_final.getTime()-agora.getTime()
  
      const diaResult = parseInt(diferenca / (1000*60*60*24))
      var resto = diferenca % (1000*60*60*24)
  
      const horaResult = parseInt(resto / (1000*60*60))
      resto = resto % (1000*60*60)
  
      const minutoResult = parseInt(resto / (1000*60))
      resto = resto % (1000*60)
  
      const segundoResult = parseInt(resto / (1000))
  
      setTempo(
        {
          segundo:segundoResult,
          minuto:minutoResult,
          hora:horaResult,
          dia:diaResult,
        }
      )
  
    },1000)

    
  },[])

  useEffect(()=>{

    let inicio = data_inicial.getTime()

    let fim = data_final.getTime()

    let atual = new Date().getTime()

    //let atual = new Date(2022, 0, 14, 0, 0, 0, 0).getTime()

    atual = atual - inicio

    fim = fim - inicio

    inicio = 0

    setPorcentagem(atual/fim)

    //console.log(tempo.segundo)

    verificaTempo()

  },[tempo.segundo])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main tempo={tempo} porcentagem={porcentagem}/>}/>
        <Route path="/fim" element={<End />}/>
      </Routes>
      
    </Router>
  );
}

export default App;
