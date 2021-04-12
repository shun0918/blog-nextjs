import Link from 'next/link'
import styles from '../styles/components/PostCard.module.scss'

function PostCard({ title, thumbnail, body, publishedAt ,updatedAt, slug }) {
  return (
    <Link
      href={{ pathname: '/post/'+slug }}
      passHref={true}
    >
      <a className={styles["post-card--link"]}>
        <div className={styles["post-card"]}>
          <div className={styles["post-card__eyecatch"]}>
            <img className={styles["post-card__eyecatch--img"]} alt={thumbnail.fields.file.fileName} src={thumbnail.fields.file.url} width="320" height="240"/>
          </div>
          <div className={styles["post-card__body"]}>
            <p className={styles["post-card__date"]}><time>{publishedAt}</time></p>
            <h3 className={styles["post-card__title"]}>{title}</h3>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default PostCard