import styles from '../styles/components/PostContent.module.scss';

function PostContent({ title, thumbnail, body, publishedAt, updatedAt, slug }) {
  return (
    <article className={styles.content}>
      <div className={styles.content__head}>
        <h2 className={styles.content__title}>{title}</h2>
        <p className={styles.content__date}>投稿日: {publishedAt}</p>
      </div>
      <div className={styles['content__eyecatch-wrapper']}>
        <img
          className={styles.content__eyecatch}
          alt={thumbnail.fields.file.fileName}
          src={thumbnail.fields.file.url}
          width="1280"
          height="512"
        />
      </div>
      <div className={styles.content__body}>{body}</div>
    </article>
  );
}

export default PostContent;
