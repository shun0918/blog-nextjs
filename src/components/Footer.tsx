import styles from '~/styles/components/Footer.module.scss';
const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles['content-info']}>
      <span>©️ 2021 created by Shun Nihei</span>
    </div>
  </footer>
);

export default Footer;
