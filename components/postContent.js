import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from '../styles/components/PostContent.module.scss'

function PostContent({ title, thumbnail, body, publishedAt, updatedAt, slug }) {
  console.log(body);
  
  return (
    <article className={styles.content}>
      <div className={styles.content__head}>
        <img className={styles.content__eyecatch}　alt={thumbnail.fields.file.fileName} src={thumbnail.fields.file.url} width="640" height="360"/>
        <h2 className={styles.content__title}>{ title }</h2>
        <p className={styles.content__date}>投稿日:{" "}<date>{publishedAt}</date></p>
      </div>
      <div className={styles.content__body}>
        {documentToReactComponents(body)}
      </div>
    </article>
  )
}

export default PostContent