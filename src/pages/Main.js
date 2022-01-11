import Tempo from "../components/Tempo"
import ProgressBar from "../components/ProgressBar"
import styles from "./Main.module.css"
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";

function Main({tempo,porcentagem}){

  const navigate = useNavigate();

  const [visible,setVisible] = useState(true);

  function acabou(){
    let barraCarregamento = document.getElementById("LoadingBar")
    let barraCarregada = document.getElementById("LoadedBar")
    barraCarregada.addEventListener("transitionend",()=>{
      console.log("vlw flw")
      navigate('/fim')
    })

    setVisible(false)

    barraCarregamento.className = styles.transicao
  }

  useEffect(()=>{
    if(tempo.segundo==0 && tempo.minuto==0 && tempo.hora==0 && tempo.dia==0){
      acabou()
    }
  })
  
  const visibility = {
    transition: "left 3s,top 3s",
    position: visible ? "inherit" : "absolute",
    visibility: visible ? "inherit" : "hidden"
  }

  return(
    <div className={styles.main_div}>
      <Tempo tempo={tempo} visibility={visibility}/>
      <ProgressBar porcentagem={porcentagem*100} visible={visible} visibility={visibility} />
      <a href="https://github.com/LooperBR" id="github" style={visibility}>se fode ai</a>
    </div>
  )
}

export default Main