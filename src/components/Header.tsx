import Link from 'next/link';
import styles from '~/styles/components/Header.module.scss';

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles['grobal-nav']}>
      <div className={styles['grobal-nav__inner']}>
        <h1 className={styles['grobal-nav__logo']}>
          <Link href="/">
            <a className={styles['grobalnav__logo--link']}>
              <span>Shun Bibo Roku</span>
            </a>
          </Link>
        </h1>
      </div>
    </div>
  </header>
);

export default Header;
