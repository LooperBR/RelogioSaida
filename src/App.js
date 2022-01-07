import { useEffect, useState } from "react";

function App() {

  const[segundo,setSegundo] = useState()

  const[minuto,setMinuto] = useState()

  const[hora,setHora] = useState()

  const[dia,setDia] = useState()

  const data_final = new Date(2022, 0, 14, 17, 0, 0, 0);


  const relogioID = setInterval(function () {
    let idAtual = relogioID
    const agora = new Date()
    const diferenca = data_final.getTime()-agora.getTime()

    const diaa = parseInt(diferenca / (1000*60*60*24))
    var resto = diferenca % (1000*60*60*24)

    const horaa = parseInt(resto / (1000*60*60))
    resto = resto % (1000*60*60)

    const minutoa = parseInt(resto / (1000*60))
    resto = resto % (1000*60)

    const segundoa = parseInt(resto / (1000))

    setSegundo(segundoa)
    setMinuto(minutoa)
    setHora(horaa)
    setDia(diaa)

    if(segundo == 3){
      clearInterval(idAtual)
    }

  },1000)


  

  console.log(relogioID)

  // setInterval(function () {
  //   let idDropado = relogioID+40
  //   if(segundo == 3){
  //     while(idDropado>0){
  //       clearInterval(idDropado)
  //       idDropado--
  //     }

  //     clearInterval(relogioID)
  //   }
  // },500)

  return (
    <div>
      <p>{dia}:{hora}:{minuto}:{segundo}</p>
    </div>
  );
}

export default App;
