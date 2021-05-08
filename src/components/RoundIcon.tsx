import styles from '~/styles/components/RoundIcon.module.scss';
import Link from 'next/link';

type Props = {
  href: string;
  src: string;
  alt: string;
  width: string;
  height: string;
};

const RoundIcon: React.FC<Props> = ({ href, src, alt = '', width = '37', height = '37' }) => {
  const regex = /^https:\/\//;
  const isOtherSite = href.match(regex);
  const LinkTag: React.FC = ({ children }) =>
    isOtherSite ? (
      <a className={styles.roundicon__link} href={href}>
        {children}
      </a>
    ) : (
      <Link href={href}>
        <a className={styles.roundicon__link}>{children}</a>
      </Link>
    );
  return (
    <LinkTag>
      <div className={styles.roundicon}>
        <img
          className={styles.roundicon__image}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
    </LinkTag>
  );
};

export default RoundIcon;
