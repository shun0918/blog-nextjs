import styles from '~/styles/components/Abstruct.module.scss';

type Props = {
  imagePath: string;
  url: string;
  tags: string[];
  title: string;
  description: string;
  width: string;
  height: string;
};

const Abstruct: React.FC<Props> = ({
  imagePath,
  url,
  tags,
  title,
  description,
  width = '1280',
  height = '720',
}) => {
  const _tags: string = tags.join('/');

  return (
    <div className={styles.abstruct}>
      <a href={url} className={styles.abstruct__link}>
        <div className={styles['abstruct__image-flame']}>
          <img src={imagePath} width={width} height={height} className={styles.abstruct__image} />
        </div>
        <h3 className={styles.abstruct__title}>{title}</h3>
        <p className={styles.abstruct__tags}>{_tags}</p>
        <p className={styles.abstruct__description}>{description}</p>
      </a>
    </div>
  );
};

export default Abstruct;
