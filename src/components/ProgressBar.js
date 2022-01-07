import styles from './ProgressBar.module.css'

function ProgressBar({porcentagem}){

  return(
    <div className={styles.main_div}>
      <p>Liberdade loading...</p>
      <div className={styles.progress_bar}>
        <div className={styles.loaded} style={{width: porcentagem+'%'}}>
          <p>{porcentagem.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar