import styles from '~/styles/components/PostContent.module.scss';
import { Asset, EntryFields } from 'contentful';
import { ReactNode } from 'react';
type Props = {
  title: EntryFields.Text;
  thumbnail: Asset<undefined>;
  body: ReactNode;
  publishedAt: EntryFields.Date;
  updatedAt: EntryFields.Date;
  slug: EntryFields.Text;
};

const PostContent: React.FC<Props> = ({ title, thumbnail, body, publishedAt }) => {
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
};

export default PostContent;
