import styles from '../styles/components/RoundIcon.module.scss'

function RoundIcon({ href, src, alt="", width="37", height="37"}) {
  return (
    <div className={styles.roundicon}>
      <a href={ href }>
        <img 
          className={styles.roundicon__image}
          src={ src }
          alt={ alt }
          width={ width }
          height={ height }
        />
      </a>
    </div>
  )
}

export default RoundIcon