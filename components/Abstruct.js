import styles from '../styles/components/abstruct.module.scss'

function Abstruct({ src, url, tags, title, description, width="1280", height="720"}) {
  return (
    <div className={styles.abstruct}>
      <a href={url} className={styles.abstruct__link}>
        <img src={ src } width={ width } height={ height } className={styles.abstruct__image}/>
        <h3 className={ styles.abstruct__title }>{ title }</h3>
        <p className={ styles.abstruct__tags }>{ tags.join("/") }</p>
        <p className={ styles.abstruct__description }>{ description }</p>
      </a>
    </div>
  )
}

export default Abstruct