import "./App.css"
import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import Tempo from "./components/Tempo";

function App() {

  const[data_final] = useState(new Date(2022, 0, 14, 17, 0, 0, 0))

  const[data_inicial] = useState(new Date(2022, 0, 7, 0, 0, 0, 0))

  const[segundo,setSegundo] = useState('')

  const[minuto,setMinuto] = useState('')

  const[hora,setHora] = useState('')

  const[dia,setDia] = useState('')

  const[porcentagem,setPorcentagem] = useState()

  function acabou(){
    console.log("vlw flw")
  }
  


  useEffect(()=>{

    let inicio = data_inicial.getTime()

    let fim = data_final.getTime()

    let atual = new Date().getTime()

    //let atual = new Date(2022, 0, 14, 0, 0, 0, 0).getTime()

    atual = atual - inicio

    fim = fim - inicio

    inicio = 0

    setPorcentagem(atual/fim)

    const relogioID = setInterval(function () {
      
      const agora = new Date()
      
      const diferenca = data_final.getTime()-agora.getTime()
  
      const diaResult = parseInt(diferenca / (1000*60*60*24))
      var resto = diferenca % (1000*60*60*24)
  
      const horaResult = parseInt(resto / (1000*60*60))
      resto = resto % (1000*60*60)
  
      const minutoResult = parseInt(resto / (1000*60))
      resto = resto % (1000*60)
  
      const segundoResult = parseInt(resto / (1000))
  
      setSegundo(segundoResult)
      setMinuto(minutoResult)
      setHora(horaResult)
      setDia(diaResult)
  
    },1000)

    if((segundo === 0 && minuto === 0 && hora === 0 && dia === 0)||segundo<0){
      console.log("fudeu")
      setSegundo(0)
      setMinuto(0)
      setHora(0)
      setDia(0)

      acabou()
      
      clearInterval(relogioID)
    }

    return ()=>{
      clearInterval(relogioID)
    }

  },[segundo, minuto, hora, dia, data_final,data_inicial])

  return (
    <div className="main_div">
      {/* <p>Inicial:{data_inicial.toDateString()}</p>
      <p>Final:{data_final.toDateString()}</p>
      <p>{dia}:{hora}:{minuto}:{segundo}</p> */}
      <Tempo dia={dia} hora={hora} minuto={minuto} segundo={segundo}/>
      <ProgressBar porcentagem={porcentagem*100} />
      <a href="https://github.com/LooperBR" style={{textDecoration: "none",color:"#060a1f"}}>se fode ai</a>
    </div>
  );
}

export default App;
