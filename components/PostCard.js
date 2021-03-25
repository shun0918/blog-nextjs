import Link from 'next/link'
import styles from '../styles/components/PostCard.module.scss'

function PostCard({ title, thumbnail, body, publishedAt ,updatedAt, slug }) {
  return (
    <Link
      href={{ pathname: '/post', query: { slug:slug } }}
      passHref={true}
    >
      <a className={styles["post-card--link"]}>
        <div className={styles["post-card"]}>
          <div className={styles["post-card__eyecatch"]}>
            <img className={styles["post-card__eyecatch--img"]} alt={thumbnail.fields.file.fileName} src={thumbnail.fields.file.url} width="280" height="160"/>
          </div>
          <h2 className={styles["post-card__title"]}>{title}</h2>
          <p className={styles["datetime"]}>投稿日:<time>{publishedAt}</time></p>
        </div>
      </a>
    </Link>
  )
}

export default PostCard