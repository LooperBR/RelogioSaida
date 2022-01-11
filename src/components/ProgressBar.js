import styles from './ProgressBar.module.css'

function ProgressBar({porcentagem,visible,visibility}){

  const full = {
    transition: "width 3s, height 3s",
    width: visible ? "90vw" : "100%",
    //position: 'absolute',
    // height: visible ? "40px" : "100%"
  }

  const loaded = {
    //width: porcentagem+'%',
    width: 100+'%',
    transition: "background-color 2s 3s",
    backgroundColor: visible ? "greenyellow" : "#060a1f"

  }

  return(
    <div className={styles.main_div} style={full}>
      <p style={visibility}>Liberdade loading...</p>
      <div id="LoadingBar" className={styles.progress_bar} style={full}>
        <div id="LoadedBar" className={styles.loaded} style={loaded}>
          <p>{porcentagem.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar