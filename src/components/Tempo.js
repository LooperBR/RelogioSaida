import styles from './Tempo.module.css'

function Tempo({dia,hora,minuto,segundo}){

  const diaCorrigido = (dia < 10 ? "0" : "")+dia
  const horaCorrigido = (hora < 10 ? "0" : "")+hora
  const minutoCorrigido = (minuto < 10 ? "0" : "")+minuto
  const segundoCorrigido = (segundo < 10 ? "0" : "")+segundo

  return(
    <div className={styles.tempo}>
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