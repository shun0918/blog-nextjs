import Link from 'next/link';
import { Post } from '~/models/contentful/contentful';
import styles from '~/styles/components/PostCard.module.scss';

const PostCard: React.FC<Post> = ({ title, thumbnail, publishedAt, updatedAt, slug }) => {
  return (
    <Link href={{ pathname: '/post/' + slug }} passHref={true} className={styles['post-card--link']}>
      <div className={styles['post-card']}>
        <div className={styles['post-card__eyecatch']}>
          <img
            className={styles['post-card__eyecatch--img']}
            alt={thumbnail.fields.file.fileName}
            src={thumbnail.fields.file.url}
            width="320"
            height="240"
          />
        </div>
        <div className={styles['post-card__body']}>
          <h3 className={styles['post-card__title']}>{title}</h3>
          <p className={styles['post-card__date']}>
            <time>{publishedAt}</time>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
