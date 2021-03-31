import styles from '../styles/components/PostEyecatch.module.scss'

function PostEyecatch({eyecatch, title}) {
  return (
    <div className={styles.eyecatch}>
      <div className={styles.eyecatch__inner}>
        <img className={styles.eyecatch__img}　alt={eyecatch.fields.file.fileName} src={eyecatch.fields.file.url} width="1280" height="512"/>
        <h2 className={styles.eyecatch__title}>{ title }</h2>
      </div>
    </div>
  )
}

export default PostEyecatch