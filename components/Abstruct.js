import styles from '../styles/components/abstruct.module.scss'

export default Abstruct = ({ src, title, tag, description}) => {
  return (
    <div className={styles.abstruct}>
      <img src={ src } width={ width } height={ height } />
      <h3>{ title }</h3>
      <p>{tag.join("/")}</p>
      <p>{ description }</p>
    </div>
  )
}