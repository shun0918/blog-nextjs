import Link from 'next/link';
import { ReactNode } from 'react';
import styles from '~/styles/components/RoundIcon.module.scss';

type Props = {
  href: string;
  src: string;
  alt: string;
  width: string;
  height: string;
  children: ReactNode;
};

const RoundIcon: React.FC<Props> = ({ href, src, alt = '', width = '37', height = '37' }) => {
  const regex = /^https:\/\//;
  const isOtherSite = href.match(regex);
  const LinkTag = ({ children }: { children: ReactNode}) =>
    isOtherSite ? (
      <a className={styles.roundicon__link} href={href}>
        {children}
      </a>
    ) : (
      <Link href={href} className={styles.roundicon__link}>
        {children}
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
        <div className={styles['roundicon__alt-wrapper']}>
          <span className={styles.roundicon__alt}>{alt}</span>
        </div>
      </div>
    </LinkTag>
  );
};

export default RoundIcon;
