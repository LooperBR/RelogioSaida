import styles from './Tempo.module.css'

function Tempo({tempo,visibility}){

  const diaCorrigido = (tempo.dia < 10 ? "0" : "")+tempo.dia
  const horaCorrigido = (tempo.hora < 10 ? "0" : "")+tempo.hora
  const minutoCorrigido = (tempo.minuto < 10 ? "0" : "")+tempo.minuto
  const segundoCorrigido = (tempo.segundo < 10 ? "0" : "")+tempo.segundo

  return(
    <div className={styles.tempo} style={visibility}>
      <div className={styles.card}>
        <span className={styles.numero}>
          {diaCorrigido}
        </span>
        <span className={styles.texto}>
          Dias
        </span>
      </div>
      <div className={styles.card}>
        <span className={styles.numero}>
          {horaCorrigido}
        </span>
        <span className={styles.texto}>
          Horas
        </span>
      </div>
      <div className={styles.card}>
        <span className={styles.numero}>
          {minutoCorrigido}
        </span>
        <span className={styles.texto}>
          Minutos
        </span>
      </div>
      <div className={styles.card}>
        <span className={styles.numero}>
          {segundoCorrigido}
        </span>
        <span className={styles.texto}>
          Segundos
        </span>
      </div>
    </div>
  )
}

export default Tempo